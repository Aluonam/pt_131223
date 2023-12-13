import React, { useState } from 'react'

const DeleteOneLetter = () => {

    const [dataUser, setDataUser] = useState("")
    const [letterUser, setLetterUser] = useState("")

    const deleteLetter = ()=>{

    }
  return (
    <>
    <h3>Write a sentence</h3>
    <input onChange={(e)=>{setLetterUser(e.target.value)}}></input>
    <h3>Write a letter</h3>
    <input onChange={(e)=>{setDataUser(e.target.value)}} maxlength="1"></input>
    <button onClick={()=>{}}>Click delete letter</button>
    </>
  )
}

export default DeleteOneLetter