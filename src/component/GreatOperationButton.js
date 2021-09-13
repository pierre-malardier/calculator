import '../css/AmazingOperation.css';

function GreatOperationButton() {
    const operations = ['+', '-', '/', '*'];
    const listOperations = operations.map((operation) =>
        <button class="operationButton" onclick={GreatOperationButton}>{operation}</button>

    );
    return (listOperations);
}

export default GreatOperationButton;