"use client";
import React, {useEffect, useState } from "react";
import Images from "./Images";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useGetProductByIdQuery } from "../Redux/productApi";


function ReviewProduct({params}) {
  let id = params.slug;
  const { isError, isLoading, isSuccess, data } = useGetProductByIdQuery(id);
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
  
  
  const BuyUrl =
    "https://api.whatsapp.com/send?phone=919179792991&text=%F0%9F%98%80Hey%20i%20want%20to%20buy%20this%20%0A%0A";
  const encodedurl = "https%3A%2F%2Fpuma-ganeshdwivedi.vercel.app%2FMen";
 



const handleBuy = ()=>{
  window.open(
    `${BuyUrl}${encodedurl}/${id}`
    )
}


  return (
    <>
      {/* <Suspense fallback={<Loading />}> */}
        <div className="pt-10 text-start">
          <div className="lg:flex lg:gap-20 max-w-[1200px] m-auto lg:mt-20 px-14 py-10 justify-center">
          <Images key={data.title} id={id} previewimg={data.thumbnail} alt={data.title} />

            <div className="mt-4">
              <div className="text-sm font-semibold text-slate-900">
                <h1 className="text-2xl"> {data.title}</h1>
              </div>
              <div className="text-[12px] text-slate-500 font-medium">
                <p className="text-lg">{data.description}</p>
              </div>
              <div className="text-md font-semibold text-[#FF676D] mt-1">
                <h1>Price - ₹{data.price}</h1>
                <p className="text-black">Rating: {data.rating}</p>
              </div>
              <div className=" md:mt-3 sm:mt-8">
              <button onClick={handleBuy} className="bg-black px-5 rounded-md py-2 text-white">Buy</button>
              </div>
            </div>
          </div>
        </div>
      {/* </Suspense> */}
    </>
  );
}

export default ReviewProduct;

