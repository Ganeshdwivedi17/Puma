import React from "react";

function Tile({text, imgurl, url }) {
  return (
    <>
      <div className="mx-5 ">
        <a href={url}>
          <div
            className={`w-[130px] overflow-hidden object-cover h-[130px] bg-red-600 rounded-full`}
          >
            <img
              className="w-[100%] h-[100%] hover:transition hover:delay-100 hover:scale-105 "
              src={imgurl}
            />
          </div>
          <p className="text-sm font-bold text-center pt-2 leading-[10px]">
            {text}
          </p>
        </a>
      </div>
    </>
  );
}

export default Tile;
