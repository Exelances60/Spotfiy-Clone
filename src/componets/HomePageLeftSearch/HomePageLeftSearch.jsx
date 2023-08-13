import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setCurrentClickPlaylist } from "../../store/user/user.action";

const HomePageLeftSearch = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className=" w-[100%] h-[10%] bg-[#121212]  flex justify-center rounded-xl pl-4 box-border flex-col ">
        <div
          className="cursor-pointer flex items-center mb-4 text-[#b2b2b2] hover:text-white ease-in duration-300"
          onClick={() => {
            dispatch(setCurrentClickPlaylist({}));
          }}
        >
          <p className="text-2xl ">
            <AiFillHome></AiFillHome>
          </p>
          <p className="ml-5">Ana Sayfa</p>
        </div>
        <div className="flex items-center">
          <p className="text-2xl text-[#b2b2b2] hover:text-white ease-in duration-300 ">
            <FaMagnifyingGlass></FaMagnifyingGlass>
          </p>
          <p className="ml-5 text-[#b2b2b2] hover:text-white ease-in duration-300">
            Search
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePageLeftSearch;
