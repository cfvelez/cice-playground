import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { ExerciseOne } from './exercise-one'
import { ExerciseFour } from './exercise-four'
import { ExerciseFive } from './exercise-five'
import { ExerciseSix } from './exercise-six'
import { ExerciseSeven } from './exercise-seven'
import { ExerciseEight } from './exercise-eight'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Link to="/exercise-one">Exercise one</Link>
      <Link to="/exercise-four">Exercise four</Link>
      <Link to="/exercise-five">Exercise five</Link>
      <Link to="/exercise-six">Exercise six</Link>
      <Link to="/exercise-seven">Exercise seven</Link>
      <Link to="/exercise-eight">Exercise Eight</Link>
      <Route path="/exercise-one">
        <ExerciseOne />
      </Route>
      <Route path="/exercise-four">
        <ExerciseFour />
      </Route>
      <Route path="/exercise-five">
        <ExerciseFive />
      </Route>
      <Route path="/exercise-six">
        <ExerciseSix />
      </Route>
      <Route path="/exercise-seven">
        <ExerciseSeven />
      </Route>
      <Route path="/exercise-eight">
        <ExerciseEight />
      </Route>
    </BrowserRouter>
  )
}
