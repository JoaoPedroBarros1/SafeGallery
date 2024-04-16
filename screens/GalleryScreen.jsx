import React from "react";
import {SafeAreaView} from 'react-native';

import HeaderComponent from "../components/HeaderComponent";

import ContainerImages from "../components/gallery/ContainerImages";
import AreaButtons from "../components/gallery/AreaButtons";


export default function GalleryScreen({ route, navigation }){
    const {collection} = route.params

    return (
        <SafeAreaView style={{flex: 1}}>
            <HeaderComponent navigation={navigation} />
            <AreaButtons collectionName={collection} />
            <ContainerImages collectionName={collection} />
        </SafeAreaView>
    )
}