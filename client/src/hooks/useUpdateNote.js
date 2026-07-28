import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import API from "../config/axiosConfig";
import toast from "react-hot-toast";

function useUpdateNote() {
  const [saving, setSaving] = useState(false);

  async function updateNote(id, note) {
    setSaving(true);
    try {
      await API.put(`/notes/update/${id}`, note);
      return { success: true, message: `Note updated successfully` };
    } catch (error) {
      console.error(`Error, while updating note ${error.message}`);
      return {
        success: false,
        message: `Error, while updating note`,
        isRateLimited: error.response.status === 429,
      };
    } finally {
      setSaving(false);
    }
  }

  return { saving, updateNote };
}

export default useUpdateNote;
