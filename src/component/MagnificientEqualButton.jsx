import '../css/MagnificientEqualButton.css';

function MagnificientEqualButton(props) {

    return <button className="equalButton" onClick={props.HandleClick} value={props.label}>{props.label}</button>
}

export default MagnificientEqualButton;