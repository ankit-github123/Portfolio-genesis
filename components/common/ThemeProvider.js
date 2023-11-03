"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(255, 255, 255,0.3)', // Change this to your preferred primary color
        },
        secondary: {
            main: '#f50057', // Change this to your preferred secondary color
        },
        text: {
            primary: 'rgb(255, 255, 255,0.3)',
            secondary: 'rgb(255, 255, 255,0.2)',
            disabled: 'rgb(255, 255, 255,0.4)',
            color: 'rgb(255, 255, 255,0.7)',
        },
        background: {
            field: 'rgba(255, 255, 255,0.01)',
        }

    },
    overrides: {
        MuiInput: {
            underline: {
                '&:before': {
                    borderBottom: '1px solid white', // Change the underline color before typing
                },
                '&:hover:not($disabled):before': {
                    borderBottom: '1px solid white', // Change the underline color when hovered
                },
            },
            input: {
                color: 'white', // Set the text color to white
            },
        },
    },
    // You can customize other theme options here
});

export default theme;