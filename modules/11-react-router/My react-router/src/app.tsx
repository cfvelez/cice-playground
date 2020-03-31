import React from 'react'
import './app.css'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import { Users as userList } from './Users'

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function Child() {
  let { id } = useParams()

  return (
    <div>
      <h3>ID: {}</h3>
    </div>
  )
}

function Users() {
  return (
    <div>
      <h2>Users</h2>

      <ul>
        <Switch>
          <Route path="/:id" children={<Child />} />
          {userList.map(user => {
            return <li>{user.name}</li>
          })}
        </Switch>
      </ul>
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  )
}

export function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
