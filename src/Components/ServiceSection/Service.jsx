import React from 'react'
import AgeCalculator from './AgeCalculator/AgeCalculator'
import TodoListUseState from './TodoList/TodoUseState'
import PasswordGenerator from './PasswordGenerator/PasswordGenerator'

const Service = () => {
  return (
    <div>
      <h2 style={{textAlign:'center'}}>This is Service Page</h2>
      <hr />
<TodoListUseState />
<hr />
<AgeCalculator />
<hr />
<PasswordGenerator />
    </div>
  )
}

export default Service