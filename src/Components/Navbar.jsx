import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='bg-dark d-flex justify-content-center text-light'>
        
        <ul className='list-unstyled d-flex text-center'>
            <li className='mx-5'>
                <Link to='home'>Home</Link>
            </li>
            <li className='mx-5'>
                <Link to='about'>About</Link>
            </li>
            <li className='mx-5'>
                <Link to='contact'>Contact</Link>
            </li>
        </ul>
        
    </div>
  )
}
