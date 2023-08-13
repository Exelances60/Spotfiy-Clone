import React from "react";

const RightAlbums = ({ albums }) => {
  const { items } = albums;
  const clickAlbums = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-full h-[75%]  flex flex-col justify-between overflow-hidden ">
      <div className="w-full h-[20%]  flex justify-between items-center">
        <p className="text-lg hover:underline-offset-1 hover:underline ease-in duration-300 cursor-pointer">
          Tavsiye Edilen Albümler
        </p>
        <p className="text-[#aeaeae] text-sm">Tümünü Gör </p>
      </div>
      <div className=" w-full h-[80%] flex">
        {items.map((val, i) => {
          const { data } = val;
          const { coverArt } = data;
          const { sources } = coverArt;
          if (i < 3) {
            return (
              <div
                className="w-[100%] m-2 bg-[#181818] hover:bg-[#282828] ease-in-out duration-300 rounded-lg h-[90%] hover:scale-[1.1] cursor-pointer"
                key={i}
                onClick={() => {
                  clickAlbums(data.uri);
                }}
              >
                <div className="w-[90%] h-[70%] m-auto mt-2">
                  <img
                    src={sources[0].url}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  ></img>
                </div>
                <div className="w-full h-[10%]  flex box-border pl-3 text-sm overflow-hidden m-auto mt-1">
                  {data.name}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default RightAlbums;
