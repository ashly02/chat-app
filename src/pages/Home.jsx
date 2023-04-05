import React from 'react'
import Chat from '../msgcomponents/Chat'
import Sidebar from '../msgcomponents/Sidebar'

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <Sidebar/>
        <Chat/>
      </div>
      
    </div>
  )
}

export default Home
 