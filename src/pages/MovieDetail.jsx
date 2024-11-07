// src/components/MovieDetail.jsx
import React, { useState, useEffect } from 'react';
import movieDetailData from '../data/movieDetailData.json';

const MovieDetail = () => {
  const [movieData] = useState(movieDetailData);
  // 상태 변경 리액트 훅

  // 영화 정보가 로드되었는지 확인
  if (!movieData) {
    return <div>Loading...</div>;
  }

  // 이미지 baseUrl
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  // 필요한 데이터
  const {
    backdrop_path,
    title,
    vote_average,
    genres,
    overview,
  } = movieData;

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
