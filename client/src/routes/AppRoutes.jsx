import React, { lazy } from "react";
import { Route, Routes } from "react-router";

const CreatePage = lazy(() => import("../pages/Create"));
const HomePage = lazy(() => import("../pages/Home"));
const NoteDetailPage = lazy(() => import("../pages/NoteDetail"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/details/:id" element={<NoteDetailPage />} />
    </Routes>
  );
}

export default AppRoutes;
