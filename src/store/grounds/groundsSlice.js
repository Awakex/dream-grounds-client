import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    grounds: [],
};
export const groundsSlice = createSlice({
    name: "grounds",
    initialState,
    reducers: {
        setGrounds: (state, action) => {
            state.grounds = action.payload;
        },
    },
});
export const { setGrounds } = groundsSlice.actions;
export default groundsSlice.reducer;
