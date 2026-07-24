import { useState } from "react";
import API from "../config/axiosConfig";
import toast from "react-hot-toast";

function useDeleteNote() {
  const [isLoading, setIsLoading] = useState(false);
  async function deleteNote(id) {
    setIsLoading(true);
    try {
      await API.delete(`notes/delete/${id}`);
    } catch (error) {
      console.error(`Error, while deleting note ${error.message}`);
      toast.error(`Error, while deleting note`);
      if (error?.response?.status === 429) {
        toast.error(`Slow down! You are creating the notes to fast`, {
          duration: 4000,
          icon: "💀",
        });
      }
    } finally {
      setIsLoading(false);
    }
  }

  return { deleteNote };
}

export default useDeleteNote;
