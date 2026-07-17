import { PenSquareIcon, Trash2Icon } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { formattedDate } from "../../utils/dateUtils";

function NotesCard({ note }) {
  return (
    <Link
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]"
      to={`/detail/${note._id}`}
    >
      <div className="card-body">
        <h2 className="card-title text-base-content">{note.title}</h2>
        <p className="text-base-content/70 line-clamp-3">{note.description}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formattedDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button className="btn btn-ghost btn-xs">
              <Trash2Icon className="size-4 text-error" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NotesCard;
