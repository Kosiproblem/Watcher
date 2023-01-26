import React from "react";
import { NavLink } from "react-router-dom";

export const Trending = ({ movies }) => {
  return (
    <>
      <div className="flex flex-col bg-white m-auto p-auto">
        <div className="ml-4 font-semibold text-xl mb-5"></div>
        <div className="flex overflow-x-scroll pb-10 scrollbar-hide">
          <div className="flex flex-nowrap ">
            {movies.map((movie) => (
              <div className="inline-block px-3">
                <NavLink to={`/${movie.imdbID}`}>
                  <div className="lg:w-64 lg:h-64 w-48 h-48  max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <img src={movie.Poster} alt="" />
                  </div>
                  <h1 className="font-semibold">{movie.Title}</h1>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
