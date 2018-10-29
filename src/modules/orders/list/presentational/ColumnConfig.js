import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa'
import * as States from '../../states'

const renderState = props => {
    switch (props.value) {
        case States.NUEVO:
            return <span className="badge badge-warning" >{States.NUEVO}</span>
        case States.ENTREGADO:
            return <span className="badge badge-success" >{States.ENTREGADO}</span>
        default:
            return <span></span>
    }
}

const renderToolbar = ({ original, ...props }) => {
    let editButton;
    if (original.state === States.NUEVO) {
        editButton = (
            <Link to={`/order/edit/${props.value}`}>
                <button >
                    <FaEdit />
                </button>
            </Link>
        )
    }

    return <span>
        <Link to={`/order/view/${props.value}`}>
            <button>
                <FaSearch />
            </button>
        </Link> {' '}
        {editButton} {' '}
        <Link to={`/order/remove/${props.value}`}>
            <button>
                <FaTrash />
            </button>
        </Link>
    </span>
}

const columns = [
    {
        Header: 'Fecha',
        accessor: 'date',
        Cell: props => moment(props.value).format("DD/MM/YYYY"),
        sortMethod: (a, b) => {
            return moment(a) < moment(b) ? 1 : -1
        }
    },
    // {
    //     Header: 'Productos',
    //     accessor: 'products',
    //     Cell: props => <span className='number'>{props.value.map(x => x.name).join(", ")}</span> // Custom cell components!
    // },
    {
        Header: 'Estado',
        accessor: 'state',
        Cell: renderState
    }, {
        Header: 'Acciones',
        accessor: 'id',
        Cell: renderToolbar
    }
]

export default columns;