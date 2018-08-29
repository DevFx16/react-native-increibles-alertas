import { StyleSheet, Dimensions } from 'react-native';

export default Styles = StyleSheet.create({
    Modal: {
        width: Dimensions.get('window').width - 200,
        height: 230,
        borderRadius: 20,
    },
    Flex: {
        flex: 1
    },
    Centrado: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    Boton: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: 150
    },
    TextoHeader: {
        fontWeight: 'bold',
        fontSize: 24
    },
    TextoMensaje: {
        fontSize: 20
    }
});