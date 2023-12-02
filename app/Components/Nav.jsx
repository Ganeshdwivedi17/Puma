"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { UserLogout } from '../Redux/authSlice'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

function Nav() {
    const  IsLogedIn = useSelector((state) => state.auth.isLogedIn);
    const User = useSelector((state) => state.auth.user)
    const item = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const pathname = usePathname()
    const [toggle, settoggle] = useState("sm:hidden")
    const [count, setcount] = useState(0)
    const [menu, setmenu] = useState("Menu")
    const Toggle = () => {
        if (count == 0) {
            setmenu(<p className='text-black font-bold bg-slate-100 px-2 rounded-sm text-xl'>X</p>);
            setcount(1);
            settoggle("sm:block");
        } else {
            setmenu("Menu");
            setcount(0);
            settoggle("sm:hidden");
        }
    }
const handleLogOut = ()=>{
    dispatch(UserLogout())
}
    return (
        <>
            <nav className='relative '>
                <div className='flex backdrop-blur-lg bg-slate-200 bg-opacity-50 flex-row justify-between z-50 md:h-20 sm:h-[10vh] top-0 fixed w-full px-10'>

                    <div className='w-20 self-center '>
                        <Link href={"/"}>
                            <img className=' grayscale sepia brightness-0 sm:w-10' src='https://cdn.iconscout.com/icon/free/png-512/free-puma-3421676-2854595.png?f=webp&w=256' />
                        </Link>
                    </div>
                    <div className={`Navigation-menu  md:mt-[3.5vh]`}>
                        <ul className={`flex-row flex  gap-4 text-black  text-lg font-bold`}>
                            <li className=''>
                                <Link className={`link ${pathname === '/' ? 'underline decoration-2 underline-offset-4 decoratext-black' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`} href='/'>Home</Link>
                            </li>
                            <li className=''>
                                <Link className={`link ${pathname === '/Men' ? 'underline decoration-2 underline-offset-4 decoratext-black' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`} href={"/Men"}>Men</Link>
                            </li>
                            <li className=''>
                                <Link className={`link ${pathname === '/Women' ? 'underline decoration-2 underline-offset-4 decoratext-black' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`} href={"/Women"}>Women</Link>
                            </li>
                            <li className=''>
                                <Link className={`link ${pathname === '/Kid' ? 'underline decoration-2 underline-offset-4 decoratext-black' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`} href='/Kid'>Kids</Link>
                            </li>
                            <li className=''>
                                <Link className={`link ${pathname === '/About' ? 'underline decoration-2 underline-offset-4 decoratext-black' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`} href='/About'>About</Link>
                            </li>
                            <li className=''>
                                <Link className={`link ${pathname === '/Contact' ? 'underline decoration-2 underline-offset-4 decoratext-black' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`} href='/Contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-row gap-5  items-center ld:order-1 sm:order-none md:order-1'>
                        <div className='w-6 sm:justify-self-end'>
                            <Link href={"/Wishlist"}>
                            <FavoriteBorderIcon className='text-black' fontSize='medium'/>
                            </Link>
                        </div>
                        <div className='w-6'>
                            <Link href={"/Cart"}>
                               <p className='text-black bg-slate-200 rounded-3xl absolute font-extrabold  px-2 sm:top-[7%] md:top-[15%] text-sm'>{item.length}</p>
                                <ShoppingCartIcon className='text-black' fontSize='medium'/>
                            </Link>
                        </div>
                        <div className='sm:hidden md:block w-6'>
                       {User == null ? null : console.log(User.password)}
                           {
                            IsLogedIn ? <button onClick={handleLogOut}>hello {User.email}<SentimentSatisfiedAltIcon/></button> :
                            <Link href={"/Account/Login"}>
                            <AccountCircleIcon className='text-black' fontSize='medium'/>
                            </Link>
                          
                           }
                        </div>
                        <div>
                            <button onClick={Toggle} className='text-black Hamburger'>{menu}</button>
                        </div>
                    </div>
                </div>

            </nav>
            <div className={`pt-24 z-50 mobile-Nav fixed top-[10vh] backdrop-blur-[7px] bg-gradient-to-br from-black text-white bg-opacity-40  h-[100vh] ${toggle}`}>
                <ul className={`ml-[5vw] flex-col flex text-lg font-bold`}>
                    <li className='pb-3'>
                        <Link className={`link ${pathname === '/' ? 'underline decoration-2 underline-offset-4 ' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`} href='/'>Home</Link>
                    </li>
                    <li className='pb-3'>
                        <Link className={`link ${pathname === '/Men' ? 'underline decoration-2 underline-offset-4 ' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`} href={"/Men"}>Men</Link>
                    </li>
                    <li className='pb-3'>
                        <Link className={`link ${pathname === '/Women' ? 'underline decoration-2 underline-offset-4 ' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`} href={"/Women"}>Women</Link>
                    </li>
                    <li className='pb-3'>
                        <Link className={`link ${pathname === '/Kid' ? 'underline decoration-2 underline-offset-4 ' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`} href='/Kid'>Kids</Link>
                    </li>
                    <li className='pb-3'>
                        <Link className={`link ${pathname === '/About' ? 'underline decoration-2 underline-offset-4 ' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`} href='/About'>About</Link>
                    </li>
                    <li className='mb-4'>
                        <Link className={`link ${pathname === '/Contact' ? 'underline decoration-2 underline-offset-4 ' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-black`} href='/Contact'>Contact</Link>
                    </li>
                    {IsLogedIn ? 
                    <><h1>Hello {User.email}</h1>
                    <button onClick={handleLogOut} className='text-ltext-black  font-bold  px-4 py-2 border-solid border-2 '>Logout</button></>:
                    <div>
                    <li className='mb-6'>
                        <Link className='text-lg font-bold  px-4 py-2 border-solid border-2 ' href={'/Account/Login'}>Login</Link>
                    </li>
                    <li className='mt-1'>
                        <Link className=' text-ltext-black  font-bold  px-4 py-2 border-solid border-2 ' href={'/Account/Register'}>Register</Link>
                    </li>
                    </div>}

                </ul>
            </div>
        </>
    )
}

export default Nav
