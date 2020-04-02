import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { ExerciseOne } from './exercise-one'
<<<<<<< HEAD
=======
import { ExerciseTwo } from './exercise-two'
import { ExerciseThree } from './exercise-three'
>>>>>>> upstream/master
import { ExerciseFour } from './exercise-four'
import { ExerciseFive } from './exercise-five'
import { ExerciseSix } from './exercise-six'
import { ExerciseSeven } from './exercise-seven'
import { ExerciseEight } from './exercise-eight'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Link to="/exercise-one">Exercise one</Link>
<<<<<<< HEAD
=======
      <Link to="/exercise-two">Exercise two</Link>
      <Link to="/exercise-three">Exercise three</Link>
>>>>>>> upstream/master
      <Link to="/exercise-four">Exercise four</Link>
      <Link to="/exercise-five">Exercise five</Link>
      <Link to="/exercise-six">Exercise six</Link>
      <Link to="/exercise-seven">Exercise seven</Link>
<<<<<<< HEAD
      <Link to="/exercise-eight">Exercise Eight</Link>
      <Route path="/exercise-one">
        <ExerciseOne />
      </Route>
=======
      <Link to="/exercise-eight">Exercise eight</Link>

      <Route path="/exercise-one">
        <ExerciseOne />
      </Route>
      <Route path="/exercise-two">
        <ExerciseTwo />
      </Route>
      <Route path="/exercise-three">
        <ExerciseThree />
      </Route>
>>>>>>> upstream/master
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
<<<<<<< HEAD
        <ExerciseEight />
=======
        <ExerciseEight percentage={70} />
>>>>>>> upstream/master
      </Route>
    </BrowserRouter>
  )
}
