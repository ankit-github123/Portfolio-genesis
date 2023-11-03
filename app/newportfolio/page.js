"use client";
import Sample from '@components/newportfolio/Sample'
import { AppContext } from '@context/AppContext';
import React, { useContext, useEffect, useState } from 'react'

const NewPortFolio = () => {
    const { session, portfolio } = useContext(AppContext)
    const [file, setFile] = useState("");
    const [imageData, setImageData] = useState(null);
    // useEffect(() => {
    //     const fetchdata = async () => {
    //         const data = await fetch('/api/create-profile', {
    //             method: 'GET'
    //         })
    //         const res = await data.json();
    //         console.log(res, 'dt1')
    //         const bufferData = new Uint8Array(res.result[1].img.data);
    //         const blob = new Blob([bufferData], { type: 'image/jpeg' }); // Change the 'type' if the image is a different format
    //         const imageUrl = URL.createObjectURL(blob);
    //         setImageData(imageUrl);
    //     }
    //     fetchdata()
    // }, [])

    console.log(portfolio, 'portfolio1')
    const handleClick = async () => {
        console.log(file, ' str1')
        try {
            const data = new FormData();
            data.set('file', file);
            data.set('id', session.user.id)
            const response = await fetch('/api/create-profile', {
                method: 'POST',
                body: data
            })
            if (response.ok) {
                console.log(response, 'res1')
            }
        } catch (err) {
            console.log(err.message, 'error1');
        }

    }
    return (
        <>
        </>
    )
}

export default NewPortFolio

{/* <input type='file' accept='image/*' onChange={(e) => setFile(e.target.files[0])} />
<button onClick={handleClick}>click</button>
{imageData && (
    <img src={imageData} className='w-20 h-20' alt="Uploaded Image" />
)} */}