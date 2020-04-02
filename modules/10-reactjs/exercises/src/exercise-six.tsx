import React, { useState, useEffect } from 'react'

export const ExerciseSix: React.FC = () => {
  const [text, setText] = useState('')

  useEffect(() => {
    const data = localStorage.getItem('info')

    console.log(data)

    if (data !== null && text === '') {
      setText(data)
    } else {
      localStorage.setItem('info', text)
    }
  }, [text])

  return (
    <input
      value={text}
      onChange={event => {
        setText(event.target.value)
      }}
    ></input>
  )
}
