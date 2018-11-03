import React from 'react';
import {
    Input
} from 'reactstrap';

const mapToChildren = (options) => options.map((x, i) => <option key={i} {...x}>{x.label}</option>)

const renderField = (props) => {
    const { input, label, options, meta: { touched, error } } = props;
    return (
        <div className={`form-group ${touched && ((error ? 'has-error' : 'has-success'))}`}>
            <label className="control-label" htmlFor={input.name}>{label}</label>
            <div>
                <div >
                    <Input valid={touched && !error} invalid={touched && error ? true : false} {...input} {...props} children={mapToChildren(options)} />
                </div>
                {touched
                    && ((error
                        && <small className="text-danger">{error}</small>
                    ))}
            </div>
        </div>
    )
}

export default renderField;