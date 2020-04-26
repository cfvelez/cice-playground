import React from 'react'

interface Props extends React.HTMLProps<HTMLButtonElement> {
  todoId: number
  handleClick: Function
}

export const Btn: React.FunctionComponent<Props> = ({ todoId, handleClick, children }) => {
  return (
    <>
      <button id={String(todoId)} onClick={e => handleClick(e)}>
        {children}
      </button>
    </>
  )
}
