import useBasicInput from "../hooks/use-basic-input";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.trim());
const BasicForm = (props) => {
    const {
        value: enteredName,
        isValid: nameIsValid,
        valueChangeHandler: nameChangeHandler,
        valueBlurHandler: nameBlurHandler,
        hasError: nameInputHasError,
        resetValue: resetName

    } = useBasicInput(isNotEmpty);

    const {
        value: enteredLastName,
        isValid: lastNameIsValid,
        valueChangeHandler: lastNameChangeHandler,
        valueBlurHandler: lastNameBlurHandler,
        hasError: lastNameInputHasError,
        resetValue: resetLastName

    } = useBasicInput(isNotEmpty);

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        valueBlurHandler: emailBlurHandler,
        hasError: emailInputHasError,
        resetValue: resetEmail

    } = useBasicInput(isEmail);


    let formIsValid = false;

    if (nameIsValid && lastNameIsValid && emailIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        console.log('Submitted');
        console.log(enteredName, enteredLastName, enteredEmail);
        resetName();
        resetLastName();
        resetEmail();

    }

    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
    const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='control-group'>
                <div className={nameInputClasses}>
                    <label htmlFor='name'>First Name</label>
                    <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler}
                           value={enteredName}
                    />
                    {nameInputHasError && <p className='error-text'>Please, enter a valid name</p>}
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' id='lastName' onChange={lastNameChangeHandler}
                           onBlur={lastNameBlurHandler} value={enteredLastName}
                    />
                    {lastNameInputHasError && <p className='error-text'>Please, enter a valid Last name</p>}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>E-Mail Address</label>
                <input type='email' id='email'
                       value={enteredEmail}
                       onChange={emailChangeHandler}
                       onBlur={emailBlurHandler}
                />
                {emailInputHasError && <p className='error-text'>Please, enter a valid email</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;