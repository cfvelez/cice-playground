import React from 'react'
import UITodo from './todo'
import { Todo } from '../domain/todo'

interface Props {
  onTodoClick(i: number): void
  todos: Array<Todo>
}

const TodoList: React.FunctionComponent<Props> = ({ onTodoClick, todos }) => (
  <ul>
    {todos.map((todo: Todo, index) => (
      <UITodo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
)

export default TodoList
