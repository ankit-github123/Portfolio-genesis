'use client';

import { BsFillCameraFill } from "react-icons/bs"
import React, { useRef, useState } from 'react'
import ProfileInputs from "./ProfileInputs"


const Profile = () => {
    const imageRef = useRef();
    const [file, setFile] = useState();

    return (
        <div className='grid sm:grid-cols-5 my-10'>
            <div className='col-span-3 order-last sm:order-first mx-7 h-full'>
                <ProfileInputs />
            </div>
            <div className='sm:col-span-2 order-first sm:order-last'>
                <div className='relative w-64 h-64 border-[1.5px] border-secondary border-dashed rounded-full m-auto'>
                    {file ?
                        <img src={URL.createObjectURL(file)} className='w-full h-full rounded-full opacity-80' alt="Protfolio genesis" />
                        :
                        <img src='/images/newprofile/nouser.jpeg' className='w-full h-full rounded-full opacity-20' alt="Protfolio genesis" />
                    }
                    <div
                        onClick={() => imageRef.current.click()}
                        className='
                    absolute -bottom-[1px] w-full h-2/5 bg-secondary opacity-40 rounded-b-full flex flex-col items-center cursor-pointer hover:opacity-70 transition-transform duration-1000 transform hover:scale-105
                    '>
                        <input ref={imageRef} type="file" accept="image/*" className="hidden" onChange={(e) => setFile(e.target.files[0])} />
                        <BsFillCameraFill size={30} className='mt-3' />
                        <div className='w-[60%] mx-auto my-2 text-sm'>
                            Select profile picture
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile


{/* <div className='flex my-10'>
<div className=' flex flex-col gap-8 mx-7 h-full'>

    <Input
        label={'First Name'}
        placeholder={'First Name'}
    />

    <Input
        label={'First Name'}
        placeholder={'First Name'}
    />

    <Input
        label={'First Name'}
        placeholder={'First Name'}
    />

    <Input
        label={'First Name'}
        placeholder={'First Name'}
    />

    <Input
        label={'First Name'}
        placeholder={'First Name'}
    />
</div>
<div>
    <div className='w-64 h-64 border border-secondary opacity-50 border-dashed rounded-full m-auto'>

    </div>
</div */}