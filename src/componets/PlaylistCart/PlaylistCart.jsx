import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
  fetchClickData,
  setCurrentClickPlaylist,
} from "../../store/user/user.reducer";

const PlaylistCart = ({ val, imageUrl }) => {
  const currentUserData = useSelector(selectCurrentUser);

  const dispatch = useDispatch();

  return (
    <>
      <div
        className="w-full h-[10%] flex  items-center mb-5 hover:bg-[#1a1a1a] ease-in duration-300 cursor-pointer"
        key={val.id}
        onClick={() => {
          dispatch(setCurrentClickPlaylist(val));
          dispatch(fetchClickData(val.uri.replace("spotify:playlist:", "")));
        }}
      >
        <div className="w-[30%] h-[90%]  ">
          <img
            src={imageUrl}
            alt=""
            className="w-full h-full object-contain rounded-2xl"
          ></img>
        </div>
        <div>
          <p className="text-sm">{val.name}</p>
          <p className="text-sm text-[#b2b2b2]">
            Çalma Listesi + {currentUserData.name}
          </p>
        </div>
      </div>
    </>
  );
};

export default PlaylistCart;
