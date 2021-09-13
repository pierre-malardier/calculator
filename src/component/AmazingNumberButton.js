import '../css/AmazingNumber.css';

function AmazingNumberButton() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const listNumbers = numbers.map((number) =>
        <button class="numberButton" onClick={AmazingNumberButton}>{number}</button>
    );
    return (listNumbers);
}
export default AmazingNumberButton;