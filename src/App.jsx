import React, { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import "./App.css";  // 스타일 시트는 그대로
import MovieDetail from "./pages/MovieDetail";

// 더미 데이터를 import합니다.
import movieListData from "./data/movieListData.json";
import { Route, Routes } from "react-router-dom";

// baseUrl 설정 (영화 이미지 API의 baseUrl)
const baseUrl = "https://image.tmdb.org/t/p/w500";

const App = () => {
  // 영화 목록 데이터를 상태로 관리합니다.
  // setMovies : movies의 상태를 업데이트 해 주는 함수

  const [movies] = useState(movieListData.results);
  // movies: 상태를 담을 변수 이름

  return (
    <Routes>
      <Route path="/" element={
        <div className="app">
          <h1>Movie List</h1>
          <div className="movie-list">
            {/* 영화 목록을 map을 사용하여 MovieCard로 전달 */}
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                poster={baseUrl + movie.poster_path}  // 포스터 경로 연결
                title={movie.title}
                rating={movie.vote_average}
              />
            ))}
          </div>
        </div>}/>

      <Route path="/details" element={
        <MovieDetail/>
      }/>  
    </Routes>
  );
};

export default App;