import {SafeAreaView, Pressable, Text} from "react-native";

import AutentUser from "../components/lockscreen/AutentUser";
import {styles} from "../styles/style";


export default function LockScreen({ navigation }) {
    const verificarAutenticacao = async () => {
        await AutentUser(navigation);
    };

    return (
        <SafeAreaView style={styles.button}>
            <Pressable onPress={verificarAutenticacao}>
                <Text style={styles.buttonText}>Entrar</Text>
            </Pressable>
        </SafeAreaView>
    );
}
