import React, { useState } from 'react'

const DeleteOneLetter = () => {

    const [dataUser, setDataUser] = useState("")
    const [letterUser, setLetterUser] = useState("")

    const deleteLetter = ()=>{
        const sentence = structuredClone(dataUser);
        const letterByLetter = sentence.split("")
        const senteceFiltered = letterByLetter.filter((letter)=>letter !== letterUser)
        setDataUser(senteceFiltered.join(""))
    }
  return (
    <>
    <h3>Write a sentence</h3>
    <input onChange={(e)=>{setDataUser(e.target.value)}}></input>
    <h3>Write a letter</h3>
    <input onChange={(e)=>{setLetterUser(e.target.value)}} maxlength="1"></input>
    <button onClick={()=>{deleteLetter()}}>Click delete letter</button>
    {dataUser}
    </>
  )
}

export default DeleteOneLetter