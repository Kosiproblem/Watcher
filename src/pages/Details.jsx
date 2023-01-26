import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Details = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { imdbID } = useParams();
  useEffect(() => {
    fetchMovieDetailsById(imdbID);
  });
  const fetchMovieDetailsById = (imdbID) => {
    const detailsURL = `http://www.omdbapi.com/?i=${imdbID}&apikey=bb06fb78`;

    fetch(detailsURL)
      .then((response) => response.json())
      .then((result) => {
        setMovieDetails(result);
      });
  };
  return (
    <>
      <div>
        <Navbar />
        <div className="p-4 m-auto">
          <div className="mb-5 mt-44">
            <img className="m-auto" src={movieDetails.Poster} alt="" />
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <div className="text-xl  mb-2">
              <b classname="font-medium ml-96"> Title:</b> {movieDetails.Title}
            </div>
            <hr />
            <div className="text-xl  mb-2">
              <b classname="font-medium"> Year:</b> {movieDetails.Year}
            </div>
            <hr />
            <div className="text-xl  mb-2">
              <b classname="font-medium"> Rating:</b> {movieDetails.imdbRating}
            </div>
            <hr />
            <div className="text-xl  mb-2">
              <b classname="font-medium"> Actors:</b> {movieDetails.Actors}
            </div>
            <hr />
            <div className="text-xl  mb-2">
              <b classname="font-medium"> Writer:</b> {movieDetails.Writer}
            </div>
            <hr />
            <div className="text-xl  mb-2">
              <b classname="font-medium"> Awards:</b> {movieDetails.Awards}
            </div>
            <hr />
            <div className="text-xl  mb-2">
              <b classname="font-medium"> Plot:</b> {movieDetails.Plot}
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};
