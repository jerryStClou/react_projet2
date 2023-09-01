import React, { useState } from 'react'

export default function Contact() {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const handleAuthor = (e) =>
  {
    setAuthor(e.target.value)
  }
  const handleContent = (e) => {
    setContent(e.target.value);
  }
  const submit = async() =>{
    // Envoyer la requete avec les données
    const reponse = await fetch('/api/message',{
      method: "POST",
      body: JSON.stringify({author:author, content:content}),
    });
  }
  return (
    <div>
      <input placeholder='Auteur' onChange={handleAuthor}/>
      <input placeholder='votre message' onChange={handleContent}/>
      <button onClick={submit}>Envoyer</button>
    </div>
  )
}
