import React from "react";
import { Link } from "react-router";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import NotesCard from "./NotesCard";

function NotesContainer({ notes, setNotes }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
      {notes.map((note) => (
        <NotesCard key={note._id} note={note} setNotes={setNotes} />
      ))}
    </div>
  );
}

export default NotesContainer;
