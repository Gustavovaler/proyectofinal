import React from 'react';
import ReactDOM from 'react-dom';
//importamos estilos y JS bootstrap dentro de nuestro proyecto
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
//importamos el archivo index.css dentro de nuestro proyecto
import './assets/css/index.css'
import App from './App'
import {Provider} from "react-redux"
import store from './store'


//renderiza la app
ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>

  ,document.getElementById('root')
);

