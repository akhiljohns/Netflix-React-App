import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { imageUrl, API_KEY } from "../../Constants/Constants";
import YouTube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, seturlId] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      
    },
  };
  

  const handleTrailer = (id) => {
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        const results = response.data.results;
  
        if (response.status === 200 && results.length !== 0) {
          // Generate a random index within the range of results
          const randomIndex = Math.floor(Math.random() * results.length);
          const randomVideo = results[randomIndex];
          
          seturlId(randomVideo);
        } else {
          // Handle other HTTP status codes (e.g., 404)
          console.error(`Request failed with status code ${response.status}`);
        }
      })
      .catch(error => {
        // Handle network errors or other errors
        console.error('An error occurred:', error.message);
      });
  };
  

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            key={obj.id} // Add a unique key based on the movie's ID
            onClick={() => handleTrailer(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>

      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
