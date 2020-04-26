import { TodoState } from './todo-state'
import { TodoAction } from './todo-action'

const initialState: TodoState = {
  todos: []
}

export function todoReducer(state: TodoState = initialState, action: TodoAction): TodoState {
  switch (action.type) {
    case 'CREATE_TODO':
      if (action.payload.text === '') {
        return {
          todos: state.todos
        }
      }
      return {
        todos: [...state.todos, { ...action.payload, completed: false }]
      }
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(todo =>
          todo.id == action.payload.id ? { ...todo, completed: !todo.completed } : todo
        )
      }
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter(todo => todo.id != action.payload.id)
      }
    default: {
      return state
    }
  }
}
