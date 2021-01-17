import React from 'react';

import { ButtonStld } from '../../../styles.js';


const button = (props) => (
<ButtonStld type={props.type}
    disabled={props.disabled}
    onClick={props.clicked}>
        {props.children}
</ButtonStld>
);

export default button;