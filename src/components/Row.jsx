import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  const slideLeft = (e) => {
    // var slider = document.querySelector('#slider');
    // slider.scrollLeft = slider.scrollLeft-500;
    document.querySelector("#slider").scrollLeft -= 500;
    e.preventDefault();
  };

  const slideRight = (e) => {
    // var slider = document.querySelector('#slider');
    // slider.scrollRight = slider.scrollRight+500;
    document.querySelector(`#slider${rowID}`).scrollLeft += 500;
    e.preventDefault();
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="bg-white rounded-full absolute left-0 opacity-50 over:opacity-100 cursor-pointer x-10 hidden group-hover:block z-10"
          size={40}
          onClick={slideLeft}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          className="bg-white rounded-full absolute right-0 opacity-50 over:opacity-100 cursor-pointer x-10 hidden group-hover:block z-10"
          size={40}
          onClick={slideRight}
        />
      </div>
    </>
  );
};

export default Row;
