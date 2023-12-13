import React, { useState } from 'react'
import TableFakeStoreStyle from './TableFakeStore.module.css'

const TableFakeStore = () => {

    const [dataAPI, setDataAPI] = useState([])


    // https://fakestoreapi.com/products?limit=5

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