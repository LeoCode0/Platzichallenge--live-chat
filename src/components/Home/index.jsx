import React, { useState } from 'react'
import { Link } from "react-router-dom";

import styles from "./styles.module.css"

export const Home = () => {
  const [id, setId] = useState(null)

  const handleChange = (event) => {
    setId(event.target.value)
  }

  return (
    <main className={styles.home}>
      <div className={styles.information} >
        <h1>Share the best conversations with PlatziChat</h1>
        <p>An amazing chat developed with React.js and Socket.io</p>
        <input type="text" placeholder='Write a chat id' onChange={handleChange} />
        <Link to={`/chat/${id}`} >
          <button>Go to chat</button>
        </Link>
      </div>
    </main>
  ) 
}
