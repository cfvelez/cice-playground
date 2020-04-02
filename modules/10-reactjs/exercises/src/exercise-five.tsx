import React, { useState, useEffect } from 'react'

export const ExerciseFive: React.FC = () => {
  const [count, setCount] = useState(10)
  const [info, setInfo] = useState('')
  const [reset, setReset] = useState(false)

  useEffect(() => {
    if (count != 0) {
      setInfo(`The counter is in ${count}`)
      setReset(false)
    } else {
      setInfo('Boom!')
      setReset(true)
    }
  }, [count])

  return (
    <>
      <div>
        <p>{info}</p>
        <button onClick={() => setCount(count - 1)}>Click me</button>
        <br></br>
        {reset && <button onClick={() => setCount(10)}>Reset</button>}
      </div>
    </>
  )
}
