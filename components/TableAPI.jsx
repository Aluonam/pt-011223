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
            <tr>
                <td>2</td>
                <td>3</td>
                <td>4</td>
            </tr>
        </tbody>
    </table>
    </>
  )
}

export default TableAPI