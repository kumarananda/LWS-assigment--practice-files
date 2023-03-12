/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearEdit } from "../../features/editingJob/jobEditingSlice";
import { filterbyType } from "../../features/filter/filterSlice";

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goAddProduct = () => {
    dispatch(clearEdit());
    navigate("/form");
  };

  const handleSetFilterByJobType = (e, type) => {
    e.preventDefault();
    dispatch(filterbyType(type));
  };
  return (
    <>
      <div className="sidebar">
        <nav>
          <ul className="space-y-4">
            <li>
              <a onClick={e => handleSetFilterByJobType(e, "all")} href="/" className="main-menu menu-active" id="lws-alljobs-menu">
                <i className="fa-solid fa-briefcase"></i>
                <span> All Available Jobs</span>
              </a>
              <ul className="space-y-6 lg:space-y-2 ">
                <li>
                  <a onClick={e => handleSetFilterByJobType(e, "internship")} className="sub-menu" href="/" id="lws-internship-menu">
                    <i className="fa-solid fa-stop !text-[#FF5757]"></i> Internship
                  </a>
                </li>
                <li>
                  <a onClick={e => handleSetFilterByJobType(e, "fulltime")} className="sub-menu" href="/" id="lws-fulltime-menu">
                    <i className="fa-solid fa-stop !text-[#FF8A00]"></i> Full Time
                  </a>
                </li>
                <li>
                  <a onClick={e => handleSetFilterByJobType(e, "remote")} className="sub-menu" href="/" id="lws-remote-menu">
                    <i className="fa-solid fa-stop !text-[#56E5C4]"></i> Remote
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button onClick={goAddProduct} className="main-menu" id="lws-addJob-menu">
                <i className="fa-solid fa-file-circle-plus"></i>
                <span>Add NewJob</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
