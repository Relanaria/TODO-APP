import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <>
    <h1>Welcome to your TODO list</h1>
    <p>Create your first TODO Taks by clicking the button:</p>
    <Link to={'/createTask'} className='get-started-btn'>Get Started</Link>
    </>
  )
}

