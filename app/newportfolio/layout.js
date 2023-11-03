"use client";
import { AppContextProvider } from '@context/AppContext'

import LayoutContainer from './LayoutContainer';

const NewPortfolioLayout = (props) => {


    return (
        <AppContextProvider>
            <LayoutContainer {...props} />
        </AppContextProvider>
    )
}

export default NewPortfolioLayout
