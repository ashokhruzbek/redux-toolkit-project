import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, removeStudent } from "./redux/studentSlice";

function App() {
  const { users, loading, error } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const dispatch = useDispatch();
  const [student, setStudent] = useState("");

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
      {/* <button onClick={handleAdd}>Add Student</button> */}

      {loading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}
      <div className="students-container">
        {users.map((user, index) => (
          <h2 key={user.id}>
            {user.name}
            <span onClick={() => handleRemove(index)}>❌</span>
          </h2>
        ))}
      </div>
    </div>
  );
}

export default App;