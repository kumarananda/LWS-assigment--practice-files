/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import learningportalImg from "../../assets/image/learningportal.svg";
import Logout from "../ui/Logout/Logout";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector(state => state.auth.user);
  const location = useLocation();
  const { pathname } = location || {};

  return (
    <>
      <nav className="shadow-md">
        <div className="max-w-7xl px-5 lg:px-0 mx-auto flex justify-between py-3">
          {!user ? (
            <>
              <Link to={"/"}>
                <img className="h-10" src={learningportalImg} alt="Learning Portal" />
              </Link>
              <div className="flex items-center gap-4 text-lg">
                {pathname === "/" && <Link to={"/admin"}>Admin Login</Link>}
                {pathname === "/admin" && <Link to={"/"}>Student Login</Link>}
              </div>
            </>
          ) : user && user.role === "student" ? (
            <>
              <Link to={"/course-player"}>
                <img className="h-10" src={learningportalImg} alt="Learning Portal" />
              </Link>
              <div className="flex items-center gap-4 text-lg">
                <Link className="font-medium" to={"/course-player"}>
                  Course Player
                </Link>
                {/* <Link to={"/quiz"}>Quiz</Link> */}
                <Link to={"/leaderboard"}>Leaderboard</Link>
              </div>
              <div className="flex items-center gap-4 ">
                <h2 className="font-medium">{user?.name}</h2>
                <Logout />
              </div>
            </>
          ) : (
            <>
              <Link to={"/admin/dashbord"}>
                <img className="h-10" src={learningportalImg} alt="Learning Portal" />
              </Link>
              <div className="flex items-center gap-4 text-lg">
                <Link to={"/admin/dashbord"}>Dashboard</Link>
                <Link to={"/admin/videos"}>Videos</Link>
                <Link to={"/admin/quizzes"}>Quizzes</Link>
                <Link to={"/admin/assignment"}>Assignment</Link>
                <Link to={"/admin/assignment-mark"}>AssignmentMark</Link>
              </div>
              <div className="flex items-center gap-3">
                <h2 className="font-medium">{user?.name}</h2>
                <Logout />
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;

/**
 *   let content = null;
  if (!user) {
    content = (
      <>
        <div className="flex items-center gap-4 text-lg">
          {pathname === "/" && <Link to={"/admin"}>Admin Login</Link>}
          {pathname === "/admin" && <Link to={"/admin"}>Student Login</Link>}
        </div>
      </>
    );
  }
  if (user && user.role === "admin") {
    content = (
      <>
        <div className="flex items-center gap-4 text-lg">
          <Link to={"/admin/dashbord"}>Dashboard</Link>
          <Link to={"/admin/videos"}>Videos</Link>
          <Link to={"/admin/quizzes"}>Quizzes</Link>
          <Link to={"/admin/assignment"}>Assignment</Link>
          <Link to={"/admin/assignment-mark"}>AssignmentMark</Link>
        </div>
        <div className="flex items-center gap-3">
          <h2 className="font-medium">{user?.name}</h2>

          <Logout />
        </div>
      </>
    );
  }
  if (user && user.role === "student") {
    content = (
      <>
        <div className="flex items-center gap-4 text-lg">
          <Link className="font-medium" to={"/course-player"}>
            Course Player
          </Link>
          <Link to={"/leaderboard"}>Leaderboard</Link>
          <Link to={"/quiz"}>Quiz</Link>
        </div>
        <div className="flex items-center gap-4 ">
          <h2 className="font-medium">{user?.name}</h2>

          <Logout />
        </div>
      </>
    );
  }
 */
