import React, { Suspense, useEffect } from "react";
import Header from "../components/page/Header";
import Layout from "../layout/Layout";
import useFetchNotes from "../hooks/useFetchNotes";
import Loader from "../components/loader/loader";
import NotesContainer from "../components/notes/NotesContainer";
import RateLimiting from "../components/rate-limiting/RateLimiting";
import BackgroundGradient from "../components/gradient/BackgroundGradient";

function Home() {
  const { isRateLimited, fetchNotes, notes, isLoading, setNotes } = useFetchNotes();

  useEffect(() => {
    fetchNotes();
  }, [setNotes]);

  return (
    <Suspense>
      <Layout style={'relative h-full w-full'}>
        <BackgroundGradient />
        <Header />
        <div className="max-w-7xl mx-auto pt-4 mt-0"></div>
        {isRateLimited && <RateLimiting />}
        {isLoading && (
          <Loader
            text={"Notes Loading...."}
            style={"text-center text-primary py-10"}
          />
        )}
        {notes.length > 0 && !isRateLimited && (
          <NotesContainer notes={notes} setNotes={setNotes} />
        )}
      </Layout>
    </Suspense>
  );
}

export default Home;
