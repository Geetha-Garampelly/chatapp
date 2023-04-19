import React from 'react'

import Img from "../img/img.png"
import Attach from "../img/attach.png"

const input = () => {
  return (
    <div className='input1'>
      <input type='text' placeholder='Type something...'/>
      <div className='input-fields'>
        <img src={Attach} alt=''/>
        <input type='file' style={{display:"none"}} id='file'/>
        <label htmlFor='file'>
          <img src={Img} alt=''/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default input