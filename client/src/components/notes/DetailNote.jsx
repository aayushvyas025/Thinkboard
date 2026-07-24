import React from "react";
import BackButton from "../BackButton/BackButton";
import { Trash2Icon } from "lucide-react";
import FormInput from "../input/FormInput";
import useUpdateNote from "../../hooks/useUpdateNote";
import toast from "react-hot-toast";
import { inputValidations } from "../../utils/validations";
import { useNavigate } from "react-router";
import useDeleteNote from "../../hooks/useDeleteNote";

function DetailNote({ note, setNote }) {
  const { saving, updateNote } = useUpdateNote();
  const { deleteNote } = useDeleteNote();
  const navigate = useNavigate();

  function handleUpdate(id) {
    const validation = inputValidations({
      title: note.title,
      description: note.description,
    });

    if (!validation.success) {
      toast.error("All fields are required");
    } else {
      updateNote(id, note);
      toast.success("Notes updated successfully");
      navigate("/");
    }
  }

  function handleDelete(id) {
    const confirm = window.confirm(
      "Are you sure you want to delete this note?",
    );
    if (!confirm) return;
    deleteNote(id);
    toast.success(`Note deleted successfully`);
    navigate("/");
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <BackButton title={"Back to Notes"} link={"/"} />
          <button
            onClick={() => handleDelete(note._id)}
            className="btn btn-error btn-outline"
          >
            <Trash2Icon className="h-5 w-5" />
            Delete Note
          </button>
        </div>
        <div className="card bg-base-100">
          <div className="card-body">
            <FormInput
              labelRef={"title"}
              label={"Title"}
              inputId={"title"}
              type={"text"}
              value={note.title}
              style={"input input-bordered"}
              onChangeHandler={(event) =>
                setNote({ ...note, title: event.target.value })
              }
            />
            <FormInput
              label={"Description"}
              labelRef={"description"}
              style={"textarea textarea-bordered h-32"}
              value={note.description}
              onChangeHandler={(event) =>
                setNote({ ...note, description: event.target.value })
              }
            />
            <div className="card-actions justify-end">
              <button
                type="submit"
                onClick={() => handleUpdate(note._id, note)}
                className="btn btn-primary"
                disabled={saving}
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailNote;
