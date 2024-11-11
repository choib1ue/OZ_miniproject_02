import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./pages/MovieDetail";
import Navbar from "./components/NavBar";
import Login from "./pages/login";
import Signup from "./pages/signup";

const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const API_URL_POPULAR = "https://api.themoviedb.org/3/movie/popular?language=en-US"; // 인기 영화 API
const API_URL_SEARCH = "https://api.themoviedb.org/3/search/movie?language=en-US&query="; // 검색 API
const options = {
  method: "GET",
  headers: { accept: "application/json", Authorization: `Bearer ${API_TOKEN}` },
};

// baseUrl 설정 (영화 이미지 API의 baseUrl)
const baseUrl = "https://image.tmdb.org/t/p/w500";

const App = () => {
  const [movies, setMovies] = useState([]); // 영화 목록 상태
  const [query, setQuery] = useState(""); // 검색어 상태

  //초기 상태: 인기 영화 목록
  // 컴포넌트가 마운트될 때 TMDb API를 호출
  useEffect(() => {
    if (!query) {
      const fetchMovies = async () => {
        const response = await fetch(API_URL_POPULAR, options); // 인기 영화 API 호출
        const data = await response.json();
        setMovies(data.results);
      };
      fetchMovies();
    }
  }, [query]);

  // 검색 API 요청 함수
  const searchMovies = async (searchTerm) => {
    if (!searchTerm) return; // 검색어가 없는 경우 요청 건너뛰기
    const response = await fetch(`${API_URL_SEARCH}${searchTerm}`, options);
    const data = await response.json();
    setMovies(data.results);
  };

  return (
    <div className="app">
      <Navbar onSearch={searchMovies} /> 
      {/* 검색어 입력 시 searchMovies 호출되어 검색어에 맞는 영화 목록 표시 */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h2>Movie List</h2>
              <div className="movie-list">
                {/* 영화 목록을 map을 사용하여 MovieCard로 전달 */}
                {movies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    poster={baseUrl + movie.poster_path} // 포스터 경로 연결
                    title={movie.title}
                    rating={movie.vote_average}
                    id={movie.id}
                  />
                ))}
              </div>
            </div>
          }
        />

        <Route path="/details/:id" element={<MovieDetail />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

      </Routes>
    </div>
  );
};

export default App;
