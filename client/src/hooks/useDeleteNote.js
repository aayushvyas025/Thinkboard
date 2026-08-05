import { useState } from "react";
import API from "../config/axiosConfig";


function useDeleteNote() {
  const [isLoading, setIsLoading] = useState(false);
  async function deleteNote(id) {
    setIsLoading(true);
    try {
      await API.delete(`notes/delete/${id}`);
      return { success: true, message: `Note deleted successfully` };
    } catch (error) {
      console.error(`Error, while deleting note ${error.message}`);
      return {
        success: false,
        message: `Error, while deleting note`,
        isRateLimited: error?.response?.status === 429,
      };
    } finally {
      setIsLoading(false);
    }
  }

  return { deleteNote };
}

export default useDeleteNote;
