import React from "react";
import NotesCardSkeleton from "./NotesCardSkeleton";

function NotesGridSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <NotesCardSkeleton key={index} />
      ))}
    </div>
  );
}

export default NotesGridSkeleton;