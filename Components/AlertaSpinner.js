import React, { Component } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modalbox';
import PropTypes from 'prop-types';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Styles from '../Styles/Styles';
import { SimpleAnimation } from 'react-native-simple-animations';

export default class AlertaSpinner extends Component {

    constructor(props) {
        super(props);
        this.Imagen = require('../assets/Spinner.gif');
    }

    componentDidUpdate() {
        this.props.Mostrar ? this.refs.Modal.open() : this.refs.Modal.close();
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    render() {
        return (
            <Modal isOpen={this.props.Mostrar} style={Styles.Modal} position='center' ref='Modal' isDisabled={false} backdropPressToClose={false} swipeToClose={false}>
                <Grid style={Styles.Flex}>
                    <Row size={2} style={Styles.Centrado}>
                        <SimpleAnimation delay={500} duration={1500} direction='left' movementType='slide' staticType='bounce' style={Styles.Margen}>
                            <Text style={Styles.TextoHeader}>{this.props.Titulo}</Text>
                        </SimpleAnimation>
                    </Row>
                    <Col size={4} style={Styles.Centrado}>
                        <Image source={this.Imagen} style={Styles.Imagen} resizeMode='contain' />
                        <Row style={Styles.Centrado}>
                            <SimpleAnimation delay={500} duration={1500} direction='left' movementType='slide' staticType='bounce' style={Styles.Margen}>
                                <Text style={Styles.TextoMensaje}>{this.props.Mensaje}</Text>
                            </SimpleAnimation>
                        </Row>
                    </Col>
                </Grid>
            </Modal >
        );
    }

}

AlertaSpinner.propTypes = {
    Titulo: PropTypes.string.isRequired,
    Mensaje: PropTypes.string.isRequired,
    Mostrar: PropTypes.bool.isRequired,
}