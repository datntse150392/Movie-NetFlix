// Page này để chứa các bộ phim

import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { images } from "../../images";
import { Films } from "../../Datas/data";
export default function MovieFilm() {
  const filmId = useParams();
  const film = Films.find((obj) => {
    return obj.id == filmId.id;
  });

  const convertURL = (url) => {
    return url?.replace("watch?v=", "embed/");
  };

  console.log(convertURL(film.movieURL));
  return (
    <div className="container-movie">
      <div className="logo">
        <Link to={"/"}>
          <img src={images.logo} />
        </Link>
      </div>
      <div className="container-movie-film">
        <embed src={convertURL(film.movieURL)} />
      </div>
    </div>
  );
}
