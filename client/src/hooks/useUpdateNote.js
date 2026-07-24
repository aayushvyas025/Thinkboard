import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import API from "../config/axiosConfig";
import toast from "react-hot-toast";

function useUpdateNote() {
  const [saving, setSaving] = useState(false);

  async function updateNote(id) {
    setSaving(true);
    try {
      await API.put(`/notes/update/${id}`);
    } catch (error) {
      console.error(`Error, while updating notes ${error.message}`);
      if (error?.response?.status === 429) {
        toast.error("Slow down! You are creating the notes to fast", {
          duration: 4000,
          icon: "💀",
        });
      }
    } finally {
      setSaving(false);
    }
  }

  return {  saving, updateNote };
}

export default useUpdateNote;