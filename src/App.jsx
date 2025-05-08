import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddStudent from './components/addStudent'

const App = () => {
  const students = useSelector(state => state.students.items)
  console.log(students);

 

  return (
    <div>
      <h1>App</h1>
     <AddStudent students={students}/>
    </div>
  )
}

export default App