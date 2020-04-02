import React, { useState, useEffect } from 'react'

export const ExerciseSeven: React.FC = () => {
  const [data, setData] = useState([])
  const url = 'https://pokeapi.co/api/v2/pokemon'

  const getPokemon = async (endpoint: string) => {
    const response = await fetch(endpoint)
    const json = await response.json()
    return json.results
  }

  useEffect(() => {
    getPokemon(url).then(info => setData(info))
  }, [data])

  return (
    <>
      <ul>
        {data.map((item: any) => {
          return <li>{item.name}</li>
        })}
      </ul>
    </>
  )
}
