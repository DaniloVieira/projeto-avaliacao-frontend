import React from 'react';

import { InputStl } from '../../../styles.js'


const input = (props) => {
    let inputElement = null;
    //const inputClasses = [classes.Input];
    // if(props.invalid && props.shouldValidate && props.touched){
    //     inputClasses.push(classes.Invalid);
    // }
    switch (props.elementType) {
        case ('input'):
            inputElement = <InputStl onChange={props.change}  {...props.elementConfig} value={props.value}/>;
            break;
        case ('textarea'):
            inputElement = <textarea onChange={props.change}  {...props.elementConfig} value={props.value}/>;
            break;
        case ('select'):
            inputElement = ( 
                <select onChange={props.change}  {...props.elementConfig} value={props.value}>
                    {props.elementConfig.options.map(opt =>( 
                        <option key={opt.value} value={opt.value}>{opt.displayValue}</option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input onChange={props.change}  {...props.elementConfig} value={props.value}/>;
            break;
    }
    return (
        <div>
            <label >{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;