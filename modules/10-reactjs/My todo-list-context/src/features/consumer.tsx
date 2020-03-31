import React from 'react'

class MyClass extends React.Component {
  static contextType = MyContext
  render() {
    let value = this.context
    /* render something based on the value */
  }
}
