import React from "react";
import {SafeAreaView} from 'react-native';

import HeaderComponent from "../components/HeaderComponent";

import ContainerImages from "../components/gallery/ContainerImages";
import AreaButtons from "../components/gallery/AreaButtons";


export default function GalleryScreen({ navigation }){
    return (
        <SafeAreaView style={{flex: 1}}>
            <HeaderComponent navigation={navigation} />
            <ContainerImages />
            <AreaButtons />
        </SafeAreaView>
    )
}