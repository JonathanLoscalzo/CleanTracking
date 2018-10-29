import React, { Fragment } from 'react'
import moment from 'moment';


export default (props) => {
    return (
        <div className="card" >
            <div className="card-header"> Orden {props.order.id}</div>
            <div className="card-body">
                {props.order && (
                    <Fragment>
                        <dl className="row">
                            <div className="col">
                                <dt>Fecha</dt>
                                <dl> {moment(props.order.date).format("DD/MM/YYYY")}</dl>
                            </div>
                            <div className="col">
                                <dt>Estado</dt>
                                <dl>{props.order.state}</dl>
                            </div>
                        </dl>
                        <ul className="list-group">
                            {props.order.products.map((x, i) => (
                                <li key={i} className="list-group-item">
                                Producto: {x.name} - Cantidad: {x.count}</li>))}
                        </ul>
                    </Fragment>)}
            </div>
        </div>)
}