import { combineReducers } from 'redux'
import { todoReducer } from '../todo/todo-reducer'
import { filterReducer } from '../todo/filter-reducer'

export const rootReducer = combineReducers({ todoReducer, filterReducer })
