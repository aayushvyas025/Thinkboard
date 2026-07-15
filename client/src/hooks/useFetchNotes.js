import { useState } from "react";
import envVariables from "../constant/envVariables";

function useFetchNotes() {
  const [isRateLimited, setRateLimited] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const { backendUrl } = envVariables;
  console.log(backendUrl)

  async function fetchNotes() {
    setLoading(true);
    setRateLimited(false);
    try {
      const response = await fetch(`${backendUrl}/notes/fetch`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(`Error while fetching notes: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  return { isRateLimited, isLoading, fetchNotes, notes };
}

export default useFetchNotes;
