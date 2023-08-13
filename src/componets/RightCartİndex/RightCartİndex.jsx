import React from "react";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../spinner/spinner.componet";
import {
  fetchClickData,
  setCurrentClickPlaylist,
} from "../../store/user/user.reducer";

const RightCartİndex = () => {
  const dispatch = useDispatch();
  const getImageUrl = (uri) => {
    const identifier = uri.split(":").pop();
    return `https://i.scdn.co/image/${identifier}`;
  };

  const currentUserData = useSelector(selectCurrentUser);
  const { public_playlists } = currentUserData || {};
  return (
    <>
      {" "}
      <div className="w-full h-[35%] flex flex-col flex-wrap">
        {public_playlists ? (
          public_playlists.map((val) => {
            const imageUrl = getImageUrl(val.image_url);
            return (
              <div
                className="w-[45%] h-[25%] flex bg-[#2b2b2c] items-center mb-5 hover:bg-[#1a1a1a] ease-in duration-300 cursor-pointer rounded-lg p-2"
                key={val.id}
                onClick={() => {
                  dispatch(setCurrentClickPlaylist(val));
                  dispatch(
                    fetchClickData(val.uri.replace("spotify:playlist:", ""))
                  );
                }}
              >
                <div className="h-full">
                  <img
                    src={imageUrl}
                    alt=""
                    className="w-full h-full object-contain rounded-lg"
                  ></img>
                </div>
                <div>
                  <p className="text-sm ml-2">{val.name}</p>
                </div>
              </div>
            );
          })
        ) : (
          <Spinner></Spinner>
        )}
      </div>
    </>
  );
};

export default RightCartİndex;
