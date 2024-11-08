import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const options = {method: 'GET', headers: {accept: 'application/json', Authorization: `Bearer ${API_TOKEN}`}};

const MovieDetail = () => {

  const { id } = useParams(); // URL에서 영화 ID를 가져오기
  const [movieData, setMovieData] = useState(null);

  // 이미지 baseUrl
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    // 영화 상세 정보를 API에서 가져오는 함수
    const fetchMovieDetail = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
      const data = await response.json();
      setMovieData(data); // 영화 데이터 상태에 저장하기
    };

    fetchMovieDetail();
  }, [id]);

  if (!movieData) {
    return <div>로딩 중</div>
  }

  const { backdrop_path, title, vote_average, genres, overview } = movieData;

  return (
    <div className="movie-detail-container">
      {/* 포스터 이미지 */}
      <div
        className="movie-detail-poster"
        style={{
          backgroundImage: `url(${imageBaseUrl}${backdrop_path})`,
        }}
      >
      </div>

      {/* 영화 정보 */}
      <div className="movie-detail-info">

        <div className="movie-detail_data">
          <h1 className="movie-detail_title">{title}</h1>
          <p className="movie-detail_rating">별점: {vote_average}</p>
        </div>
        
        <div className="movie-detail_genre">
          <ul>
            {/* map: 배열에 사용 가능, 배열에 있는 요소를 하나씩 가져와 어떠한 처리를 해 주고 '새로운 배열'에 추가 */}
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>

        <div className="movie-detail_overview">
          <p >{overview}</p>
        </div>

      </div>

    </div>
  );
};

export default MovieDetail;
