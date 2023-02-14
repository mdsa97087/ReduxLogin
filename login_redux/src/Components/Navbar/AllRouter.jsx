import React from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "../Pages/Counter";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Private from "./Private";

function AllRouter() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Private>
              <Home />
            </Private>
          }
        ></Route>
        <Route
          path="/counter"
          element={
            <Private>
              <Counter />
            </Private>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default AllRouter;
