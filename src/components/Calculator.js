import React from 'react';

import Display from './Display';
import Button from './Button';
import NumberPad from './NumberPad';
import OperatorPad from './OperatorPad';

import './Calculator.css';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftNumber: '',
            operator: '',
            rightNumber: ''
    };
        this.addNumber = this.addNumber.bind(this);
        this.addOperator = this.addOperator.bind(this);
        this.calculateResult = this.calculateResult.bind(this);
    }
    addNumber(e) {
        e.preventDefault();
        const value = e.target.innerHTML;
        if (this.state.operator === '') {
            this.setState({
                leftNumber: this.state.leftNumber  + value 
            });
        } else {
            this.setState({
                rightNumber: this.state.rightNumber  + value 
            });
        }
    }
    addOperator(e) {
        const value = e.target.innerHTML;
        this.setState({
            operator: value
        });
    }
    calculateResult () {
        const allOperators = {
            '+': function(num1, num2) {
                return num1 + num2;
            },
            '-': function(num1, num2) {
                return num1 - num2;
            },
            'X': function(num1, num2) {
                return num1 * num2;
            },
            '÷': function(num1, num2) {
                return num1 / num2;
            },
        };
        const operation = allOperators[this.state.operator];
        const result = operation(+this.state.leftNumber, +this.state.rightNumber);
        this.setState({
            leftNumber: result,
            operator: '',
            rightNumber: ''
        });
    }
    render() {
        let displayValue = this.state.operator === '' ? this.state.leftNumber : this.state.rightNumber;
        return (
            <div>
                <div className = "component-Calculator" >
                    <Display newNumber = {displayValue}/>              
                </div>
                <div>
                    <NumberPad addNumber={this.addNumber}/>
                    <OperatorPad addOperator={this.addOperator} calculateResult={this.calculateResult} />
                 </div>
            </div>
        );
    }
}

export default Calculator;

// grab the number is display