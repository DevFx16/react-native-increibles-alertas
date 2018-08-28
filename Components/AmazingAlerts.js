import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import ModalBox from 'react-native-modalbox';
import PropTypes from 'prop-types';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Styles from '../Styles/Styles';

export default class AmazingAlerts extends Component {
  constructor(props) {
    super(props);
    this.props = {
      Tipo: 'aprobado',
      Titulo: 'Probando Titulo',
      Spinner: false,
      Mostrar: true,
      BotonCancelado: false,
      TextoBotonCancelado: '',
      TextoBotonConfirmado: 'OK',
      onBotonCancelado: this.onCancelar,
      onBotonConfirmado: this.onConfirmado,
    }
  }

  onCancelar = () => {

  }


  onConfirmado = () => {

  }

  render() {
    return (
      <Modal isOpen={this.props.Mostrar} style={Styles.Modal} position='center' ref='Modal' isDisabled={false} backdropPressToClose={false} swipeToClose={false}>
        <Grid style={Styles.Flex}>
          <Row size={1} style={Styles.Centrado}>
            <Text>{this.props.Titulo}</Text>
          </Row>
          <Row size={2}>
            <Row>
              <Text>{this.props.Titulo}</Text>
            </Row>
            <Row>
              {this.props.Spinner ? (
                <ActivityIndicator></ActivityIndicator>
              ) : (
                  null
                )}
            </Row>
          </Row>
          <Row size={1}>
            <Col size={1} style={Styles.Centrado}>
              <Button style={Styles.Flex}>
                <Text>{this.props.TextoBotonConfirmado}</Text>
              </Button>
            </Col>
            {this.props.BotonCancelado ? (
              <Col size={1} style={Styles.Centrado}>
                <Button style={Styles.Flex}>
                  <Text>{this.props.TextoBotonCancelado}</Text>
                </Button>
              </Col>
            ) : null}
          </Row>
        </Grid>
      </Modal>
    );
  }
}

AmazingAlerts.propTypes = {
  Tipo: PropTypes.string.isRequired,
  Titulo: PropTypes.string.isRequired,
  Spinner: PropTypes.bool.isRequired,
  Mostrar: PropTypes.bool.isRequired,
  BotonCancelado: PropTypes.bool.isRequired,
  TextoBotonCancelado: PropTypes.string.isRequired,
  TextoBotonConfirmado: PropTypes.string.isRequired,
  onBotonCancelado: PropTypes.func.isRequired,
  onBotonConfirmado: PropTypes.func.isRequired,
}