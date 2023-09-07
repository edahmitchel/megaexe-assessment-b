import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingOne from './screens/Onboarding/OnboardingOne';
import OnboardingTwo from './screens/Onboarding/OnboardingTwo';
import OnboardingThree from './screens/Onboarding/OnboardingThree';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingFour from './screens/Onboarding/OnboardingFour';
import SignUp from './screens/Authentication/SignUp';
import SignIn from './screens/Authentication/SignIn';
import BottomTabNavigator from './screens/Navigator/BottomNavigator';
import { useCustomFonts } from './Utils/UseCustomFonts';
export type RootStackParamList = {
  BottomTab: undefined;
  SignUp: undefined;
  OnboardingOne: undefined;
  OnboardingTwo: undefined;
  OnboardingThree: undefined;
  SignIn: undefined;
  OnboardingFour: undefined;

};

const Stack = createStackNavigator<RootStackParamList>();
export default function App() {
  useCustomFonts();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} options={{ title: "BottomTab", headerShown: false }} />
        <Stack.Screen name='OnboardingOne' component={OnboardingOne} options={{ title: "OnboardingOne", headerShown: false }} />
        <Stack.Screen name='OnboardingThree' component={OnboardingThree} options={{ title: "OnboardingThree", headerShown: false }} />
        <Stack.Screen name='OnboardingTwo' component={OnboardingTwo} options={{ title: "OnboardingTwo", headerShown: false }} />
        <Stack.Screen name='OnboardingFour' component={OnboardingFour} options={{ title: "OnboardingFour", headerShown: false }} />
        <Stack.Screen name='SignIn' component={SignIn} options={{ title: "SingIn", headerShown: false }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ title: "SignUp", headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
