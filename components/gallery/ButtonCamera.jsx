import React from "react";
import {Button, Image, View} from 'react-native';
import * as ImagePicker from "expo-image-picker";

async function pickImageCamera(setImageUri) {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
        alert('Desculpe, mas precisavamos dessa permissão para aplicar essa funcionalidade.');
        return;
    }
    const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [3, 2],
        quality: 1,
    });
    if (!result.canceled) {
        console.log(result.assets[0].uri);
        setImageUri(result.assets[0].uri)
    }
}
export default function ButtonCamera(){
    const [imageUri, setImageUri] = React.useState(null);
    return (
        <>
            <Button title={"Tirar foto agora"} onPress={() => pickImageCamera(setImageUri)}>
                Tirar foto agora</Button>

            <View>
                {imageUri && <Image source={{ uri: imageUri }} style={{ width: 100, height: 100 }} />}
            </View>
        </>
    )
}