import BeautifulScreen from "./BeautifulScreen";
import AmazingNumberButton from "./AmazingNumberButton";
import GreatOperationButton from "./GreatOperationButton";
import MangnificientEqualButton from "./MagnificientEqualButton";
import TheTitle from "./TheTitle";
import '../css/Calculator.css'

function Calculator() {
    return (
        <section class="calculator">
            <TheTitle />
            <BeautifulScreen />
            <AmazingNumberButton />
            <GreatOperationButton />
            <MangnificientEqualButton />

        </section>
    );
}

export default Calculator;