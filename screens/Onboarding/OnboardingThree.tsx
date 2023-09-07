//import liraries
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, StatusBar, TouchableOpacity, Image, Dimensions, Platform } from 'react-native';
import Background from '../../assets/Onboarding/OnboardingThree.png';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import CustomButton from '../../components/Button';
import { colors } from '../../components/colors';

import { LinearGradient } from 'expo-linear-gradient';
import SignInButton from '../../components/onboarding/SignInButton';
import SignUpButton from '../../components/onboarding/SignUpButton';

// create a component
type OnboardingOnScreenProp = StackNavigationProp<RootStackParamList, 'OnboardingThree'>;
const OnboardingThree = () => {
    const navigation = useNavigation<OnboardingOnScreenProp>();
    const Login = () => {
        navigation.navigate("SignIn")
    }
    return (
        <View style={styles.container}>
            <StatusBar />
            <ImageBackground source={Background} style={{
                flex: 1

                // , paddingRight: 20, paddingLeft: 40, paddingTop: 50 
            }}>
                <LinearGradient
                    colors={['rgba(43, 43, 43, 0.8)', 'rgba(43, 43, 43, 0)']}
                    start={{ x: 0.5, y: 1 }} // Start from the bottom center
                    end={{ x: 0.5, y: 0 }}   // End at the top center
                    style={styles.gradient}
                >
                    <SafeAreaView style={{ flex: 1 }}>


                        <View style={styles.BrandHouse}>
                            <Image source={require("../../assets/Onboarding/Logo-with-text.png")} />

                        </View>



                        <View style={styles.LinearGradientContainer}>

                            <View style={{ maxHeight: 196, marginTop: "auto", maxWidth: 325, marginBottom: 100 }}>
                                <Text style={{ fontSize: Platform.OS == "ios" ? 32 : 23, fontFamily: 'Poppins', color: colors.white, fontWeight: "500" }}>Logistics</Text>
                                <Text style={{ fontSize: Platform.OS == "ios" ? 32 : 23, fontFamily: 'Poppins', color: colors.white, fontWeight: "500" }}>....And We'll Deliver it All  Too, In Record Time.</Text>
                                <Text style={{ color: colors.onboardingHospytaText, fontSize: Platform.OS == "ios" ? 20 : 16, fontFamily: 'GothamPro', fontWeight: "400" }}>With Hospyta</Text>


                            </View>
                            {/* <View style={{ height: 238, marginTop: "auto", maxWidth: 325 }}>
                                <Text style={{ fontSize: Platform.OS == "ios" ? 34 : 25, fontFamily: 'Poppins', color: colors.white, fontWeight: "500" }}>Inspire Your Medical Practice Through the Power of Collaboration and Knowledge Sharing.</Text>
                            </View> */}

                            <View style={{ marginTop: Platform.OS == "ios" ? 5 : 2 }}>
                                <SignInButton onPress={Login} />
                                <SignUpButton />
                            </View>
                        </View>
                    </SafeAreaView>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
};
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    BrandHouse: {

        height: 47,
        width: 149,
        flexDirection: 'row',
        alignSelf: "flex-start"
    },
    ImageHolder: {
        borderWidth: 1,
        borderColor: 'blue',
        width: 70,
        height: '100%',
    },
    TextContainer: {
        borderWidth: 1,
        borderColor: 'black',
        height: 192,
    },
    LinearGradientContainer: {
        // borderWidth: 1,
        // borderColor: 'red',
        marginTop: 'auto',
        justifyContent: "space-between",
        // height: 572,
        paddingBottom: 50,
        // justifyContent: 'space',

    },
    Button: {
        // borderWidth: 1,
        // borderColor: 'red',
        height: 30
    },
    gradient: {

        paddingHorizontal: 25,
        flex: 1,

        height: screenHeight * 0.5, // Adjust this percentage as needed
        // justifyContent: 'space',
        // alignItems: 'center',

    },
});



//make this component available to the app
export default OnboardingThree;
