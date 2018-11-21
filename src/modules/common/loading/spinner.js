import React from 'react';
import './styles.css';

const Spinner = ({ loading, ...props }) => {
    if (loading) {
        return (
        <div class="spinner">
            <div class="cube1"></div>
            <div class="cube2"></div>
          </div>)
    }
    else {
        return (props.children)
    }
}

export default Spinner;

