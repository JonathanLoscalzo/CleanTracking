import React from 'react'
import {
    Input
} from 'reactstrap'

const renderField = (props) => {
    const { input, label, type, meta: { touched, error } } = props
    return (
        <div className={`form-group ${touched && ((error ? 'has-error' : 'has-success'))}`}>
            <label className="control-label" htmlFor={input.name}>{label}</label>
            <div>
                <Input
                    valid={touched && !error}
                    invalid={touched && error ? true : false}
                    {...input}
                    placeholder={label}
                    type={type}
                    className="form-control" />

                {touched
                    && ((error
                        && <small className="text-danger">{error}</small>
                    ))}
            </div>
        </div >
    )
}

export default renderField;