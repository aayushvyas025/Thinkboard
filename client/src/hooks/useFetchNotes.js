import { useState } from "react";

function useFetchNotes() {
  const [isRateLimited, setRateLimited] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  async function fetchNotes() {
    setLoading(true);
    setRateLimited(false);
    try {
    } catch (error) {
      console.error(`Error while fetching notes: ${error.message}`);
    }
  }

  return { isRateLimited, isLoading, fetchNotes };
}
