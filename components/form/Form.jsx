import React, { useState } from 'react'
import style from './Form.module.css'

const Form = () => {

  const [dataUser, setdataUser] = useState([
    {
      number: '',
      text:'',
      password: '',
      email: '',
      checkbox: ''
    }
  ])


  return (
    <>
    <form>
        <input type='number' value={dataUser.number}></input>
        <input type='text' value={dataUser.text}></input>
        <input type='password' value={dataUser.password}></input>
        <input type='email' value={dataUser.email}></input>
        <input type='checkbox' value={dataUser.checkbox}></input>
    </form>
    </>
  )
}

export default Form