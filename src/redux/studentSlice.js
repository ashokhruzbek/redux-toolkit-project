import { createSlice } from "@reduxjs/toolkit"

const boshlangichQiymat = {
    items: ["Mirkomil", "Fazliddin","Said","Shoxruzbek", "Saydulloxon"]

}

export const studentSlice = createSlice({
    name: "Talabalar",
    initialState: boshlangichQiymat,
    reducers:{
        addStudent: (state, action)=>{
            state.items.push(action.payload)
        },
        removeStudent: (state)=>{},
    }
})

export const {addStudent, removeStudent} = studentSlice.actions;
export default studentSlice.reducer;
