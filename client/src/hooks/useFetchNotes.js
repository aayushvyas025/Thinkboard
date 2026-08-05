import { useState } from "react";
import API from "../config/axiosConfig";

function useFetchNotes() {
  const [isRateLimited, setRateLimited] = useState(false);
  const [isLoading, setLoading] = useState(false);
  async function fetchNotes() {
    setLoading(true);
    try {
      const { data } = await API.get(`/notes/fetch`);
      setRateLimited(false);
      return {
        success: true,
        notes: data.notes,
        message: `Notes fetch successfully`,
      };
    } catch (error) {
      console.error(`Error while fetching notes: ${error.message}`);
      if (error?.response?.status === 429) {
        setRateLimited(true);
      }
      return {
        success: false,
        message:
          error?.response?.data?.message || `Error, while fetching notes`,
      };
    } finally {
      setLoading(false);
    }
  }

  return { isRateLimited, isLoading, fetchNotes };
}

export default useFetchNotes;
