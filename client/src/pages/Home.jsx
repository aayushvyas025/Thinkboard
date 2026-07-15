import React, { Suspense } from "react";
import Header from "../components/page/Header";

function Home() {
  return (
    <Suspense>
      <main className="min-h-screen">
        <Header />
      </main>
    </Suspense>
  );
}

export default Home;
