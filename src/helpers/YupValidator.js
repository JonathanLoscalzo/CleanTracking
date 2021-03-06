import { set } from 'lodash';

/**
 * @property {Array} fieldsArray indica si hay campos que son fieldArray 
 */
const Validator = (schema, fieldsArray) => values => {
    const formErrors = {};
    try {
        schema.validateSync(values, { abortEarly: false });
    } catch (errors) {
        errors.inner.forEach((error) => {
            if (fieldsArray && fieldsArray.includes(error.path)) {
                set(formErrors, error.path, { _error: error.message })
            } else {
                set(formErrors, error.path, error.message);
            }
        });
    }
    return formErrors;
}

export default Validator;