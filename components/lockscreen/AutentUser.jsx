import React from 'react';
import {Vibration, Alert} from 'react-native';
import checarBiometria from './IdentBiometria'
import * as LocalAuthentication from 'expo-local-authentication';

export default async function AutentUser(navigation) {

    const biometriaSuportada = await checarBiometria();

        if (biometriaSuportada) {
            const {  success  } = await LocalAuthentication.authenticateAsync({
                promptMessage: "Autentique-se",
                cancelLabel: "Cancelar",
                fallbackLabel: "Use senha",
            });
            if (success) {
                navigation.navigate("Gallery")
            } else {
                Vibration.vibrate([1000, 500, 1000]);

                Alert.alert(
                    "Erro na autenticação",
                    "Sua biometria não foi aceita.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }
        }

}