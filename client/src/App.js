import React, { useState, useEffect } from 'react'

const App = () => {
  const [name, setName] = useState([])

  useEffect(() => {
    fetch('https://starter-name-generator-backend-2vaj.onrender.com/generate')
      .then((res) => res.json())
      .then((name) => setName([name]))
  }, [])

  return (
    <h1>{name}</h1>
  )
}

export default App
