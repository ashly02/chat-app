import React from 'react'
import more from '../img/more.png'
import Input from './Input'
import Messages from './Messages'
const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Jane</span>
        <div className='chatIcons'>
          <img src={more} alt="" />

        </div>
      </div>
      <Messages/>
      <Input></Input>
    </div>
  )
}

export default Chat
