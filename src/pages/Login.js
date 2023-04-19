import React from 'react'


const Login = () => {
  return (
    <div className='container'>
    <div className='wrapper'>
    <span className='logo'>Chat Application</span>
    <span>Login</span>
        <form>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button>Sign In</button>
        </form>
        <p>Don't have an account? Register</p>
    </div>
    </div>
  )
}

export default Login