/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../../features/auth/authSlice";

const Logout = ({ children }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLoggedOut());
    localStorage.clear();
  };
  return <div onClick={handleLogout}>{children}</div>;
};

export default Logout;
