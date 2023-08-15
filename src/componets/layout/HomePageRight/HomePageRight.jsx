import React from "react";

import HomeRightOpenPlaylist from "../../HomeRightOpenPlaylist/HomeRightOpenPlaylist";
import HomePageRightİcon from "../../HomePageRightİcon/HomePageRightİcon";
import { useSelector } from "react-redux";
import {
  selectActiveUserProfile,
  selectCurrentPlaylist,
} from "../../../store/user/user.selector";
import HomePageRightİndex from "../../HomePageRightİndex/HomePageRightİndex";
import UserProfile from "../../UserProfile/UserProfile";

const HomePageRight = () => {
  const currentClickPlaylist = useSelector(selectCurrentPlaylist);
  const activeUserProfile = useSelector(selectActiveUserProfile);
  return (
    <>
      <div className="w-[60%] h-[100%] box-border lg:w-[70%] bg-[#121212] rounded-2xl ml-3">
        <HomePageRightİcon></HomePageRightİcon>

        {activeUserProfile ? (
          <UserProfile></UserProfile>
        ) : Object.keys(currentClickPlaylist).length !== 0 ? (
          <HomeRightOpenPlaylist></HomeRightOpenPlaylist>
        ) : (
          <HomePageRightİndex></HomePageRightİndex>
        )}
      </div>
    </>
  );
};

export default HomePageRight;
