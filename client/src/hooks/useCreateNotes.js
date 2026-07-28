import { useState } from "react";
import API from "../config/axiosConfig";

function useCreateNotes() {
  const [isLoading, setIsLoading] = useState(false);

  async function createNotes({ title, description }) {
    setIsLoading(true);
    try {
      const { data } = await API.post(`/notes/create`, {
        title,
        description,
      });
      return {
        success: true,
        message: `Note created successfully`,
        newNote: data.newNote,
      };
    } catch (error) {
      console.error(`Error, while creating notes ${error.message}`);
      return {
        success: false,
        message: `Error, while creating notes`,
        isRateLimited: error?.response?.status === 429,
      };
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, createNotes };
}

export default useCreateNotes;
