import React, {Component} from 'react';

class App extends Component {
    state = [
        {id: 1, name: "NIkki"},
        {id: 2, name: "NIkka"}
    ];

    render() { 
        return ( 
            <ul>
                { this.state.map(data => {
                    return <li key={data.id}>{data.id}: {data.name}</li>
                })}
            </ul>
          );
    }
}
 
export default App;