import React, { useState } from 'react'

const DeleteOneLetter = () => {

    const [dataUser, setDataUser] = useState("")
    const [letterUser, setLetterUser] = useState("")
  return (
    <>
    <h3>Write a sentence</h3>
    <input onChange={(e)=>{e.target.value}}></input>
    <br>
    </br>
    <h3>Write a letter</h3>
    <input onChange={(e)=>{e.target.value}} maxlength="1"></input>
    <button onClick={()=>{}}>Click delete letter</button>
    </>
  )
}

export default DeleteOneLetter