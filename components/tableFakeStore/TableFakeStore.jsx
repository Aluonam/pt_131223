import React, { useEffect, useState } from 'react'
import TableFakeStoreStyle from './TableFakeStore.module.css'

const TableFakeStore = () => {

    const [dataAPI, setDataAPI] = useState([])

    useEffect(() => {
        apiCall()
    }, [])
    

    const apiCall = async ()=>{
        try{
            const url = await fetch(`https://fakestoreapi.com/products?limit=5`);
            const data = await url.json();
            console.log(data)
        }catch(err){
            console.log(err, "error detected")
        }
    }

  return (
    <>
    <table>
        <thead>
            <tr>
                <td>Product</td>
                <td>Price</td>
                <td>Category</td>
                <td>Image</td>
            </tr>
        </thead>
        <tbody>
        <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>
    </>
  )
}

export default TableFakeStore