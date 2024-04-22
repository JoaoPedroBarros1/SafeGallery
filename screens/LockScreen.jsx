import React from "react";
import { SafeAreaView, Pressable, Text, View, Image } from "react-native";
import {FAB, Portal} from "react-native-paper";
import AutentUser from "../components/lockscreen/AutentUser";
import { styles } from "../styles/style";

export default function LockScreen({ navigation }) {
    const verificarAutenticacao = async () => {
        await AutentUser(navigation);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../assets/Logo.png')}
                style={styles.logo}
            />
            <Pressable style={styles.button} onPress={verificarAutenticacao}>
                <Text style={styles.buttonText}>Entrar</Text>
            </Pressable>
            <FAB
                icon="location-enter"
                style={styles.fab}
                onPress={() => {navigation.navigate("Collections")}}
            />
        </SafeAreaView>
    );
}
