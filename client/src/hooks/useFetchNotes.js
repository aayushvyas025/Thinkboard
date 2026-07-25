import { useState } from "react";
import toast from "react-hot-toast";
import envVariables from "../constant/envVariables";
import API from "../config/axiosConfig";

function useFetchNotes() {
  const [isRateLimited, setRateLimited] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);
  async function fetchNotes() {
    setLoading(true);
    try {
      const response = await API.get(`/notes/fetch`);
      console.log(response)
      setNotes(response?.data?.notes);
      setRateLimited(false);
    } catch (error) {
      console.error(`Error while fetching notes: ${error.message}`);
      toast.error(`Error, while fetching notes`);
      if (error?.response?.status === 429) {
        setRateLimited(true);
      }
    } finally {
      setLoading(false);
    }
  }

  return { isRateLimited, isLoading, fetchNotes, notes, setNotes };
}

export default useFetchNotes;
