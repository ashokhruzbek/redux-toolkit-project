import { createSlice } from "@reduxjs/toolkit"

const initialValue = {
    items: []
}

export const studentSlice = createSlice({
    name: "Students",
    initialState: initialValue,
    reducers: {
        setUsers: (state,action)=>{
            state.items = action.payload
        },
        addStudent: (state, action) => {
            state.items.push(action.payload)
        },
        // removeStudent: (state, action) => { 
        //     state.items =  state.items.filter(name => name !== action.payload)
        // }
        removeStudent: (state, action) => {
            state.items.splice(action.payload, 1)
        }
    }
})

export const { addStudent, removeStudent } = studentSlice.actions
export default studentSlice.reducer