import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import Modal from 'react-native-modalbox';
import PropTypes from 'prop-types';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Styles from '../Styles/Styles';

export default class AmazingAlerts extends Component {
  constructor(state) {
    super(state);
    this.state = {
      Tipo: 'aprobado',
      Titulo: 'Probando Titulo',
      Mensaje: 'Probando Mensaje Version Mejorada',
      Spinner: true,
      Mostrar: true,
      BotonCancelado: true,
      TextoBotonCancelado: 'Cancelar',
      TextoBotonConfirmado: 'OK',
      onBotonCancelado: this.onCancelar,
      onBotonConfirmado: this.onConfirmado,
    };
  }

  onCancelar = () => {

  }


  onConfirmado = () => {

  }

  render() {
    return (
      <Modal isOpen={this.state.Mostrar} style={Styles.Modal} position='center' ref='Modal' isDisabled={false} backdropPressToClose={false} swipeToClose={false}>
        <Grid style={Styles.Flex}>
          <Row size={1} style={Styles.Centrado}>
            <Text style={Styles.TextoHeader}>{this.state.Titulo}</Text>
          </Row>
          <Col size={2} style={Styles.Centrado}>
            {this.state.Spinner ? (
              <Row style={Styles.Centrado}>
                <ActivityIndicator size='large' color='violet' />
              </Row>
            ) : (null)}
            <Row style={Styles.Centrado}>
              <Text style={Styles.TextoMensaje}>{this.state.Mensaje}</Text>
            </Row>
          </Col>
          <Row size={0.5}>
            <Col size={1}>
              <Button style={[Styles.Boton, Styles.Flex]} title={this.state.TextoBotonConfirmado} color='blue'/>
            </Col>
            {this.state.BotonCancelado ? (
              <Col size={1}>
                <Button style={[Styles.Boton, Styles.Flex]} title={this.state.TextoBotonCancelado} color='red'/>
              </Col>
            ) : null}
          </Row>
        </Grid>
      </Modal>
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