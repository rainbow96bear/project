import "./App.css";
import React from "react";
import { useEffect, useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogHeader from "./components/BlogHeader";
import MainIndex from "./components/main";
import ManageIndex from "./components/manage";

export const PostInfo = createContext();

function App() {
  const [postArr, setPostArr] = useState([]);
  const [categoryArr, setCategoryArr] = useState([
    "카테고리 없음",
    "java",
    "solidity",
    "javascript",
  ]);
  return (
    <div className="App">
      <PostInfo.Provider
        value={{ postArr, setPostArr, categoryArr, setCategoryArr }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <BlogHeader></BlogHeader>
                  <MainIndex></MainIndex>
                </>
              }></Route>

            <Route
              path="/manage/*"
              element={<ManageIndex></ManageIndex>}></Route>
          </Routes>
        </BrowserRouter>
      </PostInfo.Provider>
    </div>
  );
}

export default App;
