import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: "blue",
        padding: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 150
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
    },
    logo: {
        width: 350,
        height: 100,
        marginBottom: 20,
        margin: 20,
        marginLeft: 40,
    },
    fab: {
        position: 'absolute',
        bottom: 15,
        right: 15
    }
});
