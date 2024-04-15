import React, {useContext} from "react";
import HeaderComponent from "../components/HeaderComponent";
import {Pressable, FlatList, SafeAreaView, Image, Text, View} from "react-native";

import Collections from "../context/CollectionsContext";


export default function CollectionScreen({ navigation }){
    const {collections} = useContext(Collections)

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
                        onPressOut={() => navigation.navigate("Gallery", {collection: item.name})}
                        style={{flex: 1, aspectRatio: 1, position: 'relative'}}
                    >
                        <Image
                            source={{uri: item.images[0]}}
                            style={{width: '100%',
                                aspectRatio: 1,
                                borderRadius: 30,
                                position: 'absolute',
                                left: 0,
                                top: 0
                        }}
                        />
                        <View
                            style={{width: '100%',
                                aspectRatio: 1,
                                borderRadius: 30,
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                backgroundColor: 'rgba(0,0,0,0.65)'
                        }}
                        />
                        <Text style={{
                            position: 'absolute',
                            left: '50%',
                            bottom: 10,
                            transform: [{translateX: '-50%'}],
                            color: '#eee',
                            fontSize: 25
                        }}>{item.name}</Text>
                    </Pressable>
                }
                />
        </SafeAreaView>
    )
}