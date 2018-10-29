import React, { Fragment } from 'react'
import { FieldArray, Field } from 'redux-form';
import { Alert } from 'reactstrap'

import { FaTrash, FaPlusCircle } from 'react-icons/fa'
import FormToolbar from './FormToolbar';

import renderField from '../../common/inputs/RenderField'
import selectable from '../../common/inputs/Selectable'
import { Body, Wrapper, Header } from '../../common/page'

const products = [
    { value: '-1', label: '- Elija una opción - ' },
    { value: 'Desodorante para piso', label: 'Desodorante para piso' },
    { value: 'Lavandina', label: 'Lavandina' },
    { value: 'Cif Crema', label: 'Cif Crema' },
    { value: 'Bolsas negras (80 x 110)', label: 'Bolsas negras (80 x 110)' },
    { value: 'Bolsas negras (60 x 45)', label: 'Bolsas negras (60 x 45)' },
    { value: 'Bolsas negras (60 x 90)', label: 'Bolsas negras (60 x 90)' },
    { value: 'Bolsas verdes', label: 'Bolsas verdes' },
    { value: 'Jabon liquido para manos', label: 'Jabon liquido para manos' },
    { value: 'Detergente', label: 'Detergente' },
    { value: 'Esponja', label: 'Esponja' },
    { value: 'Desodorante de ambiente', label: 'Desodorante de ambiente' },
    { value: 'Insectisida', label: 'Insectisida' },
    { value: 'Blem (lustra muebles)', label: 'Blem (lustra muebles)' },
    { value: 'Limpia vidrios', label: 'Limpia vidrios' },
    { value: 'Perfumina', label: 'Perfumina' },
    { value: 'Secador', label: 'Secador' },
    { value: 'Escobillon', label: 'Escobillon' },
    { value: 'Glade Toque', label: 'Glade Toque' },
    { value: 'Plumero', label: 'Plumero' },
    { value: 'Cebo Cucarachas', label: 'Cebo Cucarachas' },
    { value: 'Repuesto difusor (lavanda)', label: 'Repuesto difusor (lavanda)' },
]
export default props => {
    const { handleSubmit, title } = props
    return (
        <Wrapper>
            <Header title={title} />
            <Body >
                <form onSubmit={handleSubmit}>
                    <FieldArray
                        name="products"
                        component={renderMembers} />
                    <FormToolbar {...props} />
                </form>
            </Body>
        </Wrapper>
    )
}

const ErrorHeader = ({ touched, submitFailed, error }) => {
    return (
        <Fragment>
            {(touched || submitFailed) && error &&
                <div className="form-row">
                    <div className="col-12">
                        <Alert color="danger">
                            <span>{error}</span>
                        </Alert>
                    </div>
                </div>}
        </Fragment>
    )
}

const AgregarProducto = ({ fields }) => {
    return (
        <div className="form-row mb-3 mt-1">
            <div className="col-12">
                <button type="button"
                    className="btn btn-lg btn-info"
                    onClick={() => {
                        fields.push({})
                    }}>
                    <FaPlusCircle /> Agregar Producto
                </button>
            </div>
        </div>)
}

class InputsForm extends React.Component {
    render() {
        const { fields } = this.props;

        return (
            <Fragment>
                {
                    fields.map((member, index) => <InputRow key={index} member={member} index={index} fields={fields} />)
                }
            </Fragment>)
    }
}

const InputRow = ({ member, index, fields }) => (
    <div className="form-row" key={index}>
        <div className="col-8">
            <Field
                name={`${member}.name`}
                type="select"
                component={selectable}
                label={`Producto ${index + 1}`} options={products} />
        </div>
        <div className="col-3">
            <Field
                name={`${member}.count`}
                type="text"
                component={renderField}
                label={`Cantidad`} />
        </div>
        <div className="col-1 d-flex align-items-center">
            <button
                type="button"
                className="btn btn-outline-danger"
                title="Remove Member"
                onClick={() => fields.remove(index)}>
                <FaTrash />
            </button>
        </div>
    </div>
)

const renderMembers = ({ fields, meta: { touched, error, submitFailed } }) => (
    <div className="">
        <ErrorHeader touched={touched} error={error} submitFailed={submitFailed} />
        <AgregarProducto fields={fields} />
        <InputsForm fields={fields} />
    </div >
)