import React, { Component } from "react";

class setcomponent extends Component {
    
    state = {
        count: 4
    }
    decrementOne() {
        this.setState({count:3})
    }

    decrementOnePrevState= () => {
        this.setState((prevState) => {
            return {count: prevState.count -  1}
        })
    }

    render() {
    return (
        <div>
            <h1>count: {this.state.count}</h1>
            <button onClick={this.decrementOne.bind(this)}>Count</button>
            <button onClick={this.decrementOnePrevState.bind(this)}>Prev State Count</button>
        </div>
    );
  }
}
export default setcomponent;
