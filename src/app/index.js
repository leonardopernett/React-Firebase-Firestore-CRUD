import '@babel/polyfill'
import React from 'react';
import DOMRender from 'react-dom'
import './firebase'
import App from './app'
import 'bootswatch/dist/superhero/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';

DOMRender.render(<App />, document.getElementById('root'))  