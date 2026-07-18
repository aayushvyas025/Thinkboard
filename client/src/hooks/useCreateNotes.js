import { useState } from "react";
import toast from "react-hot-toast";
import API from "../config/axiosConfig";

function useCreateNotes() {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);

  async function createNotes() {
    setIsLoading(true);
    try {
      const response = await API.post(`/notes/create`, {
        title: formData.title,
        description: formData.description,
      });
      setFormData(response.data.newNote);
    } catch (error) {
      console.error(`Error, while creating notes ${error.message}`);
      toast.error("Error, while creating notes");
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

  return { formData, isLoading, createNotes, setFormData };
}

export default useCreateNotes;
