import React from "react";
import {IconContainer, InputContainer, InputText, TextError} from './styles'
import { Controller } from "react-hook-form"

const Input = ({leftIcon, name, placeholder, control, errorMessage, ...rest}) => {
    return (
        <>
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <Controller 
                name={name}
                control={control}
                render={({ field }) => <InputText placeholder={placeholder} {...field}{...rest} />}
            />
            
        </InputContainer>
        {errorMessage ? <TextError>{errorMessage}</TextError>: null}
        </>
        
    )
}

export { Input };