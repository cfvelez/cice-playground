import { TodoState } from './todo-state'
import { FilterAction } from './filter-action'

const initialState: TodoState = {
  todos: []
}

export function filterReducer(state: TodoState = initialState, action: FilterAction): TodoState {
  switch (action.type) {
    case 'ALL': {
      return state
    }

    case 'COMPLETED':
      return {
        todos: state.todos.filter(todo =>
          todo.completed == action.payload.completed ? true : false
        )
      }

    case 'INCOMPLETED':
      return {
        todos: state.todos.filter(todo =>
          todo.completed == action.payload.completed ? true : false
        )
      }

    default: {
      return state
    }
  }
}
