import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ id, poster, title, rating }) => {
  const navigate = useNavigate();

  return (
    <div className="movie-card"
    onClick={() => navigate(`details/${id}`)}>
      <img src={poster} alt={title} className="movie-poster" />
      <h2 className="movie-title">{title}</h2>
      <p className="movie-ratings">평점: {rating}</p>
    </div>
  );
};

export default MovieCard;