import React from "react";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useSelector } from "react-redux";
import RandomPlaylist from "../RandomPlaylist/RandomPlaylist";
import UserProfileHeader from "./UserProfileHeader/UserProfileHeader";
import Spinner from "../spinner/spinner.componet";
import PlaylistCart from "../PlaylistCart/PlaylistCart";

const getImageUrl = (uri) => {
  const identifier = uri.split(":").pop();
  return `https://i.scdn.co/image/${identifier}`;
};
const UserProfile = () => {
  const currentUserData = useSelector(selectCurrentUser);
  const { public_playlists } = currentUserData;

  if (!currentUserData || !currentUserData.public_playlists) {
    // Veriler yüklenmediyse veya tanımsızsa, uygun bir mesaj veya yükleme gösterebilirsiniz.
    return <Spinner />;
  }
  return (
    <div className="w-full h-[100%] ">
      <UserProfileHeader currentUserData={currentUserData}></UserProfileHeader>
      <div className="w-full h-[38%] ">
        <RandomPlaylist></RandomPlaylist>
        <div className="w-full   h-[72%] overflow-x-hidden items-center justify-center flex box-border">
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
    </div>
  );
};

export default UserProfile;
