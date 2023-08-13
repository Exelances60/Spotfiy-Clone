import React, { useEffect } from "react";
import RightCartİndex from "../RightCartİndex/RightCartİndex";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomData } from "../../store/user/user.reducer";
import { selectRandomPlaylist } from "../../store/user/user.selector";
import Spinner from "../spinner/spinner.componet";
import RightCart from "../RightCart/RightCart";
import RightAlbums from "../RightAlbums/RightAlbums";

const HomePageRightİndex = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomData());
  }, []);
  const randomPlaylist = useSelector(selectRandomPlaylist) || {};
  const { playlists } = randomPlaylist || {};
  const { albums } = randomPlaylist || {};
  if (!playlists && !albums) {
    return <Spinner></Spinner>; // Veya uygun bir mesaj gösterin
  }
  const { items: playlistItems } = playlists || [];

  return (
    <div className="w-full h-[90%] p-3 box-border">
      <RightCartİndex></RightCartİndex>
      <div className="w-full h-[38%] ">
        <div className="w-full h-[25%]  flex justify-between items-center">
          <p className="text-lg hover:underline-offset-1 hover:underline ease-in duration-300 cursor-pointer">
            Kaldığın yerden devam et
          </p>
          <p className="text-[#aeaeae] text-sm">Tümünü Gör</p>
        </div>
        <RightCart playlistItems={playlistItems}></RightCart>
        <RightAlbums albums={albums}></RightAlbums>
      </div>
    </div>
  );
};

export default HomePageRightİndex;
