import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import { Message } from "../Message";
import { MdSend } from "react-icons/md";

import styles from "./styles.module.css"
import { useChat } from "../../hooks/useChat";

export const Chat = () => {
  const { id } = useParams()

  const { messages, sendMessage } = useChat(id)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    sendMessage(event.target.myMessage.value)
  }
  console.log(messages)
  return (
    <div className={styles.chat} >
      <header className={styles.header} >
        <p>
          Conversation with chat id: { id }
        </p>
      </header>
      <ol className={styles.messages} >
        {messages.length === 0 ? 
          <> 
            <Message text={"Your chat start here 👇🏻"} hour="11:00" sender={true} />
            <Message text={"Send your first message 💬"} hour="11:01" sender={false} /> 
          </> : 
        messages.map(message => <Message {...message} />) 
        }
      </ol>
      <form className={styles.form} onSubmit={handleSubmit} >
        <input type="text" name='myMessage' placeholder='Write a message...' />
        <button type='submit'> <MdSend /> </button>
      </form>
    </div>
    
  )
}
