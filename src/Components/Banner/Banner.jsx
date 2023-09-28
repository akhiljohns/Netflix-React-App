import React, { useEffect, useState, useRef } from "react";
import "./Banner.css";
import axios from '../../axios'
import { API_KEY } from '../../Constants/Constants'
import { imageUrl } from '../../Constants/Constants'

function Banner() {
  const min = 0;
  const max = 20;
  const ranNumRef = useRef(); // Use a ref to store ranNum

  const [movie, setMovie] = useState();

  useEffect(() => {
    // Generate a new random number if it's not already set
    if (!ranNumRef.current) {
      ranNumRef.current = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      setMovie(response.data.results[ranNumRef.current]);
    });
  }, []); // No dependencies here

  return (
    <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ' '})` }} className="banner">
      <div className="content">
        <h1 className="title">
          {movie && (movie.title || movie.name) ? movie.title || movie.name : ''}
        </h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <div className="description">{movie ? movie.overview : ''}</div>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
