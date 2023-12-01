import React, { useEffect, useState } from 'react'
import AntModal from './AntModal'

const TableAPI = () => {

    const [dataAPI, setDataAPI] = useState([])

    useEffect(() => {
      const apiCall = async ()=>{
        try{
            const url = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const data = await url.json();
            console.log(data)
            setDataAPI(data)
        } catch (error){error, "error detected"}
      }
      apiCall()
    }, [])
    

    const tableData = dataAPI.map((oneDate)=>{
        return(
            <tr>
                <th>{oneDate.id}</th>
                <th>{oneDate.title}</th>
                <th><AntModal></AntModal></th>
            </tr>
        )
    })
  return (
    <>
    <table style={{ border: "1px solid black"}}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr> 


        </thead>
        <tbody>
            {tableData}
        </tbody>
    </table>
    </>
  )
}

export default TableAPI