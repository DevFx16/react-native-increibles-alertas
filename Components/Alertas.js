import React, { Component } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modalbox';
import PropTypes from 'prop-types';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Styles from '../Styles/Styles';
import { SimpleAnimation } from 'react-native-simple-animations';

export default class Alertas extends Component {

  constructor(props) {
    super(props);
  }

  CambiarImagen() {
    if (this.props.Tipo == 'aprobado') {
      this.Imagen = require('../assets/Aprobado.png');
    } else if (this.props.Tipo == 'error') {
      this.Imagen = require('../assets/Error.png');
    } else if (this.props.Tipo == 'info') {
      this.Imagen = require('../assets/Info.png');
    } else {
      this.Imagen = require('../assets/Peligro.png');
    }
  }

  componentDidMount() {
    this.CambiarImagen();
  }

  componentDidUpdate() {
    this.CambiarImagen();
    this.props.Mostrar ? this.refs.Modal.open() : this.refs.Modal.close();
  }

  componentWillReceiveProps(props) {
    this.props = props;
    this.CambiarImagen();
  }

  onConfirmado = () => {
    this.props.onBotonConfirmado();
    this.refs.Modal.close();
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
          <Row size={1}>
            <TouchableOpacity onPress={this.onConfirmado.bind(this)} style={[Styles.Flex, Styles.BotonAzul]}>
              <Col size={1} style={[Styles.Centrado]} >
                <Text style={[Styles.TextoMensaje, Styles.Color]}>{this.props.TextoBotonConfirmado}</Text>
              </Col>
            </TouchableOpacity>
          </Row>
        </Grid>
      </Modal >
    );
  }
}

Alertas.propTypes = {
  Tipo: PropTypes.string.isRequired,
  Titulo: PropTypes.string.isRequired,
  Mensaje: PropTypes.string.isRequired,
  Mostrar: PropTypes.bool.isRequired,
  TextoBotonConfirmado: PropTypes.string.isRequired,
  onBotonConfirmado: PropTypes.func.isRequired,
}
