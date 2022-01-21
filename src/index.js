import React from "react";
import ReactDOM from "react-dom";
import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import './index.css';

const divRoot = document.querySelector('#app');

//<PrimeraApp saludo= "Hola Soy Goku" />

ReactDOM.render(<CounterApp value ={10}/>, divRoot);