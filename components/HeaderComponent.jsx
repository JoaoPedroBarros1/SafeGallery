import React from "react";
import { View, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faHouse, faImages, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {Appbar} from "react-native-paper";


export default function HeaderComponent({ navigation }){
    return (
        <>
            <Appbar.Header>
                <Appbar.Action icon={"home"} onPress={() => {navigation.navigate("Gallery")}} />
                <Appbar.Action icon={"image-multiple"} onPress={() => {navigation.navigate("Collections")}} />
                <Appbar.Action icon={"logout"} onPress={() => {navigation.navigate("Lockscreen")}} />
            </Appbar.Header>
        </>

    )
}