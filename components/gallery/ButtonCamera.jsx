import * as ImagePicker from "expo-image-picker";

async function pickImageCamera() {
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
        return result.assets[0].uri
    }
}

export default pickImageCamera