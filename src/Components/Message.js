import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src='https://images.pexels.com/photos/4668553/pexels-photo-4668553.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
        <span>Just Now</span>
      </div>
      <div className='messageContent'>
        <p>Hello</p>
        <img src='https://images.pexels.com/photos/4668553/pexels-photo-4668553.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
        {/* <img src='' alt=''/> */}
      </div>
    </div>
  )
}

export default Message