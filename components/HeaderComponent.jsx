import React, {useContext} from "react";
import {Appbar} from "react-native-paper";
import {Collections} from "../context/CollectionsContext";


export default function HeaderComponent({ navigation }){
    const { setCurrentCollection } = useContext(Collections)

    return (
        <Appbar.Header style={{justifyContent: 'space-evenly'}}>
            <Appbar.Action icon={"home"} onPress={() => {
                setCurrentCollection("")
                navigation.navigate("Gallery")
            }} />
            <Appbar.Action icon={"image-multiple"} onPress={() => {navigation.navigate("Collections")}} />
            <Appbar.Action icon={"logout"} onPress={() => {navigation.navigate("Lockscreen")}} />
        </Appbar.Header>
    )
}