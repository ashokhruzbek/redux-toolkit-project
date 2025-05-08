import React from 'react'
import { useSelector } from 'react-redux'
import AddStudent from './components/AddStudent';

function App() {
  const students = useSelector(state => state.students.items);
  console.log(students);
  return (
    <div>
      <h1>Talabalar Ro'yxati</h1>
      <AddStudent />
    </div>
  )
}

export default App
