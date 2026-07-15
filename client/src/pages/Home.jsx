import React, { Suspense, useEffect } from "react";
import Header from "../components/page/Header";
import Layout from "../layout/Layout";
import useFetchNotes from "../hooks/useFetchNotes";

function Home() {
  const { isRateLimited, fetchNotes } = useFetchNotes();

  useEffect(() => {
    fetchNotes();
  }, [])
  return (
    <Suspense>
      <Layout>
        <Header />
        {isRateLimited && <RateLimiting />}
      </Layout>
    </Suspense>
  );
}

export default Home;
