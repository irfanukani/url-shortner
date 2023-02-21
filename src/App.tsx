import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Redirecter from "./Pages/Redirecter";

function App() {
  return (
    <Routes>
      <Route path='/:key' element={<Redirecter />}></Route>
      <Route path='/' element={<HomePage />}></Route>
    </Routes>
  );
}

export default App;
