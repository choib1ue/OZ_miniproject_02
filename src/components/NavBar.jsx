import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import useDebounce from "../hooks/useDebounve";

const Navbar = ({onSearch}) => { // searchMovies를 받아오는 것!
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태
  const debouncedSearchTerm = useDebounce(searchTerm, 5); // 디바운스된 검색어 상태

  // 검색어가 변경될 때마다 검색 결과 업데이트
  useEffect(() => {
    if (debouncedSearchTerm) {
      onSearch(debouncedSearchTerm); // 디바운스된 검색어로 검색 요청
    }
  }, [debouncedSearchTerm, onSearch]);

  return (
    <header className="navbar">
      <Link to={"/"}><h1>OZ 무비</h1></Link>
      <div className="links">
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Sign up</Link>
      </div> 
      <div className="search-bar">
        <input
          type="text"
          placeholder="영화 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Navbar;
