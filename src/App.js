import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'


export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>Cuckoo App</h1>
                </div>
            </BrowserRouter>
        )
    }
}
