# react-native-increibles-alertas

#### Modulo para react native de increibles alertas de facil uso y muy agradables.

# Previsualización

![](https://media.giphy.com/media/8xlxkPtq27l6pzHzUp/giphy.gif)


# Ejemplos

```javascript
 import {AlertaConfirmModule, AlertasModule, AlertaSpinnerModule} from 'react-native-increibles-alertas';
 ```
```javascript
 <AlertasModule
  Tipo='aprobado'
  Titulo='Correcto'
  Mensaje='Se ha hecho todo satisfactorio'
  Mostrar
  TextoBotonConfirmado='Ok'
  onBotonConfirmado={() => {}}
/>
 ```
 
 ```javascript
<AlertaConfirmModule
  Titulo='Proceda'
  Mensaje='¿Quiere continuar?'
  Mostrar
  TextoBotonConfirmado='Ok'
  TextoBotonCancelado='Cancelar'
  onBotonConfirmado={() => {}}
  onBotonCancelado={() => {}}
/>
 ```
 
  ```javascript
<AlertaSpinnerModule
  Titulo='Cargando'
  Mensaje='Espere un momento'
  Mostrar
/>
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
| TextoBotonCancelado | String | Muestra un texto en el boton secundario|
| TextoBotonConfirmado | String | Muestra un texto en el boton primario|
| onBotonCancelado | Func | Función cuando se presiona el boton secundario|
| onBotonConfirmado | Func | Función cuando se presiona el boton primario|
