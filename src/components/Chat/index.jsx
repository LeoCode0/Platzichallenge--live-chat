import React from 'react'
import { useParams } from "react-router-dom";
import { Message } from "../Message";

export const Chat = () => {
  const { id } = useParams()

  return (
    <div>
      <p>

      Chat with id { id }
      </p>
      <ol>
        <Message text={"Hola platzi"} hour="11:00" sender={true} />
        <Message text={"Hola platzi 2"} hour="11:01" sender={false} />
      </ol>
    </div>
    
  )
}
