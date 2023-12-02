"use client"
import React from 'react'


function Video() {
  function play(){
    const video = document.querySelector("video");
    video.play();
  }
  return (
    <div className='overflow-hidden lg:mt-[-20px]'>
        <video onMouseOver={play} className='md:h-[70vh] lg:h-full lg:w-[100vw] Desktop-video md:block lg:block sm:hidden' height="100vh" loop muted autoPlay>
        <source src='https://cdn.sanity.io/files/qa41whrn/staging/e073e9b8e32e5479801dff7508be61ef41944df6.mp4' />
        </video>
        <video onMouseOver={play} className='mobile-video h-[55vh] sm:w-[100vw] md:hidden lg:hidden sm:block' height="100vh" loop muted autoPlay>
        <source className='' src={"https://cdn.sanity.io/files/qa41whrn/staging/e073e9b8e32e5479801dff7508be61ef41944df6.mp4"} type="video/mp4"/>
        </video>
    </div>
  )
}

export default Video