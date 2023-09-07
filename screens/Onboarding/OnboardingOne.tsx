//import liraries
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, StatusBar, TouchableOpacity, Image, Dimensions, Platform } from 'react-native';
import Background from '../../assets/Onboarding/OnboardingOne.png';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import CustomButton from '../../components/Button';
import { colors } from '../../components/colors';
import { LinearGradient } from 'expo-linear-gradient';
import SignInButton from '../../components/onboarding/SignInButton';
import SignUpButton from '../../components/onboarding/SignUpButton';
// import { LinearGradient } from 'expo-linear-gradient';


// create a component
type OnboardingOnScreenProp = StackNavigationProp<RootStackParamList, 'OnboardingOne'>;
const OnboardingOne: FunctionComponent = () => {

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
                            <View style={{ height: 196, marginTop: "auto", maxWidth: 328 }}>

                                <Text style={{ fontSize: Platform.OS == "ios" ? 32 : 24, fontFamily: 'Poppins', color: colors.white, fontWeight: "500" }}>Convenient Telehealth: Virtual Consultations and Follow-up...</Text>
                                <Text style={{ fontSize: Platform.OS == "ios" ? 30 : 26, fontFamily: 'Poppins', color: colors.white, fontWeight: "500" }}>Anytime, Anywhere</Text>
                                <Text style={{ color: colors.onboardingHospytaText, fontSize: Platform.OS == "ios" ? 20 : 16, fontFamily: 'GothamPro', fontWeight: "400" }}>With Hospyta</Text>

                            </View>

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
        height: 572,
        paddingBottom: 50,
        justifyContent: 'center',

    },
    Button: {
        // borderWidth: 1,
        // borderColor: 'red',
        height: 30
    },
    gradient: {

        paddingHorizontal: 25,
        flex: 1,
        height: screenHeight * 0.4, // Adjust this percentage as needed
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
    },
});
//     return (
//         <SafeAreaView style={styles.container}>
//             <StatusBar />
//             <ImageBackground source={Background} style={{ flex: 1, paddingRight: 20, paddingLeft: 40, paddingTop: 50 }}>
//                 <View style={styles.BrandHouse}>
//                     <View style={styles.ImageHolder}>

//                     </View>
//                     <Text style={{ color: 'white' }}>Hospyta</Text>

//                 </View>
//                 {/* <TouchableOpacity style={styles.Button} onPress={Login}>

//                 </TouchableOpacity>
//                  */}

//                 <View style={styles.LinearGradientContainer}>
//                     <View style={{ height: 192, borderColor: "blue", borderWidth: 2, marginTop: "auto" }}>

//                     
//                     </View>

//                     <View style={{ marginTop: 20 }}>


//                         <SignInButton />

//                         <SignUpButton />

//                     </View>
//                 </View>
//             </ImageBackground>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//     },
//     BrandHouse: {
//         borderWidth: 1,
//         borderColor: 'red',
//         height: 47,
//         width: 149,
//         flexDirection: 'row',
//         alignItems: 'center'
//     },
//     ImageHolder: {
//         borderWidth: 1,
//         borderColor: 'blue',
//         width: 70,
//         height: '100%',
//     },
//     TextContainer: {
//         borderWidth: 1,
//         borderColor: 'black',
//         height: 192,
//     },
//     LinearGradientContainer: {
//         borderWidth: 1,
//         borderColor: 'red',
//         marginTop: 'auto',
//         height: 572,
//         paddingBottom: 50,
//         justifyContent: 'center',

//     },
//     Button: {
//         borderWidth: 1,
//         borderColor: 'red',
//         height: 30
//     },
// });


//make this component available to the app
export default OnboardingOne;
