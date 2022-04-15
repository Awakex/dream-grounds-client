/* eslint-disable import/first */

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IUser } from "../../models/IUser";
import { Request } from "../../app/request";

export const registerUser = createAsyncThunk("auth/register", async (user: IUser, thunkAPI) => {
    const response = await Request.post("auth/register", user);
    if (response.data.token) {
        localStorage.setItem("token", response.data.token);
    }

    return response.data;
});

export const signInUser = createAsyncThunk("auth/sign_in", async (authData: any, thunkAPI) => {
    const response = await Request.post("auth/sign_in", authData);

    if (response.data.token) {
        localStorage.setItem("token", response.data.token);
    }

    return response.data;
});
