import React, {useContext, useState} from "react";
import {FAB, Portal} from "react-native-paper";


import {Collections} from "../../context/CollectionsContext";
import * as ImagePicker from "expo-image-picker";

export default function AreaButtons() {
    const { currentCollection, addImage } = useContext(Collections)
    const [state, setState] = useState({open: false})

    const onStateChange = ({open}) => setState({open})

    const {open} = state


    async function pickImageGaleria() {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Desculpe, mas precisavamos dessa permissão para aplicar essa funcionalidade.');
            return
        }
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 2],
            quality: 1,
        });
        if (!result.canceled) {
            alert("Da galeria")
            addImage(currentCollection, result.assets[0].uri)
        }
    }


    async function pickImageCamera() {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Desculpe, mas precisavamos dessa permissão para aplicar essa funcionalidade.');
            return
        }
        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [3, 2],
            quality: 1,
        });
        if (!result.canceled) {
            alert("Printing")
            addImage(currentCollection, result.assets[0].uri)
        }
    }

    return (
        <Portal>
            <FAB.Group
                actions={[
                    {
                        icon: 'camera',
                        label: 'Tirar foto',
                        onPress: pickImageCamera
                    },
                    {
                        icon: 'image-multiple',
                        label: 'Ad. da galeria',
                        onPress: pickImageGaleria
                    }
                ]}
                icon={open ? 'close' : 'plus'}
                open={open}
                onStateChange={onStateChange}
                visible={true}
            />
        </Portal>
    )
}