'use client'
import NavElements from '@components/newportfolio/Nav/NavElements';
import { AppContext } from '@context/AppContext'
import React, { useContext } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi';
const SideNav = () => {
    const { session } = useContext(AppContext);
    console.log(session, 'mysession')
    return (
        <div className='bg-secondary h-screen border-extralight relative'>
            <div className='flex items-center gap-2 mx-2 my-5'>
                <div className='w-16 h-16'>
                    <img src='/images/common/logo.svg' />
                </div>
                <div className='text-lg'>
                    Portfolio Genesis
                </div>
            </div>
            <div className='my-2'>
                <NavElements />
            </div>
            <div className='absolute bottom-0 flex   w-full justify-between items-center gap-4 text-sm opacity-70 px-4 py-3 bg-primary'>
                <div className='flex gap-4 items-center'>
                    <img className='w-7 h-7 rounded-md' src={session?.user?.image} />
                    <div>{session?.user?.name}</div>
                </div>
                <HiDotsHorizontal />
            </div>
        </div>
    )
}

export default SideNav
// flex flex-col justify-center h-full w-full absolute top-0