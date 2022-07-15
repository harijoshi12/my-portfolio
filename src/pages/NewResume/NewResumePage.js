import React from 'react'
import  './NewResumePage.css'

const NewResumePage = () => {
  function print(){
    console.log("Hari")
  }
  return (
    <div className='newResume'>
        <h1>New Resume page</h1>
        <button onClick={print}>Generate Resume</button>
    </div>
  )
}

export default NewResumePage