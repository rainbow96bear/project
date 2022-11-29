import "./App.css";
import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import BlogHeader from "./components/main/BlogHeader";
import MainIndex from "./components/main";
import ManageIndex from "./components/manage";
import store from "./store";

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
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
