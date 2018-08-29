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
    BotonAzul: {
        backgroundColor: 'blue'
    },
    BotonRojo: {
        backgroundColor: 'red'
    },
    TextoHeader: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center'
    },
    TextoMensaje: {
        fontSize: 16,
        textAlign: 'center'
    },
    Imagen: {
        width: '50%',
        height: '50%'
    },
    Margen: {
        margin: 5,
    },
    Color: {
        color: 'white'
    }
});