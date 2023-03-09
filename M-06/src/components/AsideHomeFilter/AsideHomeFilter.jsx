/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterUpdate, sortUpdate } from "../../features/filters/filtersSlice";

function AsideHomeFilter() {
  const dispatch = useDispatch();
  const { filterBy, sortBy } = useSelector(state => state.filter);

  const handleFilterUpdate = e => {
    dispatch(filterUpdate(e.target.value));
  };
  const handleSortUpdate = e => {
    dispatch(sortUpdate(e.target.value));
  };

  return (
    <>
      <aside>
        <div className="sidebar-items">
          <div className="sidebar-content">
            <h4>Sort</h4>
            <select
              defaultValue={sortBy}
              onChange={handleSortUpdate}
              name="sort"
              id="lws-sort"
              className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            >
              <option value="">Default</option>
              <option value="newest">Newest</option>
              <option value="most_liked">Most Liked</option>
            </select>
          </div>
          <div className="sidebar-content">
            <h4>Filter</h4>
            <div className="radio-group">
              {/* <!-- handle filter on button click --> */}
              <div>
                <input
                  onChange={handleFilterUpdate}
                  value="all"
                  type="radio"
                  name="filter"
                  id="lws-all"
                  checked={filterBy === "all"}
                  className="radio"
                />
                <label htmlFor="lws-all">All</label>
              </div>
              <div>
                <input
                  onChange={handleFilterUpdate}
                  value="saved"
                  type="radio"
                  name="filter"
                  id="lws-saved"
                  checked={filterBy === "saved"}
                  className="radio"
                />
                <label htmlFor="lws-saved">Saved</label>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default AsideHomeFilter;
