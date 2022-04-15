import { createSlice } from "@reduxjs/toolkit";
import { registerUser, signInUser } from "./actionCreators";
const initialState = {
    isAuth: false,
    isConnected: false,
    isUserLoading: false,
    websocket: null,
    online: 0,
    user: {
        _id: 0,
        money: 0,
        email: null,
    },
};
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setConnectStatus: (state, action) => {
            state.isConnected = action.payload;
        },
        setWebsocket: (state, action) => {
            state.websocket = action.payload;
        },
        setOnline: (state, action) => {
            state.online = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuth = true;
        },
        updateMoney: (state, action) => {
            state.user = Object.assign(Object.assign({}, state.user), { money: action.payload });
        },
    },
    extraReducers: {
        [registerUser.fulfilled.type]: (state, action) => {
            state.isUserLoading = false;
            state.user = Object.assign(Object.assign({}, state.user), action.payload);
            state.isAuth = true;
        },
        [registerUser.pending.type]: (state, action) => {
            state.isUserLoading = true;
            state.isAuth = false;
        },
        [registerUser.rejected.type]: (state, action) => {
            state.isUserLoading = false;
            state.isAuth = false;
        },
        [signInUser.fulfilled.type]: (state, action) => {
            state.isUserLoading = false;
            state.user = Object.assign(Object.assign({}, state.user), action.payload);
            state.isAuth = true;
        },
        [signInUser.pending.type]: (state, action) => {
            state.isUserLoading = true;
            state.isAuth = false;
        },
        [signInUser.rejected.type]: (state, action) => {
            state.isUserLoading = false;
            state.isAuth = false;
        },
    },
});
export const { setConnectStatus, setWebsocket, setOnline, setUser, updateMoney } = authSlice.actions;
export default authSlice.reducer;
