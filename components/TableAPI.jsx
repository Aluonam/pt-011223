import React, { useEffect, useState } from 'react'

const TableAPI = () => {

    const [dataAPI, setDataAPI] = useState([])

    useEffect(() => {
      const apiCall = async ()=>{
        try{
            const url = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const data = await url.json();
            console.log(data)
        } catch (error){error, "error detected"}
      }
      apiCall()
    }, [])
    


  return (
    <div>TableAPI</div>
  )
}

export default TableAPI