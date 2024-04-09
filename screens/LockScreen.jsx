import {View, Button, StyleSheet, Pressable} from "react-native";

import AutentUser from "../components/lockscreen/AutentUser";
import  {styles} from "../styles/style";


export default function LockScreen({ navigation }) {
    const verificarAutenticacao = async () => {
        await AutentUser(navigation);
    };

    return (
        <View style={styles.button}>
            <Pressable style={styles.buttonText} onPress={verificarAutenticacao} > Entrar</Pressable>
        </View>
    );
}
