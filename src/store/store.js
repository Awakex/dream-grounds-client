import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/auth/authSlice";
import groundsReducer from "../store/grounds/groundsSlice";
const rootReducer = combineReducers({
    authReducer,
    groundsReducer,
});
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,
        }),
    });
};
