import { useState, useEffect } from "react";

// API key for OMDB API
const KEY = "6221c82b";

// Custom hook to fetch movies from the OMDB API based on a search query
// `query` - the search query string
export function useMovies(query) {
  const [movies, setMovies] = useState([]); // State to store the list of movies
  const [isLoading, setIsLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(""); // State to store any error messages

  // Effect to fetch movies when the query changes
  useEffect(
    function () {
      // AbortController to handle cancellation of fetch requests
      const controller = new AbortController();

      // Async function to fetch movies from the API
      async function fetchMovies() {
        try {
          setIsLoading(true); // Start loading
          setError(""); // Clear any previous errors

          // Fetch data from the OMDB API
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal } // Attach the signal for aborting the request
          );

          // Handle non-200 response status
          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json(); // Parse the response JSON
          // Handle case where no movies are found
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search); // Set the movies in the state
          setError(""); // Clear any errors
        } catch (err) {
          // Handle fetch errors
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message); // Set the error message in the state
          }
        } finally {
          setIsLoading(false); // Stop loading
        }
      }

      // Only fetch movies if the query has 3 or more characters
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies(); // Call the fetch function

      // Cleanup function to abort the fetch request if the component unmounts or query changes
      return function () {
        controller.abort();
      };
    },
    [query] // Re-run the effect only if `query` changes
  );

  // Return the state values for movies, loading status, and errors
  return { movies, isLoading, error };
}
