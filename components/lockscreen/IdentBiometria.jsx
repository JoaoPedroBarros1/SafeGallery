import React from 'react';

export default  function IdentBiometria(){

    const checarBiometria = async () => {
        const hasHardware = await Autenticacao.hasHardwareAsync();
        const isEnrolled = await Autenticacao.isEnrolledAsync();

        if (!hasHardware) {
            alert ('Dispositivo não possui biometria, compra oto ai irmão.')
            return false;
        }

        if (!isEnrolled){
            alert('Biometria não está configurada no dispositivo.')
        }

        return true;
    }









}