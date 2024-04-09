import React from "react";
import { View, Image, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function HeaderComponent(){
    return (
        <>
            <View style={css.divHeader}>
                <View>
                    <Pressable style={css.pressGaleria} onPress={() => navigation.navigate("#tela de galeria#")}>
                        <FontAwesomeIcon icon="fa-solid fa-house"/>
                    </Pressable>
                </View>
                <View>
                    <Pressable style={css.pressColecao} onPress={() => navigation.navigate("#tela de coleções#")}>
                        <FontAwesomeIcon icon="fa-solid fa-images"/>
                    </Pressable>
                </View>
                <View>
                    <Pressable style={css.pressLogout} onPress={() => navigation.navigate("#tela inicial - logout#")}>
                        <FontAwesomeIcon icon="fa-solid fa-right-from-bracket"/>
                    </Pressable>
                </View>
            </View>
        </>
    )
}