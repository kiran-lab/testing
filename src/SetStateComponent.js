import React, { Component } from "react";

class SetStateComponent extends Component {
    
    state = {
        count: 4
    }
    incrementOne() {
        this.setState({count:5})
    }

    incrementOnePrevState= () => {
        this.setState((prevState) => {
            return {count: prevState.count +  1}
        })
    }

    test() {
        alert("Why some people are always sad")
    }
    
    render() {
    return (
        <div>
            <h1>Statistics count: {this.state.count}</h1>
            <button onClick={this.incrementOne.bind(this)}>Count</button>
            <button onClick={this.incrementOnePrevState.bind(this)}>Prev State Count</button>
            <button onClick={this.test}>Test</button>
        </div>
    );
  }
}
export default SetStateComponent;


/*
Why use .bind(this) while calling a function
Acutally if you have a function that isn't accessing anything outside from itself
then you can directly use it like : <button onClick={this.myFun} />
but if your myFun is using some state or other things from class than
you have to bind it's calling like <button onClick={this.myFun.bind(this)} />
and why you don't write parentheses like: <button onClick={this.myFun()} />
because it will execute the function as like in js, but we are just mentioning it
to be called later so we donot write paranthesis.
another possible syntax for calling function in es6 will be:
<button onClick={ () => this.myFun() } /> here now with paranthesis

*/