import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'reactstrap'

export default props => (
    <React.Fragment>
        <Header />
        <Container fluid>
            {props.children}
        </Container>
        <Footer />
    </React.Fragment>
);