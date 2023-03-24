/** @format */

import React from "react";
import ProjectsList from "../components/ProjectsList";
import TeamMembers from "../components/TeamMembers";
import TeskHeader from "../components/TeskHeader.jsx";
import TeskList from "../components/TeskList";

function Home() {
  return (
    <>
      <div className="text-[#111827]">
        <div className="container relative">
          <div className="sidebar">
            <ProjectsList />

            <TeamMembers />
          </div>

          <div className="lg:pl-[16rem] 2xl:pl-[23rem]">
            <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
              <TeskHeader />

              <TeskList />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
