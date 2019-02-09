import React, { Component } from 'react'

import ProjectContainer from '../projects/ProjectContainer'
import Profile from '../Profile'
import Contact from '../Contact'



class Home extends Component {
    render(){
        return (
            <div>
                <div className='bgm-1'>
                    <div className='caption'>
                        <span className='captionText'>Welcome!</span>
                    </div>
                    <div class="arrow down" />
                </div>
                <div className='middleText'><Profile /></div>
                <div className='bgm-2' />
                <ProjectContainer />
                <div className='bgm-4' />
                {/* <div className='bgm-3' /> */}
                <Contact />
                
            </div>
        )
    }
}

export default Home