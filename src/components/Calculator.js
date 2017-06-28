import React from 'react';

import Display from './Display';
import Button from './Button';
import NumberPad from './NumberPad';
import OperatorPad from './OperatorPad';

import './Calculator.css';


const allOperators= {
    '+': function(num1, num2){
        return num1 + num2;
    }
};


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftNumber: '',
            operator: '',
            rightNumber: '',
            equalOp: ''
    };
        this.addNumber = this.addNumber.bind(this);
        this.addOperator = this.addOperator.bind(this);
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
        if(value !== '=')
        this.setState({
            operator: value
        });
        else 
          this.setState({
            equalOp: value
        });
    }
    render() {
        let displayValue = this.state.operator === '' ? this.state.leftNumber : this.state.rightNumber;
        // let end;
        // if (this.state.leftNumber && this.state.operator && this.state.rightNumber) {
        //     const func = allOperators[this.state.operator];
        //     const result = func(Number(this.state.leftNumber), Number(this.state.rightNumber));
        //     return end = result;
        // }
        // if (this.state.equalOp) {
        //    return displayValue = end;
        // }
        return (
            <div>
                <div className = "component-Calculator" >
                    <Display newNumber = {displayValue}/>              
                </div>
                <div>
                     <NumberPad addNumber={this.addNumber}/>
                     <OperatorPad addOperator={this.addOperator}/>
                 </div>

            </div>
        );
    }
}

export default Calculator;

// grab the number is display