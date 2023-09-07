import React from 'react'
import { FunctionComponent } from 'react';
import CustomButton from '../Button';
import { colors } from '../colors';
const SignUpButton: FunctionComponent = () => {
    return (
        <CustomButton width={"100%"} borderColor={colors.white} marginBottom={5} marginTop={5} borderWidth={1} backgroundColor='transparent' buttonText='Sign Up' onPress={() => console.log("click me")} />
    )
}

export default SignUpButton
