"use client"
import React,{useState} from 'react';

function Like({
  
}) {
    const [url, seturl] = useState("https://cdn-icons-png.flaticon.com/128/1077/1077035.png")
    let [like,setlike] = useState(0);
    const convert = ()=>{

      

        if(like == 0){
            setlike(1);
            seturl("https://cdn-icons-png.flaticon.com/128/833/833472.png");
        }else{
            setlike(0);
            seturl("https://cdn-icons-png.flaticon.com/128/1077/1077035.png");   
        }
    }
  return (
    <div onClick={convert} className='w-5 cursor-pointer'>
    <img src={url} />
    </div>
  )
}

export default Like