import React from "react";
import RightCart from "../RightCart/RightCart";
import { useSelector } from "react-redux";
import { selectRandomPlaylist } from "../../store/user/user.selector";
import Spinner from "../spinner/spinner.componet";

const RandomPlaylist = () => {
  const randomPlaylist = useSelector(selectRandomPlaylist) || {};
  const { playlists } = randomPlaylist || {};
  const { albums } = randomPlaylist || {};
  if (!playlists && !albums) {
    return <Spinner></Spinner>; // Veya uygun bir mesaj gösterin
  }
  const { items: playlistItems } = playlists || [];
  return (
    <>
      <div className="w-full h-[25%]  flex justify-between items-center">
        <p className="text-lg hover:underline-offset-1 hover:underline ease-in duration-300 cursor-pointer">
          Kaldığın yerden devam et
        </p>
        <p className="text-[#aeaeae] text-sm">Tümünü Gör</p>
      </div>
      <RightCart playlistItems={playlistItems}></RightCart>
    </>
  );
};

export default RandomPlaylist;
