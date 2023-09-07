import React, { FunctionComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface NewsFeedComponentProps {
    title: string;
    description: string;
    imageSource: any;
}

const NewsFeedComponent: FunctionComponent<NewsFeedComponentProps> = ({ title, description, imageSource }) => {
    return (
        <View style={styles.container}>
            <Image source={imageSource} style={styles.image} />

            <View style={styles.textContainer}>
                <Text style={{ fontFamily: "Gilroy", fontSize: 16, color: "#8E8E93", }} >{title}</Text>
                <Text style={{ fontFamily: "GothamPro", fontSize: 16 }}>{description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 121,
        width: '100%',

        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'center',
        gap: 10
    },
    textContainer: {
        // alignItems: "center",
        justifyContent: "center",
        height: '100%',
        width: '70%',
        padding: 10,



        // justifyContent: 'space-between',
    },
    image: {


        resizeMode: 'cover',
    },
});

export default NewsFeedComponent;
