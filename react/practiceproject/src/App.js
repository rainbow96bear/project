import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import SignUp from "./components/SignUp";
import Board from "./components/Board";
import AddPost from "./components/AddPost";

function App() {
  const [userArr, setUserArr] = useState([]);
  const [loginUserID, setLoginUserID] = useState("");
  const [post, setPost] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header
          userArr={userArr}
          setUserArr={setUserArr}
          loginUserID={loginUserID}
          setLoginUserID={setLoginUserID}></Header>
        <Routes>
          <Route
            path="/"
            element={
              <Main post={post} loginUserID={loginUserID}></Main>
            }></Route>
          <Route
            path="/signup"
            element={
              <SignUp
                userArr={userArr}
                setUserArr={setUserArr}
                loginUserID={loginUserID}></SignUp>
            }></Route>
          <Route path="/board" element={<Board post={post}></Board>}></Route>
          <Route
            path="/addpost"
            element={<AddPost post={post} setPost={setPost}></AddPost>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
