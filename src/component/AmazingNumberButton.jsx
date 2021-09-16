
import { useState } from 'react/cjs/react.development';
import '../css/Calculator.css';

function AmazingNumberButton(props) {

    return <button className="buttons" onClick={props.HandleClick} value={props.label}>{props.label}</button>
}

export default AmazingNumberButton;