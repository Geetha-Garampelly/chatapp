import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchform'>
        <input type='text' placeholder='Find a user'/>
      </div>
      <div className='userchat'>
        <img src='https://images.pexels.com/photos/4668553/pexels-photo-4668553.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
        <div className='userchatinfo'>
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search
