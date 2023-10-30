import { AppContextProvider } from '@context/AppContext'
import React from 'react'
import SideNav from './SideNav'

const NewPortfolioLayout = (props) => {
    return (
        <AppContextProvider>
            <div>

                <div className='flex '>
                    <div className='' style={{ flex: 2 }}>
                        <SideNav />
                    </div>
                    <div className='' style={{ flex: 8 }}>

                        {props.children}
                    </div>
                </div>
            </div>
        </AppContextProvider>
    )
}

export default NewPortfolioLayout
