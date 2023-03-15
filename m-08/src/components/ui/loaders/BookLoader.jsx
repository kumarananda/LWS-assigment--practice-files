/** @format */

import React from "react";
import Loding from "./Loading/Loading.jsx";

function BookLoader() {
  return (
    <>
      <div className="book-card">
        <div className="h-[240px] w-[170px] object-cover" alt="book">
          <Loding w={170} h={240} />
        </div>
        <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
          <div className="flex items-center justify-between">
            <div>
              {
                <span className="lws-badg">
                  <Loding />
                </span>
              }
            </div>
            <div className="text-gray-500 space-x-2">
              <button className="lws-edit bg-gray-500 w-4">
                <Loding w={20} />
              </button>
              <button className="lws-deleteBook">
                <Loding w={20} />
              </button>
            </div>
          </div>

          <div className="space-y-2 mt-4 h-full custom">
            <h4 className="lws-book-name">
              <Loding w={100} h={25} />
            </h4>
            <p className="lws-author">
              <Loding w={80} h={22} />
            </p>
            <p className="lws-author">
              <Loding w={50} />
            </p>
            <p className="lws-price">
              <Loding w={60} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookLoader;
