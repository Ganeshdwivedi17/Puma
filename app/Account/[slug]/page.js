'use client'
import React from 'react'
import Login from '../Login'
import { usePathname } from 'next/navigation'
import Register from '../Register'

function page({ params }) {
    const pathname = usePathname()
    const condition = pathname == "/Account/Login" ? <Login /> : <Register />

    return (<>
        {condition}
    </>

    )

}

export default page