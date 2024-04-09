import React from 'react';

export default function (){
    const autentificar = async () => {
        const biometriaSuportada = await checarBiometria();

        if (biometriaSuportada) {
            const {sucesso, erro} = await Autenticacao.authenticateAsync({
                promptMessage: "Autentique-se",
                cancelLabel: "Cancelar",
                fallbackLabel: "Use senha",
            });


        }

    }
}