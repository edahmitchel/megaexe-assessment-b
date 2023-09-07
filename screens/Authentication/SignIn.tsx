//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



// create a component
const SignIn = () => {


    const navigation=useNavigation();
    const Home =() => {
        navigation.navigate("BottomTab");
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={Home}><Text>Sign In</Text></TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default SignIn;
