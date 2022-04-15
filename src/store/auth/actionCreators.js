/* eslint-disable import/first */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Request } from "../../app/request";
export const registerUser = createAsyncThunk("auth/register", (user, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield Request.post("auth/register", user);
    if (response.data.token) {
        localStorage.setItem("token", response.data.token);
    }
    return response.data;
}));
export const signInUser = createAsyncThunk("auth/sign_in", (authData, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield Request.post("auth/sign_in", authData);
    if (response.data.token) {
        localStorage.setItem("token", response.data.token);
    }
    return response.data;
}));
