import { createSlice } from "@reduxjs/toolkit"

const boshlangichQiymat = {
    items: ["Mirkomil", "Fazliddin","Said","Shoxruzbek", "Saydulloxon"]

}

export const studentSlice = createSlice({
    name: "Talabalar",
    initialState: boshlangichQiymat,
    reducers:{
        addStudent: ()=>{},
        removeStudent: ()=>{},
    }
})

export const {addStudent, removeStudent} = studentSlice.actions;
export default studentSlice.reducer;
