import React from 'react'
import Login from '../pages/Login'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat Application</span>
        <div className='user'>
            <img src='https://images.pexels.com/photos/4668553/pexels-photo-4668553.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
            <span>Geetha</span>
            <button onClick={()=>signOut(auth)}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar