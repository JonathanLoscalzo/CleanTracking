import React from 'react'
import { MdCreateNewFolder } from 'react-icons/md'

const NuevoReporte = (props) => <div className="col-12 mb-2">
    <button type="button " onClick={() => props.goToCreate()} className="btn btn-primary btn-lg"> <MdCreateNewFolder /> Nuevo</button>
</div>

export default NuevoReporte;