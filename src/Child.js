import React from 'react'

function Child({choosemessage}) {
  return (
    <div>
        <button onClick = {() => choosemessage("Good Byeechid")}>Click me</button>
    </div>
  )
}
export default Child