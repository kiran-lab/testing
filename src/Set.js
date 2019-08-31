import React, {Component} from "react";

class Set extends Component{

    state={
        count:2
    }
    incrementOne(){
        this.setState({count:3})
    }

    incrementOnePrevState=()=>{
        this.setState((prevstate)=>{
            return{count:prevstate.count-1}
        })
    }
    render(){
        return(
            <div>
                <h1>count: {this.state.count}</h1>
                <button onClick={this.incrementOne.bind(this)}>Count</button>
                <button onClick={this.incrementOnePrevState.bind(this)}>Prev Count</button>

                </div>
        );
    }
}

export default Set;