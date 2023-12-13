import React, { useState } from 'react'
import style from './Form.module.css'
import ModalAnt from './ModalAnt'

const Form = () => {

  const [dataUser, setDataUser] = useState({})


  console.log(dataUser)
  return (
    <>
    <form>
        <input type='number' value={dataUser?.number} onChange={(e)=>{setDataUser({...dataUser,number:e.target.value})}}></input>
        <input type='text' value={dataUser?.text}  onChange={(e)=>{setDataUser({...dataUser,text:e.target.value})}}></input>
        <input type='password' value={dataUser?.password}  onChange={(e)=>{setDataUser({...dataUser,password:e.target.value})}}></input>
        <input type='email' value={dataUser?.email}  onChange={(e)=>{setDataUser({...dataUser,email:e.target.value})}}></input>
        <input type='checkbox' value={dataUser?.checkbox}  onChange={(e)=>{setDataUser({...dataUser,checkbox:e.target.value})}}></input> 
        {/* arreglar funcionalidad checkbox con el e.target.value correcto */}
    </form>
    <ModalAnt dataUser={dataUser}></ModalAnt>
    </>
  )
}

export default Form