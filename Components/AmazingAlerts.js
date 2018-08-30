import React, { Component } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modalbox';
import PropTypes from 'prop-types';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Styles from '../Styles/Styles';
import { SimpleAnimation } from 'react-native-simple-animations';

export default class AmazingAlerts extends Component {

  constructor(state) {
    super(state);
    this.state = {
      Tipo: 'aprobado',
      Titulo: 'Probando Titulo',
      Mensaje: 'Probando Mensaje Version Mejorada De Nuevo A Marcha Esto Sera Largo',
      Spinner: false,
      Mostrar: false,
      BotonCancelado: false,
      TextoBotonCancelado: 'Cancelar',
      TextoBotonConfirmado: 'OK',
      onBotonCancelado: () => { },
      onBotonConfirmado: () => { },
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
    this.state.onBotonCancelado();
    this.refs.Modal.close();
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ Mostrar: true });
    }, 2000);
  }

  onConfirmado = () => {
    this.state.onBotonConfirmado();
    this.refs.Modal.close();
  }

  render() {
    return (
      <Modal isOpen={this.state.Mostrar} style={Styles.Modal} position='center' ref='Modal' isDisabled={false} backdropPressToClose={false} swipeToClose={false}>
        <Grid style={Styles.Flex}>
          <Row size={2} style={Styles.Centrado}>
            <SimpleAnimation delay={500} duration={1500} direction='left' movementType='slide' staticType='bounce' style={Styles.Margen}>
              <Text style={Styles.TextoHeader}>{this.state.Titulo}</Text>
            </SimpleAnimation>
          </Row>
          <Col size={4} style={Styles.Centrado}>
            <Image source={this.Imagen} style={Styles.Imagen} resizeMode='contain' />
            <Row style={Styles.Centrado}>
              <SimpleAnimation delay={500} duration={1500} direction='left' movementType='slide' staticType='bounce' style={Styles.Margen}>
                <Text style={Styles.TextoMensaje}>{this.state.Mensaje}</Text>
              </SimpleAnimation>
            </Row>
          </Col>
          <Row size={1}>
            <TouchableOpacity onPress={this.onConfirmado.bind(this)} style={[Styles.Flex, Styles.BotonAzul]}>
              <Col size={1} style={[Styles.Centrado]} >
                <Text style={[Styles.TextoMensaje, Styles.Color]}>{this.state.TextoBotonConfirmado}</Text>
              </Col>
            </TouchableOpacity>
            {this.state.BotonCancelado ? (
              <TouchableOpacity onPress={this.onCancelar.bind(this)} style={[Styles.Flex, Styles.BotonRojo]}>
                <Col size={1} style={[Styles.Centrado]}>
                  <Text style={[Styles.TextoMensaje, Styles.Color]}>{this.state.TextoBotonCancelado}</Text>
                </Col>
              </TouchableOpacity>
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