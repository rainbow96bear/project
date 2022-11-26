import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Manage from "./Mange";
import NewPost from "./NewPost";

export default function ManageIndex() {
  return (
    <ManageBox>
      <Routes>
        <Route path="/" element={<Manage></Manage>}></Route>
        <Route path="/newpost" element={<NewPost></NewPost>}></Route>
      </Routes>
    </ManageBox>
  );
}

const ManageBox = styled.div``;
