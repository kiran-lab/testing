import React,{Component} from "react";
class prc extends Component{
    state{
        count:5
    }
    decrement(){
        this.setState({count:4})
    }
    render(){
        return(
            <h1>Statistics count:{this.state.count}</h1>
             <button onClick={this.decrement.bind(this)}> Count</button>
             </div>
            );
    }
}
export default prc;