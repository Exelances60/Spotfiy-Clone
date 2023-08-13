import React from "react";
import HomePageLeftSearch from "../HomePageLeftSearch/HomePageLeftSearch";
import HomePageLeftPlaylist from "../HomePageLeftPlaylist/HomePageLeftPlaylist";

const HomePageLeft = () => {
  return (
    <>
      <div className="w-[50%] h-[100%] lg:w-[30%] rounded-2xl p-2 box-border">
        <HomePageLeftSearch></HomePageLeftSearch>
        <HomePageLeftPlaylist></HomePageLeftPlaylist>
      </div>
    </>
  );
};

export default HomePageLeft;
