import React from 'react';
import './form-input.styles.scss';
// making a separate component for reusability in case we need another form to style.
const FormInput = ({ handleChange, label, ...otherProps }) => {
    return(
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps}/>
            {label ? (
            <label 
            className={`${
                otherProps.value.length ? 'shrink' : ''
                } form-input-label`}
                >
                    {label}
                </label>)
                : null
            }
        </div>
    )
}

export default FormInput