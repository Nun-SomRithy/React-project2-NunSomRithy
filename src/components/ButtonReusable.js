import React from 'react'
import Button from 'react-bootstrap/Button';

export default function ButtonReusable({title,color,textColor}) {

 
  return (
    <div>
      <div>
        <Button style={{backgroundColor:color,color:textColor}} >{title}</Button>
       </div>
    </div>
  )
}

