import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import LoginContainer from "./login/Login.Container";
import ManageContainer from "./manage/MangeContainer";
import NewPostContainer from "./newPost/NewPostContainer";
export default function ManageIndex() {
  return (
    <ManageBox>
      <Routes>
        <Route path="/*" element={<ManageContainer></ManageContainer>}></Route>
        <Route
          path="/newpost"
          element={<NewPostContainer></NewPostContainer>}></Route>
        <Route
          path="/login"
          element={<LoginContainer></LoginContainer>}></Route>
      </Routes>
    </ManageBox>
  );
}

const ManageBox = styled.div``;
