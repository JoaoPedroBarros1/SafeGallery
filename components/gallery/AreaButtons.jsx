import React from "react";
import {View} from 'react-native';
import ButtonCamera from "./ButtonCamera";
import ButtonGaleria from "./ButtonGaleria";

export default function AreaButtons(){
    return (
        <>
            <View>
                <ButtonCamera></ButtonCamera>
                <ButtonGaleria></ButtonGaleria>
            </View>
        </>
    )
}