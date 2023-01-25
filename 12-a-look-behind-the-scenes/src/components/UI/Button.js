import classes from './Button.module.css';
import React from "react";
const Button = (props) => {
    console.log('Button is running...');
    return (
        <button
            type={props.type || 'button'}
            className={`${classes.button} ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default React.memo(Button);