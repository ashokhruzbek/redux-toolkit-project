import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStudent } from '../redux/studentSlice'
function AddStudent() {
  const [student, setStudent] = useState('');
  const students = useSelector(state => state.students.items);
  const dispatch = useDispatch();

  const handleAdd = () => {
        students.includes(student) ? alert("Bu talaba mavjud") : dispatch(addStudent(student))
    }
    return (
        <div>
      <input
        type="text"
        value={student}
        onChange={(e) => setStudent(e.target.value)}
        placeholder="Ism kiriting"
        />
      <button onClick={handleAdd}>Add Student</button>
    </div>
  )
}

export default AddStudent
