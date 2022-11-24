import React, { useState } from "react";
import queryString from "query-string";
import { useLocation, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

export default function Board({ post }) {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }

  const location = useLocation();
  const board = post.find((item) => {
    if (item.title === queryString.parse(location.search).title) {
      return item;
    }
  });
  return (
    <BoardBox>
      <div>{board.title}</div>
      <div>{board.content}</div>
      <button onClick={goBack}>뒤로가기</button>

      {post.map((item) => (
        <Link to={"?" + queryString.stringify({ title: item.title })}>
          <div onClick={test}>{item.title}</div>
        </Link>
      ))}
    </BoardBox>
  );
}

const BoardBox = styled.div`
  background-color: lightgray;
  height: calc(100vh - 50px);
`;
