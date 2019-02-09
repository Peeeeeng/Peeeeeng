import React, { Component } from 'react'

class Profile extends Component {
    render(){
        return (
            <div id='about'>
                <h2 className='container-Title'>ABOUT ME</h2>
                <div className='textContent'>
                <p>
                    <h6>
                    Hello! My name is Peng Liao, a former Special Education Paraprofessional, 
                    now a passionate JavaScript Full Stack Developer. After working in public school 
                    for 7 years, a part time job made me realized how much a good app can help people in daily life. So I joined Fullstack 
                    Academy and started to learn JavaScript and some of the popular frameworks like React, 
                    Node.js, etc.
                    <p />
                    Through learning JavaScript, I have a lot of fun, expecially building something I had not learned before, like 
                    learning C# and using Unity to build a 3D game, or learning to use Firebase and Google Cloud Platform service. 
                    You can find these projects below.
                    <p />
                    I like video games, Sci-Fi movies and episodes! I am also a casual hiker. My favorite trail near NYC is Twin Mountain and 
                    Sugarloaf Mountain Loop.
                    <p />
                    SKILLS: Javascript, HTML5, CSS, VB, React + Redux, Node.JS, Express, Sequelize, Socket.IO, PostgresQL, 
                    Webpack, Git, Firebase, Unity, Agile methodologies, Mocha, Chai.
                    </h6>
                </p>
                </div>
            </div>
        )
    }
}

export default Profile