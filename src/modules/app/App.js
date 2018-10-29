import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Layout from '../../Layout';
import { ToastContainer } from 'react-toastify'
import './App.css';

import HomePage from '../home/container/HomePage'
import OrderListPage from '../orders/list/container/OrderListPage'
import OrderNewPage from '../orders/create/container/OrderCreatePage';
import OrderUpdatePage from '../orders/update/container/OrderUpdatePage';

class App extends Component {
    render() {
        return (
            <Layout>
                <Route exact path="/" component={HomePage} />
                <Switch >
                    <Route path="/order/new" component={OrderNewPage} />
                    <Route path="/order/edit/:id" component={OrderUpdatePage} />
                    <Route path="/order" component={OrderListPage} />
                </Switch>
                <ToastContainer autoClose={2000} />
            </Layout >
        );
    }
}

export default App;
