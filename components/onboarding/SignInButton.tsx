import React from 'react'
import { FunctionComponent } from 'react';
import CustomButton from '../Button';
import { colors } from '../colors';
interface Props {
    onPress: () => void
}
const SignInButton: FunctionComponent<Props> = ({ onPress }) => {
    return (
        <CustomButton width={"100%"} height={48} backgroundColor={colors.onboardingBtnColor} buttonText='Sign In' marginBottom={5} marginTop={5} onPress={onPress} />
    )
}

export default SignInButton
