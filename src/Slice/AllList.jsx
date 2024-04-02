import { createSlice } from "@reduxjs/toolkit";

export const allList = createSlice({
    name: "alllist",
    initialState: {
        // Initial state containing a 'list' array retrieved from localStorage or an empty array if localStorage is empty
        list: JSON.parse(localStorage.getItem('list')) || [],
        // Additional state for storing task statuses
        statuses: {},
    },
    reducers: {
        addList(state, action) { //add to-do-list in the array
            state.list.push(action.payload)
            localStorage.setItem('list', JSON.stringify(state.list));
        },
        removeList(state, action) { //delete to-do-list in from array
            state.list.splice(action.payload, 1)
            localStorage.setItem('list', JSON.stringify(state.list));
        },
        // Reducer to change the status of a task i.e from incomplete to complete
        changeStatus(state, action) {
            const { id, status } = action.payload;
            state.statuses[id] = status;

        }

    }

})

console.log(allList.list)
// Extracting action creators from the slice
export const { addList, removeList, changeStatus } = allList.actions;
export default allList.reducer;