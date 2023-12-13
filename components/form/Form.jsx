import React, { useState } from 'react'
import style from './Form.module.css'

const Form = () => {

    const [dataAPI, setDataAPI] = useState([])


  return (
    <>
    <form>
        <input type='number'></input>
        <input type='text'></input>
        <input type='password'></input>
        <input type='number'></input>
        <input type='number'></input>
    </form>
    </>
  )
}

export default Form