import React,{useState} from 'react'
import  Child from "./Child";

function Parent() {
  const [message, setMessage] = useState("Hello Pavan!!")
  function choosemessage(msg) {
    setMessage(msg)
  }

  return (
    <div>
     <p>{message}</p>
     <Child choosemessage = {choosemessage} />
    </div>
  )
}
export default Parent