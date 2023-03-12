/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import JobList from "../../components/JobList/JobList";
import { filterByTitle, sortBySalary } from "../../features/filter/filterSlice";

function Home() {
  const dispatch = useDispatch();

  const handleTitleSearch = e => {
    dispatch(filterByTitle(e.target.value));
  };

  const handleSetSalarySort = e => {
    dispatch(sortBySalary(e.target.value));
  };
  return (
    <>
      <div className="lg:pl-[14rem]  mt-[5.8125rem]">
        <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
          <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
            <h1 className="lws-section-title">All Available Jobs</h1>
            <div className="flex gap-4">
              <div className="search-field group flex-1">
                <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                <input onChange={handleTitleSearch} type="text" placeholder="Search Job" className="search-input" id="lws-searchJob" />
              </div>
              <select onChange={handleSetSalarySort} id="lws-sort" name="sort" autoComplete="sort" className="flex-1">
                <option value={"default"}>Default</option>
                <option value={"lowToHigh"}>Salary (Low to High)</option>
                <option value={"highToLow"}>Salary (High to Low)</option>
              </select>
            </div>
          </div>

          <JobList />
        </main>
      </div>
    </>
  );
}

export default Home;
