import '../css/AmazingNumber.css';

function AmazingNumberButton() {
    return (
        <table cellSpacing="3" cellPadding="3" class="number">
            <tr>
                <button class="button"><td>7</td></button>
                <button class="button"><td>8</td></button>
                <button class="button"><td>9</td></button>
            </tr>
            <tr>
                <button class="button"><td>4</td></button>
                <button class="button"><td>5</td ></button>
                <button class="button"><td>6</td></button>
            </tr>
            <tr>
                <button class="button"><td>1</td></button>
                <button class="button"><td>2</td></button>
                <button class="button"><td>3</td></button>
            </tr>
            <tr>
                <button class="button-hidden"><td>0</td></button>
                <button class="button-0"><td>0</td></button>
                <button class="button-hidden"><td>0</td></button>
            </tr>
        </table>
    );
}
export default AmazingNumberButton;