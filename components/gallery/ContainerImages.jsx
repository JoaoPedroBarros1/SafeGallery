import React from "react";
import {View, Text, FlatList} from 'react-native';
import Collections from "../../context/CollectionsContext";


export default function ContainerImages({ collectionName }){
    return (
        <View>
            <View>
                <Text>Galeria Segura de Imagens</Text>
            </View>
            {/*<FlatList data={images_list} renderItem={} />*/}
        </View>
    )
}