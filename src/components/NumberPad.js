import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button'
import './Button.css';

const numberPadButtons = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0, '.', '00']
]

class NumberPad extends React.Component{
    render () {
        return (
          <div className = "NumberPad" > {
                    numberPadButtons.map((row, i) => {
                        return ( 
                            <div key={i} className = "buttonRow" > {
                                row.map((value) => {
                                    return <Button key={value} handleClick = {this.props.addNumber} >{value}</Button>;
                                })
                            }    
                            </div>
                        );
                    })
                } 
                </div> 
        );
    }
}

// NumberPad.propTypes = {
//     children: PropTypes.any.isRequired
// };

export default NumberPad;


