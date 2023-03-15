/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterFeatured } from "../features/filter/filterSlice";

function Filter() {
  const dispatch = useDispatch();
  const { featuredShow } = useSelector(state => state.filter);

  const handlefeaturedShow = () => {
    dispatch(filterFeatured("Featured"));
  };
  const handleAllShow = () => {
    dispatch(filterFeatured("All"));
  };
  return (
    <>
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button disabled={featuredShow === "All"} onClick={handleAllShow} className={`lws-filter-btn ${featuredShow === "All" && "active-filter"}`}>
            All
          </button>
          <button
            disabled={featuredShow === "Featured"}
            onClick={handlefeaturedShow}
            className={`lws-filter-btn ${featuredShow === "Featured" && "active-filter"}`}
          >
            Featured
          </button>
        </div>
      </div>
    </>
  );
}

export default Filter;
