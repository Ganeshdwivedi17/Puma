"use client"
import React, { useEffect, useState, Suspense } from "react";
import Loading from "../Men/loading";
import Link from "next/link";
import { useGetAllProductsQuery } from "../Redux/productApi";
import { useDispatch } from "react-redux";
import { addtocart } from "../Redux/cartSlice";

function GetProducts() {
  const [page, setpage] = useState(0);

  const dispatch = useDispatch();
  const { isError, isLoading, isSuccess, data } = useGetAllProductsQuery(page);

  if (isLoading) {
    return <Loading/>
  }
  const AddToCart = (product)=>{
    dispatch(addtocart(product));
 }

//  const nextPage = () => {
//   setpage((prevpage) => (prevpage !== 90 ? page + 10 : prevpage));
//   page == 90 ? console.log("you can't go next to anymore") : null;
// };
// const previosPage = () => {
//   setpage((prevPage) => (prevPage > 0 ? prevPage - 10 : prevPage));
//   page == 0 ? console.log("you can't go back anymore") : null;
// };

//  useEffect(() => {

//  }, [page])
 
  

  const getAllProducts = data.products.map((product) => {
    return (
      <div
        key={product.id}
        className="md:w-[25vw] sm:w-[49vw] h-[full] md:my-8 sm:my-2 border-slate-300 md:p-4 sm:p-2 shadow-lg border-2 overflow-hidden">
        <Link href={`/Men/${product.id}`}>
          <div className="">
            <img
              className="object-cover hover:scale-[1.03] hover:transition-all hover:delay-[120ms] md:w-full md:h-[40vh] sm:h-[25vh] sm:w-full "
              src={product.thumbnail}/>
          </div>
          <div className="mt-2">
            <p className="font-medium">{product.title}</p>
            <h4 className="font-bold">
              ${product.price}
              <span className=" text-red-700 text-xs">
                {" "}
                ({Math.round(product.discountPercentage)}% off)
              </span>
            </h4>
          </div>
        </Link>
        <button
          onClick={() => {
            AddToCart(product);
          }}
          className="bg-black rounded-md text-white px-3 py-1 m-2">
          Add to cart
        </button>
      </div>
    );
  });

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex justify-center sm:my-[4.5rem] my-10">
          {
            <div className="grid md:grid-cols-2 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-0 md:gap-x-10">
              {getAllProducts}
            </div>
          }
        </div>
        {/* <div className="flex justify-between">
          <button
            className="bg-black text-white font-bold px-4 py-2 my-2"
            onClick={previosPage}>
            Back
          </button>
          <button
            className="bg-black text-white font-bold px-4 py-2 my-2"
            onClick={nextPage}>
            Next
          </button>
        </div> */}
        
      </Suspense>
    </>
  );
}

export default GetProducts;
