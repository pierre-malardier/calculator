function GreatOperationButton(props) {

    return <button className="operationButtons" onClick={props.HandleClick} value={props.label}>{props.label}</button>
}

export default GreatOperationButton;