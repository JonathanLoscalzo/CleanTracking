import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form'

import Spinner from '../../../common/loading/spinner'
import OrderForm from '../../presentational/OrderForm'
import { load, update, goBack } from '../index';
import validator from '../../../../helpers/YupValidator'
import schema from '../../presentational/OrderValidation';

class OrderUpdatePage extends React.Component {

    componentWillMount() {
        this.props.load(this.props.match.params.id)
    }

    render() {
        return (
            <Spinner loading={this.props.loading}>
                <OrderUpdateForm
                    {...this.props}
                    title="Editar Pedido"
                    onSubmit={(values) => { this.props.update(values) }}
                />
            </Spinner>
        )
    }
}

const OrderUpdateForm = reduxForm({
    form: 'order/update',  // a unique identifier for this form
    validate: validator(schema, ["items"]),
    enableReinitialize: true
})(OrderForm)

const mapStateToProps = ({ order, ...state }) => ({
    order: order.update.order,
    initialValues: order.update.order,
    loading: order.update.loading,
    error: order.update.error,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ load, update, goBack }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OrderUpdatePage)