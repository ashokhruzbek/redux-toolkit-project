import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const boshlangichQiymat = {
  users: [],
  loading: false,
  error: "",
};

export const studentSlice = createSlice({
  name: "Talabalar",
  initialState: boshlangichQiymat,
  reducers: {
    // setUsersStart: (state, action) => {
    //   state.loading = true;
    //   state.error = "";
    // },
    // setUsersSuccess: (state, action) => {
    //   state.users = action.payload;
    //   state.loading = false;
    //   state.error = "";
    // },
    // setUsersError: (state, action) => {
    //   state.loading = false;
    //   state.error = `Userlarni olishda ${action.payload}-hatolik yuz berdi`;
    // },
    addStudent: (state, action) => {
      state.users.push(action.payload);
    },
    removeStudent: (state, action) => {
      state.users.splice(action.payload, 1);
    },
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchUsers.pending, (state)=>{
      state.loading = true;
      state.error = "";
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) =>{
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    })
    builder.addCase(fetchUsers.rejected,(state, action)=>{
      console.log(action);
      state.loading  = false;
      state.error = 
      action.error?.message || "API dan malumot olishda xatolik yuz berdikuu";
    });
  },
});
// Middleware
export const fetchUsers = createAsyncThunk("Talabalar/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});



export const {
  addStudent,
  removeStudent,
  setUsersError,
  setUsersSuccess,
  setUsersStart,
} = studentSlice.actions;

// Middleware
// export const setUsers = () => async (dispatch) => {
//   dispatch(setUsersStart());

//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     dispatch(setUsersSuccess(response.data));
//   } catch (error) {
//     dispatch(setUsersError(error.status));
//   }
// };

export default studentSlice.reducer;