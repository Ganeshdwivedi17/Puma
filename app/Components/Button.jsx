import React from 'react'


function Button({
   text,
   className = "bg-black" 
}) {
  return (<>
  <div className='text-center my-3 cursor-pointer'>
   <button className={`${className} font-bold px-5 py-3 `}>
    {text}
   </button>
   </div>
    </>
  )
}

export default Button