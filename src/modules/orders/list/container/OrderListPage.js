import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Spinner from '../../../common/loading/spinner'
import OrderList from '../presentational/OrderList'
import { load, goToCreate, goToEdit } from '../index';
import OrderRemovePage from '../../remove/container/OrderRemovePage';
import OrderItemPage from '../../item/container/OrderItemPage';
import OrderNewPage from '../../create/container/OrderCreatePage';
import OrderUpdatePage from '../../update/container/OrderUpdatePage';

class OrderListPage extends React.Component {

    componentDidMount() {
        this.props.load();
    }

    render() {
        return (
            <Spinner loading={this.props.loading}>
                <Switch>
                    <Route path={`${this.props.match.url}/new`} component={OrderNewPage} />
                    <Route path={`${this.props.match.url}/edit/:id`} component={OrderUpdatePage} />
                    <OrderList {...this.props} />
                </Switch>
                <Route path={`${this.props.match.url}/remove/:id`} component={OrderRemovePage} />
                <Route path={`${this.props.match.url}/view/:id`} component={OrderItemPage} />
            </Spinner>
        )
    }
}

const mapStateToProps = ({ order }) => ({
    orders: order.list.orders,
    loading: order.list.loading,
    error: order.list.error
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ load, goToCreate, goToEdit }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OrderListPage)