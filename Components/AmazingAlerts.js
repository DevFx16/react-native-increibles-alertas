import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ModalBox from 'react-native-modalbox';
import PropTypes from 'prop-types';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Styles from '../Styles/Styles';

export default class AmazingAlerts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal style={Styles.Modal} position='center' ref='Modal' isDisabled={false} backdropPressToClose={false} swipeToClose={false}>
        <Grid style={Styles.Flex}>

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