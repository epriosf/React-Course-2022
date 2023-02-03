import {useState} from "react";

const useBasicInput = (validationValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const enteredValueIsValid = validationValue(enteredValue);
    const hasError = !enteredValueIsValid && isTouched;


    const inputValueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }
    const inputValueBlurHandler = () => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }
    return {
        value: enteredValue,
        isValid: enteredValueIsValid,
        valueChangeHandler: inputValueChangeHandler,
        valueBlurHandler: inputValueBlurHandler,
        hasError,
        resetValue: reset

    }


}
export default useBasicInput;