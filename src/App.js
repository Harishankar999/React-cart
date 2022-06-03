import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Mens from "./Components/Mens";
import Womens from "./Components/Womens";
import Jewelery from "./Components/Jewelery";
import Login from "./Components/Login";
import { RequiredAuth } from "./HOC/RequiredAuth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route
          path="/mens"
          element={
            <RequiredAuth>
              <Mens />
            </RequiredAuth>
          }
        />
        <Route
          path="/womens"
          element={
            <RequiredAuth>
              <Womens />
            </RequiredAuth>
          }
        />
        <Route
          path="/jewelery"
          element={
            <RequiredAuth>
              <Jewelery />
            </RequiredAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
