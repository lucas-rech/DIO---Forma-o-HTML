import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonContainer: {
        marginTop: 40,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
    },

    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#E5BF3C'
    },

    buttonPressable: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 45,
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: 'black',
        elevation: 3
    },

    copyMessage: {
        width: 220,
        position: 'absolute',
        top: 300,
        backgroundColor: 'gray',
        fontSize: 15,
        padding: 5,
        borderRadius: 5,
        opacity: 0.7,
        color: '#ffffff',
        textAlign: 'center'
    }
});