import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    listButton: {
        flex: 1,
        aspectRatio: 1,
        maxWidth: '50%',
        position: 'relative'
    },

    cardSize: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 30,
        position: 'absolute',
        left: 0,
        top: 0
    },

    cardText: {
        position: 'absolute',
        left: '50%',
        bottom: 10,
        transform: [{translateX: '-50%'}],
        color: '#eee',
        fontSize: 25
    }
});
