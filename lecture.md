class numberButtons
import numberbuttons

```javascript
co

```

mapping is a regular thing in react

operation buttons want to seperate out to add functionality

state - used to store values which will change
props - used to pass values that do not change

we need function to receive event
in app:

```java
this.state = {
    leftNumber: '',
    operator: '',
    rightNumber: ''
}
this.addNumber = this.addNumber.bind(this);
this.addOperter = this.addOperator.bind(this);

addNumber(event) {
    console.dir(event.target.innerHTML)
    this.setState({
        leftNumber: this.state.leftNumber + value
    })
}

addOperator(event) {
    console.dir(event.target.innerHTML)
    this.setState({
        leftNumber: this.state.leftNumber + value
    })
}

console.dir(event.target.innerHTML)

```
in the button map give button ```handleClick={this.props.addNumber}```

on button.js

give button ```onClick={this.props.handleClick}```

display on app.js : add leftNumber={this.state.leftNumber}

display.js

in span add -{this.props.leftNumber || 0} passing down as a prop

```JSX
function Button (props){
    return (
        <button onClick={props.handleClick}>
        {props.value} 
        </button>
    )
}
```
aim to have a lot of simple operators

 refactor: ES6 version

```JSX
const Button =({handleClick, value}) => (
        <button onClick={handleClick}>
        {value} 
        </button>
    )
```
If is just a function, what does it return?

just a function that takes in an argument as prop

