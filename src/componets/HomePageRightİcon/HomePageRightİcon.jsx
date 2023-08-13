import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { setCurrentClickPlaylist } from "../../store/user/user.action";

const HomePageRightİcon = () => {
  const dispatch = useDispatch();
  const currentUserData = useSelector(selectCurrentUser);
  return (
    <>
      <div className=" w-full h-[10%]  flex space justify-between px-2">
        <div
          className=" bg-[#0b0e12] lg:w-[7%] w-[10%]  h-[40%] xl:w-[3%] xl:h-[40%] rounded-3xl lg:h-[40%] flex justify-center mt-5 box-border  items-center"
          onClick={() => {
            dispatch(setCurrentClickPlaylist({}));
          }}
        >
          <div className="font-mont font-bold text-2xl text-center cursor-pointer ">
            &#8592;
          </div>
        </div>
        <div className=" bg-[#0b0e12]  lg:w-[7%]  w-[10%] xl:w-[4%] xl:h-[50%] rounded-3xl lg:h-[40%] h-[40%] flex justify-center items-center mt-5  box-border md:h-[50%] ">
          <div>
            <img
              src={currentUserData.image_url}
              alt=""
              className="w-[80%] h-[80%] rounded-3xl cursor-pointer ml-1 xl:ml-1.2 md:ml-1.4"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageRightİcon;
