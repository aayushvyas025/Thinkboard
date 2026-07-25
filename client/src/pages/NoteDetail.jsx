import React, { Suspense, useEffect } from "react";
import Layout from "../layout/Layout";
import useFetchNoteById from "../hooks/useFetchNoteById";
import { Link, useParams } from "react-router";
import Loader from "../components/loader/Loader";
import { LoaderIcon, Trash2Icon } from "lucide-react";
import BackButton from "../components/BackButton/BackButton";
import useDeleteNote from "../hooks/useDeleteNote";
import DetailNote from "../components/notes/DetailNote";
import NoteDetailSkeleton from "../components/skeletons/NoteDetailSkeleton";

function NoteDetail() {
  const { isLoading, isRateLimited, note, fetchNoteById, setNote } =
    useFetchNoteById();
  const { id } = useParams();

  useEffect(() => {
    fetchNoteById(id);
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
