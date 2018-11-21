import React from 'react';
import { Field, FormSection } from 'redux-form';
import { FaPlusCircle } from 'react-icons/fa'
import renderField from '../../common/inputs/RenderField'
import selectable from '../../common/inputs/Selectable'

const ToolbarMembers = ({ fields, items, add, selected }) => {
    return (
        <div className="form-row">
            <div className="col-9">
                <FormSection name="item_selectable" className="form-row">
                    <div className="col-8">
                        <Field
                            name={`product`}
                            type="select"
                            component={selectable}
                            label={`Producto`}
                            options={items} />
                    </div>
                    <div className="col-4">
                        <Field
                            name={`quantity`}
                            type="text"
                            component={renderField}
                            label={`Cantidad`} />
                    </div>
                </FormSection>
            </div>
            <div className="col-3 btn-group"
                role="group"
                aria-label="Basic example">
                <button type="button"
                    className="btn btn-info"
                    onClick={(elem) => {
                        add(fields, selected);
                    }}>
                    <FaPlusCircle /> Seleccionar
                    </button>
            </div>
        </div>)
}

export default ToolbarMembers