import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Button, Image } from 'react-native';
import Modal from 'react-native-modalbox';
import PropTypes from 'prop-types';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Styles from '../Styles/Styles';
import { SimpleAnimation } from 'react-native-simple-animations';

export default class AmazingAlerts extends Component {

  constructor(state) {
    super(state);
    this.state = {
      Tipo: 'peligro',
      Titulo: 'Probando Titulo',
      Mensaje: 'Probando Mensaje Version Mejorada De Nuevo A Marcha Esto Sera Largo',
      Spinner: false,
      Mostrar: false,
      BotonCancelado: true,
      TextoBotonCancelado: 'Cancelar',
      TextoBotonConfirmado: 'OK',
      onBotonCancelado: this.onCancelar,
      onBotonConfirmado: this.onConfirmado,
    };
    if (this.state.Spinner) {
      this.Imagen = require('../assets/Spinner.gif');
    } else {
      if (this.state.Tipo == 'aprobado') {
        this.Imagen = require('../assets/Aprobado.png');
      } else if (this.state.Tipo == 'error') {
        this.Imagen = require('../assets/Error.png');
      } else if (this.state.Tipo == 'info') {
        this.Imagen = require('../assets/Info.png');
      } else {
        this.Imagen = require('../assets/Peligro.png');
      }
    }
  }

  onCancelar = () => {
    console.log("Hola")
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ Mostrar: true });
    }, 2000);
  }

  onConfirmado = () => {
    console.log("Hola")
  }

  render() {
    return (
      <Modal isOpen={this.state.Mostrar} style={Styles.Modal} position='center' ref='Modal' isDisabled={false} backdropPressToClose={false} swipeToClose={false}>
        <Grid style={Styles.Flex}>
          <Row size={2} style={Styles.Centrado}>
            <SimpleAnimation delay={500} duration={1000} direction='left' movementType='slide' staticType='bounce' style={Styles.Margen}>
              <Text style={Styles.TextoHeader}>{this.state.Titulo}</Text>
            </SimpleAnimation>
          </Row>
          <Col size={4} style={Styles.Centrado}>
            <Image source={this.Imagen} style={Styles.Imagen} resizeMode='contain' />
            <Row style={Styles.Centrado}>
              <SimpleAnimation delay={500} duration={1000} direction='left' movementType='slide' staticType='bounce' style={Styles.Margen}>
                <Text style={Styles.TextoMensaje}>{this.state.Mensaje}</Text>
              </SimpleAnimation>
            </Row>
          </Col>
          <Row size={1}>
            <Col size={1} style={[Styles.BotonAzul, Styles.Centrado]} onPress={this.onConfirmado.bind(this)}>
              <Text style={[Styles.TextoMensaje, Styles.Color]}>{this.state.TextoBotonConfirmado}</Text>
            </Col>
            {this.state.BotonCancelado ? (
              <Col size={1} style={[Styles.BotonRojo, Styles.Centrado]} onPress={this.onCancelar.bind(this)}>
                <Text style={[Styles.TextoMensaje, Styles.Color]}>{this.state.TextoBotonCancelado}</Text>
              </Col>
            ) : null}
          </Row>
        </Grid>
      </Modal >
    );
  }
}

/*AmazingAlerts.propTypes = {
  Tipo: PropTypes.string.isRequired,
  Titulo: PropTypes.string.isRequired,
  Spinner: PropTypes.bool.isRequired,
  Mostrar: PropTypes.bool.isRequired,
  BotonCancelado: PropTypes.bool.isRequired,
  TextoBotonCancelado: PropTypes.string.isRequired,
  TextoBotonConfirmado: PropTypes.string.isRequired,
  onBotonCancelado: PropTypes.func.isRequired,
  onBotonConfirmado: PropTypes.func.isRequired,
  } */