import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Spinner from '../../../common/loading/spinner'
import OrderItem from '../presentational/OrderItem'
import { load, goBack } from '../index';

class OrderItemPage extends React.Component {

    componentWillMount() {
        this.props.load(this.props.match.params.id)
    }

    render() {
        return (
            <Spinner loading={this.props.loading}>
                <OrderItem {...this.props} />
            </Spinner>
        )
    }
}

const mapStateToProps = ({ order }) => ({
    order: order.item.order,
    loading: order.item.loading,
    error: order.item.error,
    isOpen: order.item.isOpen
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ load, goBack }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OrderItemPage)