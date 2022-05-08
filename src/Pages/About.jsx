import React from 'react'
import Card from '../SharedComponent/Card'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='container'>
    <Card>
      <div><h1>This is About page</h1></div>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.  </p>
      <Link to='/'> Back to Home</Link>
    </Card>
    </div>
    
  )
}

export default About