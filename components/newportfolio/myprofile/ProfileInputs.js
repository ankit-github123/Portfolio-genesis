'use client';
import { useForm, Controller } from 'react-hook-form';

import { yupResolver } from "@hookform/resolvers/yup"
import React, { useContext } from 'react'
import { myprofileSchema, profileForm } from '@utils/forms/profile';
import Field from '@components/shared/Field';

import { AppContext } from '@context/AppContext';
import { useSession } from 'next-auth/react';

const ProfileInputs = () => {
    const data = useSession();
    const { setPortfolio, portfolio } = useContext(AppContext)

    const { handleSubmit, control, formState: { errors }, watch } = useForm({
        resolver: yupResolver(myprofileSchema),
        mode: 'onBlur',
        defaultValues: {
            firstname: "",
            lastname: "",
            username: "",
            email: data?.data?.user?.email,
            description: ''
        }
    });

    console.log(portfolio, 'error1');
    const onhandlesubmit = (data) => {
        console.log(data, 'formdata')
        setPortfolio({ ...data });

    }
    return (
        <form onSubmit={handleSubmit(onhandlesubmit)} className=''>
            <div className='grid grid-cols-12 gap-8'>
                {profileForm.map((profile) => {
                    return <div key={profile.name} className={`${profile.propertystyle}`}>
                        <Field {...profile} control={control} watch={watch} errors={errors} />
                    </div>
                })}
            </div>
            {/* <div className='grid grid-cols-12 gap-8'>
                <div className='col-span-7'>sd</div>
                <div className='col-span-6'>sd</div>
                <div className='col-span-12'>sd</div>
            </div> */}
            <button type='submit'>
                submit
            </button>
        </form>
    )
}

export default ProfileInputs
