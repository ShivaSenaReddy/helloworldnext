'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import './styles.css'
function AuthLayout({ children }) {
    const linksArray = [
        { name: 'Register', href: '/register' },
        { name: 'Login', href: '/login' },
        { name: 'forgot-password', href: '/forgot-password' },
    ]
    const pathName = usePathname();
    const [inputValue, setInputValue] = useState('');
    console.log(pathName)
    return (
        <div className='products'>
            <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
            {linksArray.map(ele => {
                const isActive = pathName.startsWith(ele.href);
                return (<Link href={ele.href} key={ele.name} className={
                    isActive ? 'bold' : 'regular'
                } >{ele.name}</Link>)
            })}
            {children}
        </div>
    )
}

export default AuthLayout
