import  { Suspense, useEffect, useState } from "react";
import Layout from "../layout/Layout";
import useFetchNoteById from "../hooks/useFetchNoteById";
import { useParams } from "react-router";
import Loader from "../components/loader/Loader";
import { LoaderIcon } from "lucide-react";
import DetailNote from "../components/notes/DetailNote";
import NoteDetailSkeleton from "../components/skeletons/NoteDetailSkeleton";
import toast from "react-hot-toast";

function NoteDetail() {
  const [note, setNote] = useState({});
  const { isLoading, fetchNoteById } = useFetchNoteById();
  const { id } = useParams();

  async function handleFetchNote(id) {
    const { success, noteById, message, isRateLimited } =
      await fetchNoteById(id);
    if (!success) {
      toast.error(message);
      return;
    }

    if (isRateLimited) {
      toast.error(`Slow down! You are creating the notes to fast`, {
        duration: 4000,
        icon: "💀",
      });
      return;
    }

    setNote(noteById);
  }

  useEffect(() => {
    handleFetchNote(id);
  }, [id]);

  if (isLoading) {
    return (
      <Loader
        style={"min-h-screen bg-base-200 flex items-center justify-center"}
      >
        <LoaderIcon className="animate-spin size-8" />
      </Loader>
    );
  }

  return (
    <Suspense fallback={<NoteDetailSkeleton />}>
      <Layout style={"min-h-screen bg-base-200"}>
        <DetailNote note={note} setNote={setNote} />
      </Layout>
    </Suspense>
  );
}

export default NoteDetail;
