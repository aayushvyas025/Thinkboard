import { useState } from "react";
import API from "../config/axiosConfig";

function useFetchNoteById() {
  const [isLoading, setLoading] = useState(false);
  async function fetchNoteById(id) {
    setLoading(true);
    try {
      const { data } = await API.get(`/notes/fetch/${id}`);
      return {
        success: true,
        noteById: data.note,
        message: `Note fetch successfully`,
      };
    } catch (error) {
      console.error(`Error, while fetching note by id ${error.message}`);
      return {
        success: false,
        isRateLimited: error?.response?.status === 429,
        message: `Error, while fetching note by id`,
      };
    } finally {
      setLoading(false);
    }
  }
  return { isLoading, fetchNoteById  };
}

export default useFetchNoteById;
