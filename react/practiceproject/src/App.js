import "./App.css";
import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import MainIndex from "./components/main";
import ManageIndex from "./components/manage";
import store from "./store";
import LoginContainer from "./components/manage/login/Login.Container";
import RegistContainer from "./components/manage/regist/RegistContainer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<MainIndex></MainIndex>}></Route>
            <Route
              path="/manage/*"
              element={<ManageIndex></ManageIndex>}></Route>
            <Route
              path="/login"
              element={<LoginContainer></LoginContainer>}></Route>
            <Route
              path="/regist"
              element={<RegistContainer></RegistContainer>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
