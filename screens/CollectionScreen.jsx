import React, {useContext} from "react";
import HeaderComponent from "../components/HeaderComponent";
import {Button, FlatList, SafeAreaView, Text} from "react-native";

import Collections from "../context/CollectionsContext";


export default function CollectionScreen({ navigation }){
    const {collections} = useContext(Collections)

    return (
        <SafeAreaView>
            <HeaderComponent navigation={navigation} />
            <FlatList
                numColumns={2}
                data={collections}
                renderItem={({item}) =>
                    <Button
                        title={item.name}
                        onPress={() => {navigation.navigate("Gallery", {collection: item.name})}}
                    />
                } />
        </SafeAreaView>
    )
}