import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header>
        <h1>My TODO List</h1>
        <ul className='navigationMenu'>
        <li>
            <Link to={'/Home'}>Home</Link>
          </li>
          <li>
            <Link to={'/myTasks'}>My Tasks</Link>
          </li>
          <li>
            <Link to={'/CreateTask'}>Add a Task</Link>
          </li>
        </ul>
    </header>
  )
}

