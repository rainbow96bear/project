import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import SideBarContainer from "./sidebar/SidebarContainer";
import SideBarScreenContainer from "../sideBar/SideBarScreenContainer";
import CategoryContainer from "./category/CategoryContainer";
import PostContainer from "./post/PostContainer";
import SettingContainer from "./setting/SettingContainer";

export default function ManageComponent() {
  return (
    <ManageBox>
      <SideBarScreenContainer></SideBarScreenContainer>
      <Routes>
        <Route path="/post" element={<PostContainer></PostContainer>}></Route>
        <Route
          path="/category"
          element={<CategoryContainer></CategoryContainer>}></Route>
        <Route
          path="/sidebar"
          element={<SideBarContainer></SideBarContainer>}></Route>
        <Route
          path="/setting"
          element={<SettingContainer></SettingContainer>}></Route>
      </Routes>
    </ManageBox>
  );
}
const ManageBox = styled.div`
  display: flex;
  justify-content: center;
`;
