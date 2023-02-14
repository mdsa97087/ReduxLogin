import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function Private({ children }) {
  const auth = useSelector((state) => state.ReduxReducer.isAuth);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return children;
}

export default Private;
