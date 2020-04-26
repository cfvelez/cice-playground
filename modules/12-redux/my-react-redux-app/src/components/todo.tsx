import React from 'react'

interface Props {
  onClick(): void
  completed: boolean
  text: string
}

const UITodo: React.FunctionComponent<Props> = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default UITodo
