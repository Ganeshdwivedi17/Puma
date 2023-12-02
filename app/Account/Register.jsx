import React from 'react'
import Button from '../Components/Button'

export default function Register() {
    return (
        <div className='w-[99vw] lg:mt-20 relative  overflow-x-clip '>
        <video className='w-[100vw] h-[150%] Register-video sm:hidden md:block' autoPlay muted loop >
            <source  src='https://static.videezy.com/system/resources/previews/000/053/100/original/4K-44.mp4' type='video/mp4' ></source>
        </video>
        <div className='sm:mt-20 md:mt-0 sm:m-2 md:absolute md:top-[5%] md:left-[25%]'>
            <h1 className='text-4xl font-extrabold text-left lg:pl-20 pb-5'>My Account</h1>
            <div className='m-14 flex justify-center'>
                <form className=' md:w-[37vw] sm:w-full Register-form'>
                    <div className='flex justify-center flex-col items-center'>
                        <p className='font-bold'>Register</p>
                        <hr className='h-[2px] w-full mt-4 mb-8 bg-gray-200 border-0 dark:bg-gray-700' />
                    </div>
                    <div className='flex flex-col justify-start items-center'>
                        <div className='flex flex-col my-3 '>
                            <label className='text-xs font-bold uppercase'>First Name</label>
                            <input required className='md:w-[37vw] sm:w-full px-4 text-start py-3 border border-solid border-black' type='text' placeholder='First Name' />
                        </div>
                        <div className='flex flex-col my-3'>
                            <label className='text-xs font-bold uppercase'>Last Name</label>
                            <input required className='md:w-[37vw] sm:w-full px-4 py-3 border border-solid border-black' type='text' placeholder='Last Name' />
                        </div>
                        <div className='flex flex-col my-3'>
                            <label className='text-xs font-bold uppercase'>Phone</label>
                            <input required className='md:w-[37vw] sm:w-full px-4 py-3 border border-solid border-black' type='text' placeholder='Enter your password' />
                        </div>
                        <div className='flex flex-col my-3'>
                            <label className='text-xs font-bold uppercase'>Email</label>
                            <input required className='md:w-[37vw] sm:w-full px-4 py-3 border border-solid border-black' type='email' placeholder='Enter your password' />
                        </div>
                        <div className='flex flex-col my-6'>
                            <label className='text-xs font-bold uppercase'>password</label>
                            <input required className='md:w-[37vw] sm:w-full px-4 py-3 border border-solid border-black' type='password' placeholder='Enter your password' />
                        </div>
                        <Button className='bg-slate-300 text-slate-900 px-[16vw] rounded-md py-5' text={"Register"} />
                        <div className='self-start'>
                            <input required type='checkbox' className='scale-110 my-6  active:ring-blue-900' />
                            <label className='text-black font-bold sm:text-xs md:text-sm sm:m-3 md:m-6'>Add me to the puma mailing list</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>

    )
}
