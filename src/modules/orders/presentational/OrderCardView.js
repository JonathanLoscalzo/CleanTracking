import React, { Fragment } from 'react'
import moment from 'moment';


export default (props) => {
    return (
        props.order && <div className="card" >
            <div className="card-header"> Orden {props.order.id}</div>
            <div className="card-body">
                {props.order && (
                    <Fragment>
                        <dl className="row">
                            <div className="col">
                                <dt>Fecha</dt>
                                <dl> {moment(props.order.orderPlaced).format("DD/MM/YYYY")}</dl>
                            </div>
                            <div className="col">
                                <dt>Estado</dt>
                                <dl>{props.order.state}</dl>
                            </div>
                        </dl>
                        <ul className="list-group">
                            {props.order.items.map((x, i) => (
                                <li key={i} className="list-group-item">
                                Producto: {x.product} - Cantidad: {x.quantity}</li>))}
                        </ul>
                    </Fragment>)}
            </div>
        </div>)
}