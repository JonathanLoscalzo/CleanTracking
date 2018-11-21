import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa'
import States from '../../states'

const renderState = props => {
    if (!!props) return (<span className={`badge badge-${States[props.value].label}`}> {States[props.value].name}</ span>)
    return "SIN ESTADO"
}

const renderToolbar = ({ original, ...props }) => {
    let editButton;
    // if (original.state === States.NUEVO) {
    editButton = (
        <Link to={`/order/edit/${props.value}`}>
            <button >
                <FaEdit />
            </button>
        </Link>
    )
    // }

    return <span>
        <Link to={`/order/view/${props.value}`}>
            <button>
                <FaSearch />
            </button>
        </Link> {' '}
        {/* {editButton} {' '} */}
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
        accessor: 'orderPlaced',
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
        accessor: 'statusLabel',
        Cell: renderState
    }, {
        Header: 'Acciones',
        accessor: 'id',
        Cell: renderToolbar
    }
]

export default columns;