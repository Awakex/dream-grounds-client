import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGround } from "../../models/IGround";

interface IGroundState {
    grounds: IGround[];
}

const initialState: IGroundState = {
    grounds: [],
};

export const groundsSlice = createSlice({
    name: "grounds",
    initialState,
    reducers: {
        setGrounds: (state, action: PayloadAction<IGround[]>) => {
            state.grounds = action.payload;
        },
    },
});

export const { setGrounds } = groundsSlice.actions;
export default groundsSlice.reducer;
