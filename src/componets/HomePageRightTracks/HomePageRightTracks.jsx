import React from "react";
import { BiPlay } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { selectClickData } from "../../store/user/user.selector";
import Spinner from "../spinner/spinner.componet"; // Update the import statement
import NOTRACK from "../../assets/Screenshot_5.png";
import { setAudio } from "../../store/user/user.action";

const HomePageRightTracks = () => {
  const dispatch = useDispatch();
  const userClickPlaylist = useSelector(selectClickData);

  const { items } = userClickPlaylist;

  if (!userClickPlaylist || !userClickPlaylist.items) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="w-full h-[65%] xl:h-[55%] box-border p-3 ">
      <div className=" w-full h-[10%] p-2 box-border">
        <p className="bg-[#1fdf64] w-[10%]  h-[100%] p-1 text-5xl shadow-md shadow-gray-900 flex justify-center items-center rounded-full cursor-pointer">
          <BiPlay></BiPlay>
        </p>
      </div>
      <div className=" w-full h-[90%] overflow-y-auto">
        {items.map((val, i) => {
          const { track } = val;
          if (!track) {
            return <Spinner></Spinner>; // Veya uygun bir mesaj gösterin
          }
          const { album } = track;
          // Album nesnesi null veya undefined ise hata durumunu kontrol edin.
          if (!album) {
            return <Spinner></Spinner>; // Veya uygun bir mesaj gösterin
          }
          const { images } = album;
          //const { artists } = album;
          return (
            <div
              className=" w-full h-[10%] mb-5 flex justify-evenly ease-in duration-300  hover:bg-[#1a1a1a]"
              key={val.id}
              onClick={() => {
                dispatch(setAudio(track.preview_url));
              }}
            >
              <p className="pt-4 box-border">{i + 1}</p>
              <div className=" w-[18%] h-full flex ">
                {images && images[0] && images[0].url ? (
                  <img
                    src={images[0].url}
                    alt=""
                    className="w-full object-contain h-full"
                  />
                ) : (
                  <img
                    src={NOTRACK}
                    alt=""
                    className="w-full object-contain h-full"
                  />
                )}
                <div className="w-[30vh] flex flex-wrap pt-3 ml-2 box-border">
                  <div className="text-[12px] w-full overflow-hidden h-full flex flex-col text center ">
                    <p>{track.name}</p>
                    <p className="text-[#a4b3b3]">{track.artists[0].name}</p>
                  </div>
                </div>
              </div>
              <div className="box-border flex items-center pl-5 w-[30%]">
                <p className="text-[12px]">{album.name}</p>
              </div>{" "}
              <div className="box-border  w-[10%]">
                <span className="text-[12px]">
                  {(track.duration_ms / 60000).toFixed(2)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePageRightTracks;
