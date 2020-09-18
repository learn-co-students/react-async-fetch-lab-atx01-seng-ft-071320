import React, { Component } from 'react'

class App extends Component{

    state = {
        players: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json').then(res => res.json()).then(json => this.setState({players: json}))
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.players.map}
                </ul>
            </div>
        )
    }

}

export default App