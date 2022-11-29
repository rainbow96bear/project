import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Manage from "./manage/Mange";
import NewPostContainer from "./newPost/NewPostContainer";
export default function ManageIndex() {
  return (
    <ManageBox>
      <Routes>
        <Route path="/" element={<Manage></Manage>}></Route>
        <Route
          path="/newpost"
          element={<NewPostContainer></NewPostContainer>}></Route>
      </Routes>
    </ManageBox>
  );
}

const ManageBox = styled.div``;
