import React, { useState } from 'react'
import { render } from '@testing-library/react'

function getDate() {
  var today = new Date()
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
  var dateTime = date + ' ' + time

  return dateTime
}

const update = () => {
  document.title = getDate()
}

export const ExerciseFour: React.FC = () => {
  return <button onClick={update}>Cambiar</button>
}
