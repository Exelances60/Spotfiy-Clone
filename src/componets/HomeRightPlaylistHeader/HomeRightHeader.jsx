import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentPlaylist,
  selectCurrentUser,
} from "../../store/user/user.selector";
import Spinner from "../spinner/spinner.componet";

const HomeRightPlaylistHeader = () => {
  const currentClickPlaylist = useSelector(selectCurrentPlaylist);
  const currenUserData = useSelector(selectCurrentUser);
  const [url, setUrl] = useState(null); // Başlangıçta null olarak ayarla

  useEffect(() => {
    const getImageUrl = (uri) => {
      if (!uri) {
        // uri tanımsız ise, setImageUrl çağrısına gerek yok.
        return;
      }
      const identifier = uri.split(":").pop();
      setUrl(`https://i.scdn.co/image/${identifier}`);
    };

    if (currentClickPlaylist && currentClickPlaylist.image_url) {
      getImageUrl(currentClickPlaylist.image_url);
    }
  }, [currentClickPlaylist]);

  if (!currentClickPlaylist || !currenUserData) {
    // currentClickPlaylist veya currenUserData tanımsız ise, uygun bir yedek içerik gösterebiliriz.
    return <Spinner></Spinner>;
  }

  const { name, followers_count, imageUrl } = currentClickPlaylist;
  console.log(imageUrl);

  return (
    <>
      <div className="flex p-3  items-end bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900 w-full h-[35%] xl:h-[40%] mt-[-25%] md:mt-[-17%] rounded-t-2xl xl:mt-[-7%]">
        <div className="w-[30%] h-[60%] xl:w-[20%] md:w-[40%] flex items-center  justify-center">
          <img
            src={url === null ? imageUrl : url}
            alt=""
            className=" w-full h-full object-cover  shadow-xl shadow-black"
          />
        </div>
        <div className="  w-[70%] h-[50%] font-mont box-border pl-2 xl:pl-5 flex flex-col justify-center text-sm">
          <p>Çalma Listesi</p>
          <p className="text-xl">{name}</p>
          <div className=" w-[60%] h-[20%] flex items-center">
            <div className=" w-[20%] xl:w-[13%] h-full">
              <img
                src={currenUserData.image_url}
                alt=""
                className="rounded-full object-contain shadow-sm w-[85%] shadow-black"
              />
            </div>
            <div>
              <p className="">Enes * {followers_count} beğenme</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRightPlaylistHeader;
