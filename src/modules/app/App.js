import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Layout from '../../Layout';
import { ToastContainer } from 'react-toastify'
import './App.css';

import HomePage from '../home/container/HomePage'
import OrderListPage from '../orders/list/container/OrderListPage'
import OrderNewPage from '../orders/create/container/OrderCreatePage';
import OrderUpdatePage from '../orders/update/container/OrderUpdatePage';
import LoginPage from '../auth/login/container/LoginPage'
import LogoutPage from '../auth/logout/container/LogoutPage'

class App extends Component {
    render() {
        return (
            <Private>
                <Layout>
                    <Route exact path="/" component={HomePage} />
                    <Switch >
                        <Route path="/order/new" component={OrderNewPage} />
                        <Route path="/order/edit/:id" component={OrderUpdatePage} />
                        <Route path="/order" component={OrderListPage} />
                        <Route path="/logout" component={LogoutPage} />
                    </Switch>
                    <ToastContainer autoClose={2000} />
                </Layout >
            </Private>
        );
    }
}

const Private = (props) => {
    if (localStorage.getItem('JWT_LOGIN')) {
        return (<React.Fragment> {props.children} </React.Fragment>)
    } else {
        return (<React.Fragment><LoginPage /></React.Fragment>)
    }
}

export default App;
