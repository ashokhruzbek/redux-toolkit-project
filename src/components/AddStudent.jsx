import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addStudent, removeStudent } from '../redux/studentSlice'
import "../App.css"

const AddStudent = ({ students }) => {
  const [name, setName] = useState("")
  const dispatch = useDispatch()

  const handleAdd = () => {
    students.includes(name) ? alert("Student already exists") : dispatch(addStudent(name))
    setName("")
  }

  const handleRemove = (index) => dispatch(removeStudent(index))

  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter student name"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        {students.map((student, index) => (
          <p key={index}>{student} <span className='cursor' onClick={() => handleRemove(index)}>❌</span></p>
        ))}
      </div>
    </div>
  )
}

export default AddStudent