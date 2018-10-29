import React from 'react'
import ReactTable from "react-table";
import columns from './ColumnConfig'
import NuevoReporte from './NuevoReporte'
import { Body, Wrapper, Header } from '../../../common/page'

export default props => {

    const { orders: data } = props;

    return (
        <Wrapper>
            <Header title="Listado de Pedidos" />
            <Body>
                <div className="row">
                    <NuevoReporte {...props} />
                    <div className="col-12">
                        <ReactTable
                            {...props}
                            defaultPageSize={10}
                            className="-striped -highlight"
                            data={data}
                            columns={columns}
                        />
                    </div>
                </div>
            </Body>
        </Wrapper>
    )
}