import { Todo } from '../domain/todo'

interface Action {
  type: string
  payload: Todo
}

const todos = (state = [], action: Action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map((todo: Todo) =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

export default todos
