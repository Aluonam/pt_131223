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
            setDataAPI(data)
        }catch(err){
            console.log(err, "error detected")
        }
    }

    const dataTable = dataAPI.map((element)=>{
        return(
            <tr>
                <td>{element.title}</td>
                <td>{element.price}</td>
                <td>{element.category}</td>
                <td>{element.id}</td>
            </tr>
        )
    })

  return (
    <>
    <table>
        <thead>
            <tr>
                <td>Product</td>
                <td>Price</td>
                <td>Category</td>
                <td>Id</td>
            </tr>
        </thead>
        <tbody>
            {dataTable}
        </tbody>
    </table>
    </>
  )
}

export default TableFakeStore