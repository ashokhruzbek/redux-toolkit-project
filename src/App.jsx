import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, removeStudent } from "./redux/studentSlice";

function App() {
  const students = useSelector((state) => state.students.items);

  const dispatch = useDispatch();
  const [student, setStudent] = useState("");
  
  const handleAdd = () => {
    students.includes(student)
      ? alert("Bu talaba mavjud")
      : dispatch(addStudent(student));
  };
  const handleRemove = (index) => {
    dispatch(removeStudent(index));
  };
  return (
    <div>
      <h1>App</h1>

      <input
        type="text"
        value={student}
        onChange={(e) => setStudent(e.target.value)}
      />
      <button onClick={handleAdd}>Add Student</button>
      <div className="students-container">
        {students.map((student, index) => (
          <h2>
            {student}
            <span onClick={() => handleRemove(index)}>❌</span>
          </h2>
        ))}
      </div>
    </div>
  );
}

export default App;