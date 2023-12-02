"use client"
import React,{useState,useEffect} from 'react'
import Button from './Button'

function TimeComingSoon({
  day,month,year
}) {
    
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = ` ${day},${month}, ${year}`;

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, []);

    return (
    <div className='sm:text-center backdrop-blur-sm md:text-left sm:mt-10 lg:absolute md:absolute md:top-[130vh] md:left-0 sm:ml-[10vw]'>
    <h1 className='sm:text-black  uppercase md:text-4xl sm:text-2xl font-bold text-white'>Fenty X Puma <br/> Comin Soon</h1>
    <div className='my-10 flex flex-row justify-center overflow-hidden'>
        <span className="sm:text-black  text-center sm:pr-4 md:pr-8 lg:pr-12lg:pr-12">
        <p className='md:text-5xl sm:text-3xl py-2'>{days}</p>
        <p className='text-sm font-bold'>Days</p>
        </span>
        <span className=" sm:md:-black text-center sm:pr-4 md:pr-8 lg:pr-12">
        <p className='md:text-5xl sm:text-3xl py-2'>{hours}</p>
        <p className='text-sm font-bold'>Hours</p>
        </span>
        <span className=" sm:text-black text-center sm:pr-4 md:pr-8 lg:pr-12">
        <p className='md:text-5xl sm:text-3xl py-2'>{minutes}</p>
        <p className='text-sm font-bold'>Minutes</p>
        </span>
        <span className=" sm:text-black text-center sm:pr-4 md:pr-8 lg:pr-12">
        <p className='md:text-5xl sm:text-3xl py-2'>{seconds}</p>
        <p className='text-sm font-bold'>Seconds</p>
        </span>
    </div>
     <div className='flex lg:flex-row md:flex-row sm:flex-col gap-5'> 
    <Button className='bg-white text-black sm:border-2 border-black' text={"Sign Up Now"} />
    <Button className='bg-white text-black sm:border-2 border-black' text={"Explore Now"} />
    </div>
    </div>
  )
}

export default TimeComingSoon