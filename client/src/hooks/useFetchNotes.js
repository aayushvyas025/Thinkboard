import { useState } from "react";
import toast from "react-hot-toast";
import envVariables from "../constant/envVariables";

function useFetchNotes() {
  const [isRateLimited, setRateLimited] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const { backendUrl } = envVariables;
  async function fetchNotes() {
    setLoading(true);
    try {
      const response = await fetch(`${backendUrl}/notes/fetch`);
      const data = await response.json();
      setNotes(data.notes);
      setRateLimited(false);
    } catch (error) {
      console.error(`Error while fetching notes: ${error.message}`);
      if (error?.response?.status === 429) {
        setRateLimited(true);
      } else {
        toast.error(`Failed to load notes`);
      }
    } finally {
      setLoading(false);
    }
  }

  return { isRateLimited, isLoading, fetchNotes, notes };
}

export default useFetchNotes;
