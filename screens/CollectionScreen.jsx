import React, {useContext} from "react";
import HeaderComponent from "../components/HeaderComponent";
import {Pressable, FlatList, SafeAreaView, Image, Text, View} from "react-native";

import {Collections} from "../context/CollectionsContext";

import {styles} from "../styles/collectionsStyle";


export default function CollectionScreen({ navigation }) {
    const {collections, setCurrentCollection} = useContext(Collections)

    return (
        <SafeAreaView>
            <HeaderComponent navigation={navigation} />
            <FlatList
                contentContainerStyle={{padding: 10, gap: 10}}
                columnWrapperStyle={{gap: 10}}
                numColumns={2}
                data={collections}
                renderItem={({item}) =>
                    <Pressable
                        onPressOut={() => {
                            navigation.navigate("Gallery")
                            setCurrentCollection(item.name)
                        }}
                        style={styles.listButton}
                    >
                        <Image
                            source={{uri: item.images[0]}}
                            style={styles.cardSize}
                        />
                        <View
                            style={[styles.cardSize, {backgroundColor: 'rgba(0,0,0,0.65)'}]}
                        />
                        <View style={styles.cardView}>
                            <Text style={styles.cardText}>{item.name}</Text>
                        </View>
                    </Pressable>
                }
                />
        </SafeAreaView>
    )
}