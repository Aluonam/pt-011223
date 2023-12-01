import React, { useEffect, useState } from 'react'

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
                <td>{oneDate.id}</td>
                <td>{oneDate.title}</td>
                <td>{oneDate.body}</td>
            </tr>
        )
    })
  return (
    <>
    <table>
        <thead>
            <tr>
                <td>Id</td>
                <td>Title</td>
                <td>Body</td>
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