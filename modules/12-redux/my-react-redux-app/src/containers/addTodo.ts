import React from 'react'
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../actions'

const dispatch = useDispatch()
const todo = useSelector(state => state)

const AddTodo = React.FunctionComponent({}) => {
  return (
    <>
      <div></div>
    </>
  )
}
