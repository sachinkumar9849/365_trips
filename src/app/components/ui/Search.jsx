"use client";
import { memorySearch, mdiCloseCircleOutline, mdiSearchWeb } from "@mdi/js";
import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { FaSearch } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

const SearchOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("isOpen:", isOpen);
  }, [isOpen]);

  const openSearch = () => {
    console.log("Opening search overlay");
    setIsOpen(true);
  };

  const closeSearch = () => {
    console.log("Closing search overlay");
    setIsOpen(false);
  };

  return (
    <div>
      <button
        className="header_search openBtn px-4 py-2 text-lg cursor-pointer "
        onClick={openSearch}
      >
        <BiSearch
          style={{
            color: "#ffffff",
          }}
        />
      </button>
      {isOpen && (
        <div className="overlay fixed top-0 left-0 h-screen w-screen z-10 bg-black bg-opacity-90 flex justify-center items-center">
          <span
            className="closebtn absolute top-5 right-5 text-4xl text-white cursor-pointer"
            onClick={closeSearch}
          >
            <Icon path={mdiCloseCircleOutline} size={2} />
          </span>
          <div className="overlay-content text-center">
            <form
              action=""
              className="bg-white rounded-md flex justify-content-between search_popup flex justify-center items-center"
            >
              <input
                type="text"
                placeholder="Search.."
                name="search"
                className="search_input rounded-md p-6 text-lg border-none bg-white"
              />
              <button
                type="submit"
                className=" text-lg bg-gray-300 border-none cursor-pointer hover:bg-gray-400"
              >
                <BiSearch
                  style={{
                    backgroundColor: "white",
                    fontSize: "40px",
                    paddingRight: "10px",
                  }}
                />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchOverlay;
