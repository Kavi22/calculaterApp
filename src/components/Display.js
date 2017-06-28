import React from 'react'
import "./Display.css";

class Display extends React.Component {

    render() {
        return (
            <div className="component-Display">
                <span>{this.props.newNumber}</span>
            </div>
        );
    }
}

export default Display;