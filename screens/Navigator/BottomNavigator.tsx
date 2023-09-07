//import liraries
import React, { Component, FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './NavigatorScreens/Home';
import Appointments from './NavigatorScreens/Appointments';
import Community from './NavigatorScreens/Community';
import Store from './NavigatorScreens/Store';
import UserProfile from './NavigatorScreens/UserProfile';
import CustomHome from '../../components/customTabs/CustomHome';
import CommunityTab from '../../components/customTabs/CommunityTab';
import ProfileTab from '../../components/customTabs/ProfileTab';
import CalendarTab from '../../components/customTabs/CalendarTab';
import StoreTab from '../../components/customTabs/StoreTab';
const Tab = createBottomTabNavigator();

// create a component
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                let customIcon;

                if (route.name === 'Home') {
                    customIcon = <CustomHome />;
                } else if (route.name === 'Appointments') {
                    customIcon = <CalendarTab />;
                } else if (route.name === 'Community') {
                    customIcon = <CommunityTab />;
                } else if (route.name === 'Store') {
                    customIcon = <StoreTab />;
                } else if (route.name === 'Profile') {
                    customIcon = <ProfileTab />;
                }

                return customIcon;
            },
        })}
        // tabBarOptions={{
        //     showLabel: false, // Hide default tab labels
        // }}
        >
            <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'good', headerShown: false, tabBarShowLabel: false }} />
            <Tab.Screen name="Appointments" component={Appointments} options={{ tabBarLabel: 'good', headerShown: false, tabBarShowLabel: false }} />
            <Tab.Screen name="Community" component={Community} options={{ tabBarLabel: 'good', headerShown: false, tabBarShowLabel: false }} />
            <Tab.Screen name="Store" component={Store} options={{ tabBarLabel: 'good', headerShown: false, tabBarShowLabel: false }} />
            <Tab.Screen name="Profile" component={UserProfile} options={{ tabBarLabel: 'good', headerShown: false, tabBarShowLabel: false }} />
        </Tab.Navigator>
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
export default BottomTabNavigator;
