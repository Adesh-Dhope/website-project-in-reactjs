import React from 'react'
import CounterUseState from './Counter'
import CounterUseReducer from './Counter1'
import CounterRedux from './Redux-Counter/CounterRedux'

const Contact = () => {
  return (
    <div>
<h2 style={{textAlign:'center'}}>This is Contact Us Page</h2>
<CounterUseState />
<hr />
<CounterUseReducer />
<hr />
<CounterRedux />



    </div>
  )
}

export default Contact