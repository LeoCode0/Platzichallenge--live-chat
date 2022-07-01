import React from 'react'

export const Message = ({ text, hour, sender = false }) => {
  return (
    <li className={sender ? "sender" : "receiver"} >
      <p>{text}</p>
      <span>{hour}</span>
    </li>
  )
}
