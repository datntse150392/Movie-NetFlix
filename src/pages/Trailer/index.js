import React from "react";
import { useParams } from "react-router";
import { Films } from "../../Datas/data.js";
export default function Trailer() {
  const filmId = useParams();
  const film = Films.find((obj) => {
    return obj.id == filmId.id;
  });
  return (
    <div className="container-trailer-film">
      <h1 className="trailer-film-title">{film.title} - Official Trailer</h1>
      <video src={film.trailer} controls />
    </div>
  );
}
