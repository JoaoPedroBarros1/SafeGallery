import React from "react";
import {ScrollView, SafeAreaView} from 'react-native';

import HeaderComponent from "../components/HeaderComponent";

import ContainerImages from "../components/gallery/ContainerImages";
import AreaButtons from "../components/gallery/AreaButtons";


export default function GalleryScreen({ route, navigation }){
    // Esse parâmetro serve para passar qual galeria que está aberta, é importante, não apague
    const {collection} = route.params

    return (
        <SafeAreaView>
            <ScrollView>
                 <HeaderComponent navigation={navigation} />
                 <ContainerImages collectionName={collection} />
                 <AreaButtons/>
            </ScrollView>

        </SafeAreaView>
    )
}