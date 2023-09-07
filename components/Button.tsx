import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, DimensionValue, Platform } from 'react-native';

interface CustomButtonProps {
    buttonText: string;
    onPress: () => void;
    width?: DimensionValue;
    height?: DimensionValue;
    backgroundColor?: string;
    textColor?: string;
    borderWidth?: number;
    borderColor?: string;
    marginTop?: DimensionValue | number;
    marginBottom?: DimensionValue | number;
    marginLeft?: DimensionValue | number;
    marginRight?: DimensionValue | number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    buttonText,
    onPress,
    width = 150,
    height = 50,
    backgroundColor = '#007BFF',
    textColor = "#FFFFFF",
    borderWidth = 0,
    borderColor = 'black',
    marginTop = 0,
    marginBottom = 0,
    marginLeft = 0,
    marginRight = 0,
}) => {
    const [isPressed, setIsPressed] = useState(false);

    const containerStyle = {
        width,
        height,
        backgroundColor,
        borderWidth,
        borderColor,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        elevation: isPressed && Platform.OS === 'android' && backgroundColor !== 'transparent' ? 6 : 0,
        shadowOpacity: isPressed && Platform.OS === 'ios' ? 0.3 : 0,
    };

    const textStyle = {
        color: textColor,
    };

    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };

    return (
        <Pressable
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={[styles.button, containerStyle]}
        >
            <Text style={[styles.buttonText, textStyle]}>{buttonText}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CustomButton;
