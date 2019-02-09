import React, { Component } from 'react'

class Contact extends Component {
    render(){
        return (
            <div className='footer' id='contact'>
                <div className='contain_Title'>
                    <h2>CONTACT</h2>
                </div>
                <div className='footer_Contain'>
                    <div>
                        <h3 className='emailText'>
                        Email: 
                        <a href='pengliao2010@gmail.com' className='emailText'>PengLiao2010@Gmail.Com</a>
                        </h3>
                    </div>
                    <h3>
                        You can also check me out at:
                    </h3>
                    <div>
                        <a href='https://www.linkedin.com/in/peng-liao'>
                            <img src='LinkedIn_icon528.png' alt='LinkedIn' className='LinkIcon' />
                        </a>
                    </div>
                    <div>
                        <a href='https://github.com/Peeeeeng'>
                            <img src='github_icon.png' alt='Github' className='LinkIcon' />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact