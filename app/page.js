"use client";
import React from "react";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import {motion,AnimatePresence} from 'framer-motion'

function page() {
  return (
    <>
    <AnimatePresence mode="wait">
    <motion.div>
     <Nav />
      <Home />
      <Footer />
      </motion.div>
      <motion.div className="slide-in" initial={{scaleY:0}} animate={{scaleY:0}}
      exit={{scaleY:1}}
      transition={{duration:1,ease :[0.22,1,0.36,1]}}
      ></motion.div>
       <motion.div className="slide-out" initial={{scaleY:1}} animate={{scaleY:0}}
      exit={{scaleY:1}}
      transition={{duration:1,ease :[0.22,1,0.36,1]}}
      ></motion.div>
      </AnimatePresence>
    </>
  );
}

export default page;

//   const [value, setvalue] = useState("")
//    const search = (e) => {
//     setvalue(e.target.value);
//     console.log(e.target.value)
//   }
//   return (<div >
//     <input className='bg-red-200' type="text" placeholder='Search'onChange={search} value={value} />
//     <button className='bg-green-200' onClick={()=>{console.log(value)}}>search</button>
// </div>
//   )
