import React from "react";
import { View, ScrollView } from 'react-native';

import HeaderComponent from "../components/HeaderComponent";

import ContainerImages from "../components/gallery/ContainerImages";
import CardImagem from "../components/gallery/CardImagem";
import AreaButtons from "../components/gallery/AreaButtons";



export default function GalleryScreen({ navigation }){
    return (
        <>
            <ScrollView>
                 <HeaderComponent navigation={navigation} />
                 <ContainerImages/>
                 <CardImagem/>
                 <AreaButtons/>
            </ScrollView>

        </>
    )
}