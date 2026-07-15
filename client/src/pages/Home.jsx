import React, { Suspense } from "react";
import Header from "../components/page/Header";
import Layout from "../layout/Layout";

function Home() {
  return (
    <Suspense>
      <Layout>
        <Header />
      </Layout>
    </Suspense>
  );
}

export default Home;
