import BeautifulScreen from "./BeautifulScreen";
import AmazingNumberButton from "./AmazingNumberButton";
import GreatOperationButton from "./GreatOperationButton";
import MangnificientEqualButton from "./MagnificientEqualButton";
import TheTitle from "./TheTitle";
import '../css/Calculator.css'
import { useState } from "react/cjs/react.development";

function Calculator() {

    const [result, setResult] = useState('');
    function HandleClick(e) {
        e.preventDefault();
        const number = e.target.value;
        setResult(number);

        switch (number) {
            case '=':
                let answer = eval(result);
                if (answer >= 9000) {
                    return setResult("It's over 9000")
                } else {
                    return setResult(eval(result));
                }
            case 'C':
                return setResult('')
            default:
                return setResult(result + number);
        }
    }
    return (
        <section className="calculator">
            <TheTitle label="Calculator 9000" />
            <BeautifulScreen result={result} />
            <div className="buttons">
                <div>
                    <AmazingNumberButton HandleClick={HandleClick} label="7" />
                    <AmazingNumberButton HandleClick={HandleClick} label="8" />
                    <AmazingNumberButton HandleClick={HandleClick} label="9" />
                </div>
                <div>
                    <AmazingNumberButton HandleClick={HandleClick} label="4" />
                    <AmazingNumberButton HandleClick={HandleClick} label="5" />
                    <AmazingNumberButton HandleClick={HandleClick} label="6" />
                </div>
                <div>
                    <AmazingNumberButton HandleClick={HandleClick} label="1" />
                    <AmazingNumberButton HandleClick={HandleClick} label="2" />
                    <AmazingNumberButton HandleClick={HandleClick} label="3" />
                </div>
                <div>
                    <AmazingNumberButton HandleClick={HandleClick} label="0" />
                    <AmazingNumberButton HandleClick={HandleClick} label='C' />
                </div>
                <div>
                    <GreatOperationButton HandleClick={HandleClick} label="+" />
                    <GreatOperationButton HandleClick={HandleClick} label="-" />
                    <GreatOperationButton HandleClick={HandleClick} label="/" />
                    <GreatOperationButton HandleClick={HandleClick} label="*" />
                </div>
                <div>

                    <MangnificientEqualButton HandleClick={HandleClick} label="=" />
                </div>
            </div>
        </section>
    );
}

export default Calculator;