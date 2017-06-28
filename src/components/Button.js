import React from 'react';
import PropTypes from 'prop-types'
import './Button.css';

class Button extends React.Component{
    render () {
        return (
            <button onClick={this.props.handleClick} className="component-Button">
                {this.props.children}
            </button>
        );
    }
}

Button.propTypes = {
    children: PropTypes.any.isRequired
}

export default Button;