import React from "react";
import { View, Text} from 'react-native';
import CardImagem from "./CardImagem";

export default function ContainerImages(){
    return (
        <>
            <View>
                <View>
                    <Text>Galeria Segura de Imagens</Text>
                </View>
                <CardImagem></CardImagem>
            </View>

        </>
    )
}