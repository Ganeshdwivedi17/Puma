"use client"
import React from "react";
import { removefromcart } from "../Redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function page() {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart);
 
  const HandleRemove = (id)=>{
      dispatch(removefromcart(id));
 }
  return (
    <div className="mt-[15vh]  mb-10">
     
      {cartitems.length == 0 ?
      <h1 className=" sm:text-2xl md:text-3xl bg-red-900 p-5 text-white m-12 text-center">Please Add products first</h1>: 
    
        cartitems.map((item)=>(
          <>
        <div className="flex  border-2 border-slate-300 justify-between items-center sm:flex-col md:flex-row my-2 mx-10">
          <img className="w-20 m-2" src={item.thumbnail} alt={item.title} />
          <p className="font-bold text-sm">{item.title}</p>
          <p>${item.price}</p>
          <button
            onClick={() => {
              HandleRemove(item.id);
            }}
            className="bg-red-400 h-[80%] m-2 text-white px-4 py-1 rounded-md">
            Remove
          </button>
        </div>
        
        </>
        )
      )}
    </div>
  );
}

export default page;
