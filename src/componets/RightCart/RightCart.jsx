import React from "react";
import { useDispatch } from "react-redux";
import {
  fetchClickData,
  setCurrentClickPlaylist,
} from "../../store/user/user.reducer";

const RightCart = ({ playlistItems }) => {
  console.log(playlistItems);
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full h-[75%]  flex justify-between overflow-hidden items-center">
        {playlistItems.map((val, i) => {
          const { data } = val;

          if (i < 3) {
            const { images } = data;
            const { items: imageItems } = images;
            return (
              <div
                className="w-[100%] m-2 bg-[#181818] hover:bg-[#282828] ease-in-out duration-300 rounded-lg h-[90%] hover:scale-[1.1] cursor-pointer"
                key={i}
                onClick={() => {
                  dispatch(
                    setCurrentClickPlaylist({
                      ...data,
                      imageUrl: imageItems[0].sources[0].url,
                    })
                  );
                  dispatch(
                    fetchClickData(data.uri.replace("spotify:playlist:", ""))
                  );
                }}
              >
                <div className="w-[90%] flex items-center justify-center h-[70%] m-auto mt-1">
                  <img
                    src={imageItems[0].sources[0].url}
                    alt=""
                    className="w-full h-full xl:w-[70%]   object-cover rounded-md shadow-sm shadow-black"
                  ></img>
                </div>
                <div className="w-full h-[10%]  flex text-sm overflow-hidden m-auto mt-1">
                  {data.name}
                </div>{" "}
                <div className="w-full h-[10%]  flex text-sm overflow-hidden m-auto text-center text-[#a5a5a5]">
                  <p>Oluşturan : {data.owner.name}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default RightCart;
