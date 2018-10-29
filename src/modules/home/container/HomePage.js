
import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from '../presentational/Home'
import { anAction } from '../index';

class HomePage extends React.Component {

    render() {

        return (
            <Home anAction={this.props.anAction} counter={this.props.counter} />
        )
    }
}

const mapStateToProps = (state) => ({
    counter: state.home.counter
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ anAction }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)