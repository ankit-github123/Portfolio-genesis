import React from 'react'
import { Controller } from 'react-hook-form';

const Field = (props) => {
    const { Accepter, ...rest } = props
    return (
        <Controller
            name={props.name}
            control={props.control}
            // defaultValue=""
            render={({ field }) => (
                <Accepter {...field} {...rest} />
            )}
        />
    )
}

export default Field
