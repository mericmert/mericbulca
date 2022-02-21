import React from 'react'
import Project from './Project'
import '../styles/Projects.css'

export default function Projects() {
  return (
    <div className='project-container'>
        <Project go='https://github.com/mericmert/tinder-app-clone' filename='tinder-clone.gif' title='Tinder Clone' content='A tinder clone web application using MERN STACK. You need to create and .env file for environmental variables and specify: -PORT -MongoDB URI -JWT key. Afterwards, You are able to sign up and log in for authorization. For authorization, I used jwt(JSON Web Token).'/>
        <Project go='https://github.com/mericmert/mericbulca' filename='portfolio.gif' title='Personal Portfolio Website' content='I made this fully responsive porfolio website using ReactJS for front-side and MongoDB, NodeJS for back-end.'/>    
    </div>
  )
}
