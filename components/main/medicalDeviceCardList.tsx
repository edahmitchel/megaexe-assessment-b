import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, ImageBackground } from 'react-native';

interface MedicalDeviceCardProps {
    id: string
    title: string;
    price: string;
    imageSource: any; // Replace with appropriate image type
}

const MedicalDeviceCard: React.FC<MedicalDeviceCardProps> = ({ id, title, price, imageSource }) => (
    <View style={styles.card}>
        <ImageBackground source={imageSource} style={styles.image} ></ImageBackground>
        <View style={styles.cardContent}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    </View>
);

interface MedicalDeviceCardListProps {
    data: MedicalDeviceCardProps[];
}

const MedicalDeviceCardList: React.FC<MedicalDeviceCardListProps> = ({ data }) => (
    <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
            <MedicalDeviceCard
                id={item.id}
                title={item.title}
                price={item.price}
                imageSource={item.imageSource}

            />
        )}
    />
);

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        marginVertical: 4,
        padding: 12,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 4,
        width: 150,
        height: 190,
        marginRight: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardContent: {
        flex: 1,
        width: '100%',
    },
    image: {
        width: 118,
        height: 118,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title: {
        fontSize: 10,

        color: "#424242",
        textTransform: "capitalize",
        fontWeight: '400',
        fontFamily: "GothamPro"

    },
    price: {
        fontSize: 12,
        color: '#424242',
        fontWeight: '700',
        fontFamily: "GothamPro"
    },
});

export default MedicalDeviceCardList;
