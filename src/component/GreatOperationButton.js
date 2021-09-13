import '../css/AmazingOperation.css';

function GreatOperationButton() {
    return (
        <table class="tableOperation">
            <tr>
                <button class="operationButton"><td>+</td></button>
                <button class="operationButton"><td>-</td></button>
                <button class="operationButton"><td>/</td></button>
                <button class="operationButton"><td>*</td></button>
            </tr>
        </table>
    );
}

export default GreatOperationButton;