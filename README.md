# react-native-increibles-alertas

#### Modulo para react native de increibles alertas de facil uso y muy agradables.

# Previsualización



# Ejemplos

```javascript
<Alertas 
  Tipo='error'
  Titulo='Error'
  Mensaje='Ha ocurrido un error vualva a intentar'
  Spinner={false}
  Mostrar
  BotonCancelado={false}
  TextoBotonCancelado='Cancelar'
  TextoBotonConfirmado='Ok'
  onBotonCancelado={() => {}}
  onBotonConfirmado={() => {}} />
 ```

# Instalación

#### `npm i -s react-native-increibles-alertas`

# Propiedades

#### Todas la propiedades son requeridas despues no funcionara debidamente.

| Prop| Tipo| Descripción|
| ----- | ---- | ---- |
| Tipo | String | Muestra el icono del alerta puede tomar valores de `aprobado`<br/>`info` `peligro` `error`|
| Titulo | String | Muestra el titulo de la alerta|
| Mensaje | String | Muestra el mensaje de la alerta|
| Spinner | Bool | Muestra o no un indicador de cargando|
| Mostrar | Bool | Muestra o no la alerta|
| BotonCancelado | Bool | Muestra o no el boton secundario|
| TextoBotonCancelado | String | Muestra un texto en el boton secundario|
| TextoBotonConfirmado | String | Muestra un texto en el boton primario|
| onBotonCancelado | Func | Función cuando se presiona el boton secundario|
| onBotonConfirmado | Func | Función cuando se presiona el boton primario|
