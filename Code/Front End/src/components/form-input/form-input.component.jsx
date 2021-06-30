import React from 'react';

import './form-input.styles.scss'

const FormInput = ({...otherProps}) => (
    <div className="group">
        <input className='form-input' {...otherProps}/>
    </div>
)

export default FormInput;