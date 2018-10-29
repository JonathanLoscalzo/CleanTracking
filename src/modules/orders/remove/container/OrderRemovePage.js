import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Spinner from '../../../common/loading/spinner'
import OrderRemove from '../presentational/OrderRemove'
import { load, remove, goBack } from '../index';

class OrderRemovePage extends React.Component {

    componentWillMount() {
        this.props.load(this.props.match.params.id)
    }

    render() {
        return (
            <Spinner loading={this.props.loading}>
                <OrderRemove {...this.props} />
            </Spinner>
        )
    }
}

const mapStateToProps = ({ order }) => ({
    order: order.remove.order,
    loading: order.remove.loading,
    error: order.remove.error,
    isOpen: order.remove.isOpen
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ load, remove, goBack }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OrderRemovePage)