import React from 'react';

import Display from './Display';
import Button from './Button';

import './Calculator.css';

const numberPadButtons = [
    ['AC', '--', '--', '%'],
    [7, 8, 9, 'X'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '--', '=']
]

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {displayNumber: 0}
    }

    render (){
        return (
            <div className="component-Calculator">
                <Display onSelection={this.displayNumber} />

                <div className="NumberPad">
                    {numberPadButtons.map((row) => {
                        return (
                            <div className="buttonRow">
                                {row.map((value) => {
                                    return <Button>{value}</Button>
                                })}
                            </div>
                        );
                    })}                   
                </div>
            </div>
        );

    }
}

export default Calculator;