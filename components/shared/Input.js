"use client"
import { TextField, styled } from '@mui/material'

const CustomTextField = styled(TextField)(({ theme }) => {

    return ({
        '& .MuiInputBase-root': {
            height: '50px',
            backgroundColor: `${theme.palette.background.field}`,
            '&:focus': {
                border: `0.1px solid ${theme.palette.text.primary}`,
            },
        },
        '& .MuiInputLabel-outlined': {
            top: '-2px',
            letterSpacing: '0.7px',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: `0.5px solid ${theme.palette.text.primary}`,


        },
        '& .MuiInputBase-input': {
            padding: '1px',
            paddingLeft: '10px',
            color: `${theme.palette.text.color}`,
            letterSpacing: '0.85px',
            fontWeight: 400,
            fontSize: '17px',
            border: 'none !important',

        },
        '& .MuiFormLabel-root': {
        },
        '& .Mui-disabled': {
            border: `1px solid ${theme.palette.text.primary}`
        },
        '& .MuiFormHelperText-root': {
            marginLeft: 1,
            // fontSize: '11px'
        }
    })
});
const Input = (props) => {
    const { tag, placeholder, name, errors } = props;

    return (
        <div className={`flex flex-col gap-1.5`}>
            <legend className='text-xs text-light'>{tag}</legend>
            <CustomTextField
                name={name}
                id="outlined-basic"
                placeholder={placeholder}
                variant="outlined"
                className='w-full'
                error={errors[name]}
                helperText={errors[name]?.message}
                {...props}
            />
        </div>
    )
}

export default Input
