import { useState } from "react";
import toast from "react-hot-toast";
import envVariables from "../constant/envVariables";
import API from "../config/axiosConfig";

function useFetchNotes() {
  const [isRateLimited, setRateLimited] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const { backendUrl } = envVariables;
  async function fetchNotes() {
    setLoading(true);
    try {
      const response = await API.get(`/notes/fetch`);
      setNotes(response.data.notes);
      setRateLimited(false);
    } catch (error) {
      console.error(`Error while fetching notes: ${error.message}`);
      toast.error(`Error, while fetching notes`);
      if (error?.response?.status === 429) {
        setRateLimited(true);
        toast.error("Failed to load notes");
      }
    } finally {
      setLoading(false);
    }
  }

  return { isRateLimited, isLoading, fetchNotes, notes };
}

export default useFetchNotes;
