import React, { FunctionComponent } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import NewsFeedComponent from './NewsField'; // Import your NewsFeedComponent



interface NewsFeedComponentProps {
    key: string,
    title: string;
    description: string;
    imageSource: any;
}
interface NewsFeedListComponentProps {
    data: NewsFeedComponentProps[];
}


const NewsFeedList: FunctionComponent<NewsFeedListComponentProps> = ({ data }) => {
    return (
        <View style={styles.container}>
            <FlatList
                ItemSeparatorComponent={() => (
                    <View style={{ backgroundColor: "#F5F5F5", height: 2 }} />
                )}
                data={data}
                renderItem={({ item }) => (
                    <NewsFeedComponent
                        title={item.title}
                        description={item.description}
                        imageSource={item.imageSource}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default NewsFeedList;
