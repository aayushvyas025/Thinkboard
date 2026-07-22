import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import API from "../config/axiosConfig";

function useUpdateNote() {
  const [note, setNote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  async function updateNote(id) {
    setIsLoading(true);
    setSaving(false);
    try {
      const response = await API.put(`/notes/update/${id}`);
      setSaving(true);
      setNote(response.data.note);
      setIsRateLimited(false);
    } catch (error) {
      console.error(`Error, while updating notes ${error.message}`);
      if (error?.response?.status === 429) {
        setIsRateLimited(true);
      }
    } finally {
      setIsLoading(false);
      setSaving(false);
    }
  }

  return { note, isLoading, isRateLimited, saving, updateNote };
}
