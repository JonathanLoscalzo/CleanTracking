import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, formValueSelector } from 'redux-form'

import OrderForm from '../../presentational/OrderForm'
import { load, create, goBack, add, remove } from '../index';
import validator from '../../../../helpers/YupValidator'
import schema from '../../presentational/OrderValidation';
import Spinner from '../../../common/loading/spinner'

class OrderCreatePage extends React.Component {

    componentWillMount() {
        this.props.load()
    }

    render() {
        return (
            <Spinner loading={this.props.loading}>
                <OrderCreateForm
                    {...this.props}
                    title="Nuevo Pedido"
                    initialValues={this.props.order}
                    onSubmit={(values) => { this.props.create(values); }}
                />
            </Spinner>
        )
    }
}

const OrderCreateForm = reduxForm({
    form: 'order/create',  // a unique identifier for this form
    validate: validator(schema, ["items"]),
})(OrderForm)

const selector = formValueSelector('order/create');

const mapStateToProps = ({ order, ...state}) => ({
    order: order.create.order,
    loading: order.create.loading,
    error: order.create.error,
    selected: selector(state, "item_selectable")
})

const mapDispatchToProps = (dispatch) => 
    bindActionCreators({ load, create, goBack, add, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OrderCreatePage)