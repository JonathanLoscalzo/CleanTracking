import React from 'react';
import { Field } from 'redux-form';
import { FaTrash } from 'react-icons/fa'
import renderField from '../../common/inputs/RenderField'
import selectable from '../../common/inputs/Selectable'


const InputRow = ({ member, index, fields, remove, products }) => {
    const item = fields.get(index)
    if (!!item.product) {
        return (
            <li className="col-12 list-group-item">
                <div className="form-row" key={index}>
                    <div className="col">
                        Producto: <strong>{item.product}</strong> - Cantidad: <strong>{item.quantity}</strong>
                    </div>
                    <div className="d-flex align-items-center">
                        <button
                            type="button"
                            className="btn float-right btn-outline-danger"
                            title="Remove Member"
                            onClick={() => { remove(fields, index, item) }}>
                            <FaTrash />
                        </button>
                    </div>
                </div>
            </li >
        )
    } else {
        return (
            <li className="list-group-item">
                <div className="form-row" key={index}>
                    <div className="col-8">
                        <Field
                            name={`${member}.product`}
                            type="select"
                            component={selectable}
                            label={`Producto ${index + 1}`} options={products} />
                    </div>
                    <div className="col-3">
                        <Field
                            name={`${member}.quantity`}
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
            </li>
        )
    }
}

export default InputRow;