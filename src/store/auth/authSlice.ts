import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { registerUser, signInUser } from "./actionCreators";

interface IAuthState {
    isAuth: boolean;
    isConnected: boolean;
    isUserLoading: boolean;
    websocket: any;
    online: number;
    user: IUser;
}

const initialState: IAuthState = {
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
        setConnectStatus: (state: IAuthState, action: PayloadAction<boolean>) => {
            state.isConnected = action.payload;
        },
        setWebsocket: (state: IAuthState, action: PayloadAction<any>) => {
            state.websocket = action.payload;
        },
        setOnline: (state: IAuthState, action: PayloadAction<number>) => {
            state.online = action.payload;
        },
        setUser: (state: IAuthState, action: PayloadAction<IUser>) => {
            state.user = action.payload;
            state.isAuth = true;
        },
        updateMoney: (state: IAuthState, action: PayloadAction<number>) => {
            state.user = { ...state.user, money: action.payload };
        },
    },
    extraReducers: {
        [registerUser.fulfilled.type]: (state: IAuthState, action: PayloadAction<IUser>) => {
            state.isUserLoading = false;
            state.user = { ...state.user, ...action.payload };
            state.isAuth = true;
        },
        [registerUser.pending.type]: (state: IAuthState, action: PayloadAction<IUser>) => {
            state.isUserLoading = true;
            state.isAuth = false;
        },
        [registerUser.rejected.type]: (state: IAuthState, action: PayloadAction<string>) => {
            state.isUserLoading = false;
            state.isAuth = false;
        },

        [signInUser.fulfilled.type]: (state: IAuthState, action: PayloadAction<IUser>) => {
            state.isUserLoading = false;
            state.user = { ...state.user, ...action.payload };
            state.isAuth = true;
        },
        [signInUser.pending.type]: (state: IAuthState, action: PayloadAction<IUser>) => {
            state.isUserLoading = true;
            state.isAuth = false;
        },
        [signInUser.rejected.type]: (state: IAuthState, action: PayloadAction<string>) => {
            state.isUserLoading = false;
            state.isAuth = false;
        },
    },
});

export const { setConnectStatus, setWebsocket, setOnline, setUser, updateMoney } =
    authSlice.actions;
export default authSlice.reducer;
