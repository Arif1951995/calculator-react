import React from 'react';
import './Button.css'


const Button = props => {
        return (
            <div
            onClick={props.handleClick}
            className={`${props.children === 'Clear' ? "clear" : !isNaN(props.children)  ? 'opretor' : null } btn-wrapper`}
            
            >
            {props.children}
            </div>
        );
}

export default Button