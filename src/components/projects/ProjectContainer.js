import React, { Component } from 'react'

class ProjectContainer extends Component {
    render(){
        let secondBg = {
            backgroundColor: '#83db7b'
        }
        let thirdBg = {
            backgroundColor: '#7bcddb'
        }
        return (
            <div id='projects' >
                <div className='middleText'>
                    <h2>PROJECTS</h2>
                    <div className='singleProjectContainer'>
                        <div className='SPC_ImageContainer'>
                            <img className='SPC_Image' src='/projectPic/Herd1.png' alt='Herd'/>
                        </div>
                        <div className='SPC_TextContainer'>
                            <div className='SPC_Text_header'>
                                Herd
                            </div>
                            <div className='SPC_Text_content'>
                                A Progress Web App for tour groups. The app makes tour guides easy to 
                                manage and gives tourists better experience with functions like group members 
                                locations sharing, broadcasting announcements, online chatting, setup points of 
                                interests as well as show favorite spots by heat map.
                            
                            <div className='SPC_Text_tech'>
                                <h6>
                                    Technologies used: React, Redux, Express, Firebase, Heroku, Google Maps API, 
                                    Material-UI, Geolocation API
                                </h6>
                            </div>
                            <div className='SPC_Text_footer'>
                                <a href='https://herd-tour.com/' className='buttonLink' target="_blank" rel="noopener noreferrer">Website</a>
                                <a href='https://github.com/herd-1807-capstone' className='buttonLink'  target="_blank" rel="noopener noreferrer">Code</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='middleText' style={secondBg}>
                    <div className='singleProjectContainer'>
                        
                        <div className='SPC_TextContainer'>
                            <div className='SPC_Text_header'>
                                Ties of Darkness
                            </div>
                            <div className='SPC_Text_content'>
                                A 3D Third-Person Perspective Game where the player avoids being caught by monsters that generate from 
                                different regions of the map and uses a weapon to destroy them. The game keeps count of monsters that 
                                being destroyed and shows the score at the end. 
                            
                            <div className='SPC_Text_tech'>
                                <h6>
                                    Technologies used: Unity, C#
                                </h6>
                            </div>
                            <div className='SPC_Text_footer'>
                                <a href='https://developer.cloud.unity3d.com/share/share.html?shareId=WkjTLK8obE' className='buttonLink' target="_blank" rel="noopener noreferrer">Website</a>
                                {/* <a href='https://github.com/herd-1807-capstone' className='buttonLink'  target="_blank" rel="noopener noreferrer">Code</a> */}
                            </div>
                            </div>
                        </div>
                        <div className='SPC_ImageContainer'>
                            <img className='SPC_Image' src='/projectPic/TiesOfDarkness.jpg' alt='Ties of Darkness'/>
                        </div>
                    </div>
                </div>

                <div className='middleText' style={thirdBg}>
                    <div className='singleProjectContainer'>
                        <div className='SPC_ImageContainer'>
                            <img className='SPC_Image' src='/projectPic/theGardn_list.png' alt='The Gardn'/>
                        </div>
                        <div className='SPC_TextContainer'>
                            <div className='SPC_Text_header'>
                                The Gardn
                            </div>
                            <div className='SPC_Text_content'>
                                An Ecommerce Website that helps grocery merchants to displays their products and allows unregistered as well as login 
                                users to purchase products online.  Users can register with their own email address or log in with their Google accounts. 
                            <div className='SPC_Text_tech'>
                                <h6>
                                    Technologies used: React, Redux, Express, Sequelize, PostgraSQL, Bootstrap
                                </h6>
                            </div>
                            <div className='SPC_Text_footer'>
                                <a href='https://gardnstore.herokuapp.com/' className='buttonLink' target="_blank" rel="noopener noreferrer">Website</a>
                                <a href='https://github.com/theGardn' className='buttonLink'  target="_blank" rel="noopener noreferrer">Code</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectContainer