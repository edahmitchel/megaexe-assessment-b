import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

interface CardItemProps {
    id: string,
    title: string;
    description: string;
    imageSource: any; // Replace with appropriate image type
}

const HorizontalCard: React.FC<CardItemProps> = ({ id, title, description, imageSource }) => (
    <View style={styles.card}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
    </View>
);

interface HorizontalCardListProps {
    data: CardItemProps[];
}

const HorizontalCardList: React.FC<HorizontalCardListProps> = ({ data }) => (
    <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
            <HorizontalCard
                id={item.id}

                title={item.title}
                description={item.description}
                imageSource={item.imageSource}
            />
        )}
    />
);

const styles = StyleSheet.create({
    card: {
        width: 260,
        height: 230,
        padding: 3,
        marginVertical: 5,

        // borderColor: '#3498db',
        // borderWidth: 2,
        marginRight: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
    },
    image: {
        width: '100%',
        height: 140,
        borderRadius: 20
    },
    title: {

        marginTop: 10,
        color: "#8E8E93",
        marginLeft: 10,
        fontSize: 16,
        fontWeight: '400',
        fontFamily: "GothamPro"
    },
    description: {

        marginHorizontal: 10,
        marginBottom: 10,
        fontSize: 16,
        fontWeight: '400',
        fontFamily: "GothamPro"
    },
});

export default HorizontalCardList;
