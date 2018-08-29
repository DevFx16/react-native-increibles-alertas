import { StyleSheet, Dimensions } from 'react-native';

export default Styles = StyleSheet.create({
    Modal: {
        width: Dimensions.get('window').width - 130,
        height: 280,
    },
    Flex: {
        flex: 1
    },
    Centrado: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    Boton: {
        height: 250
    },
    TextoHeader: {
        fontWeight: 'bold',
        fontSize: 24
    },
    TextoMensaje: {
        fontSize: 16
    },
    Imagen: {
        width: '50%',
        height: '50%'
    }
});