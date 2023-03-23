/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchValue } from "../features/filter/filterSlice";
import logo from "../images/logo.svg";

function Header() {
  const dispatch = useDispatch();
  const { search } = useSelector(state => state.filter);

  const handleSetSearch = e => {
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <>
      <nav className="container relative py-3">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="flex-1 max-w-xs search-field group">
            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
            <input
              value={search}
              onChange={handleSetSearch}
              type="text"
              placeholder="Search Task"
              className="search-input"
              id="lws-searchTask"
              style={{ color: "#000" }}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
