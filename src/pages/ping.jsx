import React, { useEffect, useState } from 'react'

export default function ping() {
  const [message, setMessage] = useState('');
  async function getPing()
  {
    const reponse = await fetch('/api/ping');
    const data = await reponse.json();
    setMessage(data.message);
  }  

  useEffect(()=>{
    getPing()
  },[])
  
  return (
    <div>
     {message}   
    </div>
  )
}
