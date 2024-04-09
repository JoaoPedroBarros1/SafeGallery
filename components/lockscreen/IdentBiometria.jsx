import React from 'react';
import * as LocalAuthentication from 'expo-local-authentication';

export default async function IdentBiometria(){

        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        const isEnrolled = await LocalAuthentication.isEnrolledAsync();

        if (!hasHardware) {
            alert ('Dispositivo não possui biometria, compra oto ai irmão.')
            return false;
        }

        if (!isEnrolled){
            alert('Biometria não está configurada no dispositivo.')
            return false;
        }

        return true;
}