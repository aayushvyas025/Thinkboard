import { useState } from "react";
import API from "../config/axiosConfig";
import toast from "react-hot-toast";

function useFetchNoteById() {
  const [isLoading, setLoading] = useState(false);
  const [isRateLimited, setRateLimited] = useState(false);
  const [note, setNote] = useState([]);

  async function fetchNoteById(id) {
    setLoading(true);
    try {
      const response = await API.get(`/notes/fetch/${id}`);
      setNote(response?.data?.note);
      setRateLimited(false);
    } catch (error) {
      console.error(`Error, while fetching note by id ${error.message}`);
      toast.error(`Error, while fetching note by id`);
      if (error?.response?.status === 429) {
        setRateLimited(true);
      }
    } finally {
      setLoading(false);
    }
  }
  return { isLoading, isRateLimited, note, fetchNoteById };
}
