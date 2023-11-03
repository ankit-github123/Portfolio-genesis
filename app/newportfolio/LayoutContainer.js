import React, { useContext } from 'react'
import SideNav from './SideNav'
import { ThemeProvider } from '@mui/material'
import theme from '@components/common/ThemeProvider'
import { AppContext } from '@context/AppContext'
import { useSession } from 'next-auth/react'
const LayoutContainer = (props) => {
    const data = useSession()
    const contextdata = useContext(AppContext);
    console.log(contextdata, 'contextdata')
    return (
        <div>
            <div className='flex bg-primary'>
                <div className='' style={{ flex: 3 }}>
                    <SideNav />
                </div>
                <div className='' style={{ flex: 10 }}>
                    <ThemeProvider theme={theme}>
                        <div className='bg-primary h-screen w-full overflow-scroll'>
                            <div className='bg-primary w-full h-[12.8vh] ml-4 flex flex-col gap-2 justify-center text-4xl font-medium text-light'>
                                <div className='h-auto pt-3 tracking-wide'>
                                    My Profile
                                    <div className='border border-primary w-[6%] mt-2'></div>
                                </div>
                            </div>
                            <div className='bg-secondary ml-4 mr-7 mt-4 rounded-md border-extralight h-[83vh] box-shadow-main1 overflow-scroll'>

                                {data?.data?.user && props.children}
                            </div>
                        </div>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    )
}

export default LayoutContainer
