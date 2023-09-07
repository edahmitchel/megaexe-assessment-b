import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Profile from '../../assets/CustomTab/profile.png'

interface ProfileTabProps {
    label?: string;
    iconName?: string;
    focused?: boolean
}

const ProfileTab: React.FC<ProfileTabProps> = ({ label, iconName, focused }) => {
    return (
        <View style={[styles.tabBarItem, { backgroundColor: focused ? '#edeafe' : 'transparent' }]}>
            <Image source={Profile} style={{ width: 24 }} resizeMode='contain' />
            <Text style={[styles.tabBarLabel, { color: focused ? '#4425F5' : 'gray' }]}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    tabBarItem: {
        flex: 1,
        alignItems: 'center',
        height: 20, // Customize the height as needed
        flexDirection: 'row',
        width: 80,
        borderRadius: 8,
        marginLeft: 15,
        paddingLeft: 5

    },
    tabBarLabel: {
        fontSize: 12, // Customize the font size as needed
        // marginTop: 5, // Customize the margin as needed
        marginLeft: 5
    },
});

export default ProfileTab;
