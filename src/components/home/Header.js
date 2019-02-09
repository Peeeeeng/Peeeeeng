import React, { Component } from 'react'

class Header extends Component {
    render () {
        return (
            <div className='main-Header'>
                <div className='header-Link'>
                    <div>About</div>
                </div>
                <div className='header-Link'>
                    {/* <span>Projects</span>
                    <span>Contect Me</span> */}
                    <div>
                        <a href='#projects' className='header_Link_Text'>
                        Projects
                        </a>
                    </div>
                    <div>Contect</div>
                </div>
            </div>
        )
    }
}

export default Header