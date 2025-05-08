import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStudent } from './redux/studentSlice';

function App() {
  const students= useSelector(state=> state.students.items)
  const dispatch = useDispatch()
  console.log(students);

  const handleAdd =()=>{
    dispatch(addStudent());
  }
  
  return (
    <div>
      <h1>App</h1>
      <button onClick={handleAdd}>Add Student</button>
    </div>
  )
}

export default App