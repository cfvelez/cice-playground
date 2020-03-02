import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

export function App() {
  const tasks = [
    { id: 1, name: 'Task 2', status: 0 },
    { id: 2, name: 'Task 2', status: 0 },
    { id: 3, name: 'Task 3', status: 0 }
  ]

  const [value, setValue] = useState('')

  console.log(useState(''))

  return (
    <>
      {tasks.map(t => (
        <div>{t.name}</div>
      ))}
      <input value={value} onChange={event => setValue(event.target.value)} />
      <button name= />
    </>
  )
}

export default App
