import React, { Component } from 'react'
import Home from './home/Home'
import Header from './home/Header'

class MainIndex extends Component {
    render(){
        return (
            <div>
                <Header />
                <Home />
            </div>
        )
    }
}

export default MainIndex