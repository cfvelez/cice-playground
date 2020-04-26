import React from 'react'
import { Provider } from 'react-redux'
import { store } from './application/store/store'
import { TodoForm } from './ui/todo-form'
import { TodoList } from './ui/todo-list'

import './App.css'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoForm />
        <TodoList />
      </Provider>
    </div>
  )
}

export default App
