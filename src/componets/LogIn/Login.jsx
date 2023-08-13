import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, setUserLogin } from "../../store/user/user.reducer";
import { selectUserLogin } from "../../store/user/user.selector";

const Login = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector(selectUserLogin);

  const getUserData = () => {
    dispatch(setUserLogin(!userLogin));
    dispatch(fetchData(!userLogin)); // reduxtan verileri çekiyoruz
  };

  return (
    <div className="w-full h-[100%] bg-[#258d49] flex justify-center items-center ">
      <button
        className="w-[40%] md:w-[20%] lg:w-[15%] h-[8%] lg:h-[6%] md:h-[6%] hover:-translate-y-2 ease-in duration-300 rounded-2xl shadow-lg bg-white font-mont"
        onClick={getUserData}
      >
        Connet To Spotify
      </button>
    </div>
  );
};

export default Login;
