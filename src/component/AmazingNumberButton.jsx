function AmazingNumberButton(props) {

    return <button className="buttons" onClick={props.HandleClick} value={props.label}>{props.label}</button>
}

export default AmazingNumberButton;