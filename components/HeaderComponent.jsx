import React from "react";
import {Appbar} from "react-native-paper";


export default function HeaderComponent({ navigation }){
    return (
        <Appbar.Header style={{justifyContent: 'space-evenly'}}>
            <Appbar.Action icon={"home"} onPress={() => {navigation.navigate("Gallery", {collection:""})}} />
            <Appbar.Action icon={"image-multiple"} onPress={() => {navigation.navigate("Collections")}} />
            <Appbar.Action icon={"logout"} onPress={() => {navigation.navigate("Lockscreen")}} />
        </Appbar.Header>
    )
}