import { useState } from "react";
import API from "../config/axiosConfig";
import toast from "react-hot-toast";

function useDeleteNote() {
  async function deleteNote(id) {
    try {
      await API.delete(`notes/delete/${id}`);
    } catch (error) {
      console.error(`Error, while deleting notes ${error.message}`);
      toast.error(`Error, while creating note`);
      if (error?.response?.status === 429) {
        toast.error(`Slow down! You are creating the notes to fast`, {
          duration: 4000,
          icon: "💀",
        });
      }
    }
  }

  return { deleteNote };
}

export default useDeleteNote;
