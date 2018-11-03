import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormGroup } from 'reactstrap';

import Validator from '../../../../helpers/YupValidator'
import schema from '../../schema'
import RenderField from '../../../common/inputs/RenderField';
import './Login.css'
import image from './avatar_2x.png'

class CreateForm extends React.Component {
    errorMessage() {
        if (this.props.errorMessage) {
            return (
                <div className="text-danger">
                    {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        const { handleSubmit, submitting } = this.props;
        return (
            <div>
                <form className="form-signin" onSubmit={handleSubmit}>
                    <FormGroup>
                        <Field
                            name="username"
                            label="Nombre de usuario"
                            component={RenderField}
                            type="text" />
                    </FormGroup>
                    <FormGroup>
                        <Field
                            name="password"
                            label="Contraseña"
                            component={RenderField}
                            type="password" />
                    </FormGroup>
                    <button type="submit" disabled={submitting} className="btn btn-primary">Sign In</button>
                </form>
                {this.errorMessage()}
            </div>)
    }
}

const Create = (props) => (
    <div className="container">
        <div className="card card-container">
            <img alt="login" id="profile-img" className="profile-img-card" src={image} />
            <p id="profile-name" className="profile-name-card"></p>
            <CreateForm {...props} />
        </div>
    </div>
)


export default reduxForm({
    form: 'auth/login',  // a unique identifier for this form
    validate: Validator(schema)
})(Create)