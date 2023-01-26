import React, { useEffect } from "react";
import { Search } from "./Search";
import { Trending } from "./Trending";
import { useState } from "react";

export const Display = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [movieNotFound, setmovieNotFound] = useState(false);

  useEffect(() => {
    let term = JSON.parse(localStorage.getItem(searchTerm));
    console.log(searchTerm);
    if (term) {
      fetchMovie(term);
    }
  }, [searchTerm]);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const clearResult = () => {
    setMovies([]);
    setSearchTerm("");
    localStorage.removeItem(searchTerm);
  };
  const fetchMovie = (e, movieName) => {
    e.preventDefault();
    const SearchURL = `http://www.omdbapi.com/?s=${movieName}&page=2&apikey=bb06fb78`;

    //Put movie name in local storage
    localStorage.setItem("searchTerm", JSON.stringify(movieName));

    fetch(SearchURL)
      .then((response) => response.json())
      .then((result) => {
        if (result.Error) {
          setMovies([]);
          setmovieNotFound(true);
        } else {
          setMovies(result.Search);
          setmovieNotFound(false);
        }
      });
  };

  return (
    <div>
      <Search
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        fetchMovie={fetchMovie}
        clearResult={clearResult}
      />
      {movieNotFound ? (
        <div className="font-bold text-xl text-center">Movie Not Found</div>
      ) : (
        <Trending movies={movies} />
      )}
    </div>
  );
};
