import React, { useEffect, useRef } from "react";
import HomePageLeft from "../HomePageLeft/HomePageLeft";
import HomePageRight from "../HomePageRight/HomePageRight";
import { useSelector } from "react-redux";
import { selectAudio } from "../../store/user/user.selector";
import ReactAudioPlayer from "react-audio-player";

const HomePage = () => {
  const audio = useSelector(selectAudio);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load(); // Audio çaları yeniden yükle
    }
  }, [audio]);

  return (
    <div className=" text-white font-mont w-full h-[100%] bg-black flex p-3 box-border">
      <HomePageLeft></HomePageLeft>
      <HomePageRight></HomePageRight>
      <div className="absolute bottom-[0%] ">
        <ReactAudioPlayer src={audio} autoPlay controls className="w-[30vh] " />
      </div>
    </div>
  );
};

export default HomePage;
