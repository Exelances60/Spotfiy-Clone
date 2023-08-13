import React from "react";
import { GiBookshelf } from "react-icons/gi";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import Spinner from "../spinner/spinner.componet"; // Update the import statement
import PlaylistCart from "../PlaylistCart/PlaylistCart";

const getImageUrl = (uri) => {
  const identifier = uri.split(":").pop();
  return `https://i.scdn.co/image/${identifier}`;
};

const HomePageLeftPlaylist = () => {
  const currentUserData = useSelector(selectCurrentUser);
  const { public_playlists } = currentUserData;

  if (!public_playlists) {
    // Eğer public_playlists tanımsız ise, Spinner veya uygun bir yükleme mesajı gösterebilirsiniz
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full h-[90%] bg-[#121212] rounded-xl mt-3 p-3 box-border">
        <div className="with-full flex flex-col h-[10%]  p-3">
          <div className="flex items-center text-[#b2b2b2] hover:text-white ease-in duration-300">
            <p className="text-4xl ">
              <GiBookshelf></GiBookshelf>
            </p>
            <p className="ml-2">Kitaplık</p>
          </div>
        </div>
        <div className="w-full  h-[90%] overflow-x-hidden">
          {public_playlists ? (
            public_playlists.map((val) => {
              const imageUrl = getImageUrl(val.image_url);
              return (
                <PlaylistCart
                  imageUrl={imageUrl}
                  val={val}
                  key={val.id}
                ></PlaylistCart>
              );
            })
          ) : (
            <Spinner></Spinner>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePageLeftPlaylist;
