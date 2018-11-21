import React from 'react';
import { MdSend, MdArrowBack } from 'react-icons/md'
import { IoIosRedo } from 'react-icons/io'

export default ({ submitting, pristine, reset, goBack }) => (
    <div className="form-row mt-3 d-flex justify-content-center">
        <button
            type="submit"
            className="btn btn-sm btn-md btn-primary mr-2"
            disabled={submitting}>
            <MdSend /> Enviar
                        </button>
        <button type="button"
            className="btn btn-sm btn-md btn-info mr-2"
            disabled={pristine || submitting}
            onClick={reset}>
            <IoIosRedo /> Limpiar
                        </button>
        <button type="button"
            className="btn btn-sm btn-md btn-default mr-2"
            onClick={goBack}>
            <MdArrowBack /> Volver
                        </button>
    </div>)