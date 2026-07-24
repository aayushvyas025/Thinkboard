import React, { lazy } from "react";
import { Route, Routes } from "react-router";

const CreatePage = lazy(() => import("../pages/Create"));
const HomePage = lazy(() => import("../pages/Home"));
const NoteDetailPage = lazy(() => import("../pages/NoteDetail"));
const NotFoundPage = lazy(() => import("../pages/NotFound"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/detail/:id" element={<NoteDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
