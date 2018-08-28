import { StyleSheet, Dimensions } from 'react-native';

export default Styles = StyleSheet.create({
    Modal: {
        width: Dimensions.get('window').width - 60,
        height: 160
    },
    Flex: {
        flex: 1
    },
    Centrado: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});