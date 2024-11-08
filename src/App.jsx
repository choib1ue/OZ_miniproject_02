import React, { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./pages/MovieDetail";
import Navbar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import "./App.css"; // 스타일 시트는 그대로
import Login from "./pages/login";
import Signup from "./pages/signup";

const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const API_URL = "https://api.themoviedb.org/3/movie/popular?language=en-US";
const options = {
  method: "GET",
  headers: { accept: "application/json", Authorization: `Bearer ${API_TOKEN}` },
};

// baseUrl 설정 (영화 이미지 API의 baseUrl)
const baseUrl = "https://image.tmdb.org/t/p/w500";

const App = () => {
  // 영화 목록 데이터를 상태로 관리

  const [movies, setMovies] = useState([]); // 초기 상태는 빈 배열

  // 컴포넌트가 마운트될 때 TMDb API를 호출
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(API_URL, options); // API 호출
      const data = await response.json(); // JSON 형태로 변환
      setMovies(data.results); // 영화 목록 데이터를 상태에 저장
    };

    fetchMovies(); // fetchMovies 함수 호출로 API 데이터 가져오기
  }, []);

  if (!movies) {
    return <div>로딩 중</div>;
  }

  return (
    <div className="app">
      <Navbar />
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
