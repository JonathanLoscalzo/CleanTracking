import React, { Fragment } from 'react'
import { FieldArray } from 'redux-form';
import { Alert } from 'reactstrap'

import FormToolbar from './FormToolbar';

import { Body, Wrapper, Header } from '../../common/page'
import InputRow from './Inputs'
import ToolbarMembers from './AddToolbar'

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
    const { handleSubmit,
        title,
        add,
        remove,
        selected } = props
    return (
        <Wrapper>
            <Header title={title} />
            <Body >
                <form onSubmit={handleSubmit}>
                    <FieldArray
                        name="items"
                        component={renderMembers}
                        add={add}
                        remove={remove}
                        selected={selected} />

                    <FormToolbar {...props} />
                </form>
            </Body>
        </Wrapper>
    )
}

const renderMembers = ({
    fields,
    meta: { touched, error, submitFailed },
    add,
    remove,
    selected
}) => (
        <div className="">
            <ErrorHeader touched={touched} error={error} submitFailed={submitFailed} />
            {/* <AgregarProducto fields={fields} /> */}
            <ToolbarMembers
                fields={fields}
                selected={selected}
                items={products}
                add={add} />
            <br />
            <InputsForm
                fields={fields}
                remove={remove}
                products={products} />
        </div >
    )

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

class InputsForm extends React.Component {
    render() {
        const { fields, products, remove } = this.props;

        return (
            <ul className="list-group">
                {
                    fields.map((member, index) =>
                        <InputRow
                            key={index}
                            member={member}
                            index={index}
                            fields={fields}
                            products={products}
                            remove={remove} />)
                }
            </ul>
        )
    }
}