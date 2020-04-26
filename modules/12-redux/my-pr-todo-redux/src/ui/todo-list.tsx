import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../application/store/store'
import { AppDispatch } from '../application/store/store'
import { useDispatch } from 'react-redux'
import { Btn } from './components/btn'
import { deleteTodo, toggleTodo } from '../application/todo/todo-action'

export const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todoReducer.todos)
  const dispatch: AppDispatch = useDispatch()

  const deleteTodoHandler = (e: Event) => {
    if (e) {
      const button: HTMLButtonElement = e.target as HTMLButtonElement
      const todoId = parseInt(button.id)
      dispatch(deleteTodo({ id: todoId }))
    }
  }

  const toogleTodoHandler = (todoId: number) => {
    dispatch(toggleTodo({ id: todoId }))
  }

  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          id={String(todo.id)}
          onClick={() => toogleTodoHandler(todo.id)}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}
        >
          {todo.text}
          <Btn
            todoId={todo.id}
            children="Delete"
            handleClick={(e: Event) => deleteTodoHandler(e)}
          ></Btn>
        </li>
      ))}
    </ul>
  )
}
