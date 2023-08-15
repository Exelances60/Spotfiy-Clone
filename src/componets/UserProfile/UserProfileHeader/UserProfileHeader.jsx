import React from "react";

const UserProfileHeader = ({ currentUserData }) => {
  return (
    <>
      <div className=" w-full h-[35%] mt-[-13%] xl:mt-[-7%] rounded-t-3xl bg-gradient-to-b from-blue-700 via-blue-800 to-gray-800  box-border  flex items-end p-3">
        <div className=" w-full h-[90%] flex items-end">
          <div className=" w-[30%] h-full flex items-center ">
            <img
              src={currentUserData.image_url}
              className="object-contain rounded-full shadow-lg shadow-black "
              alt=""
            ></img>
          </div>
          <div className=" w-[50%] h-full flex-col justify-center flex ml-3">
            <p>Profil</p>
            <p className="text-[50px]">{currentUserData.name}</p>
            <div className="flex w-[45vh]  h-[30%] ">
              {" "}
              <p className="">
                Herkese Açık Playlist :{" "}
                {currentUserData.total_public_playlists_count}
              </p>
              <p className="ml-2">
                Takipçi : {currentUserData.followers_count}
              </p>
              <p className="ml-2">
                Takip Edilen : {currentUserData.following_count}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileHeader;
