import React, { useState } from 'react'
import { AppDispatch } from '../application/store/store'
import { useDispatch } from 'react-redux'
import { createTodo } from '../application/todo/todo-action'
import { showAll } from '../application/todo/filter-action'
import { RootState } from '../application/store/store'
import { useSelector } from 'react-redux'

export const TodoForm: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todoReducer.todos)
  const [text, setText] = useState('')
  const dispatch: AppDispatch = useDispatch()

  const [filter, setFilter] = useState('ALL')

  const createTodoHandler = () => {
    dispatch(createTodo({ text, id: Math.floor(Math.random() * 10_000) }))
    setText('')
  }

  const handleFilter = (event: string) => {
    switch (event) {
      case 'ALL': {
        dispatch(showAll())
      }
    }

    setFilter(event)
  }

  return (
    <>
      <label>
        Todo
        <input type="text" value={text} onChange={event => setText(event.target.value)} />
      </label>
      <button onClick={() => createTodoHandler()}>Create</button>

      <label>
        <select value={filter} onChange={e => handleFilter(e.target.value)}>
          <option value="ALL">Show All</option>
          <option value="COMPLETED">Complete</option>
          <option value="INCOMPLETED">Incomplete</option>
        </select>
        Completed
      </label>
    </>
  )
}
