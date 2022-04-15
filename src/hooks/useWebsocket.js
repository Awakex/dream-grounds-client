import { useAppSelector } from "./redux";
import { useDispatch } from "react-redux";
import { authSlice } from "../store/auth/authSlice";
import { io } from "socket.io-client";
import { WebsocketSettings } from "../app/const";
import { groundsSlice } from "../store/grounds/groundsSlice";
const useWebsocket = () => {
    //CONNECT
    const { isConnected, websocket, user } = useAppSelector((state) => state.authReducer);
    const { setWebsocket, setConnectStatus, setOnline, setUser, updateMoney } = authSlice.actions;
    //GROUNDS
    const { setGrounds } = groundsSlice.actions;
    const dispatch = useDispatch();
    const connect = () => {
        if (isConnected) {
            dispatch(setConnectStatus(true));
            console.log("User already connected");
            return;
        }
        let ws = io(WebsocketSettings.URL, {
            query: { id: user._id },
        });
        ws.on("connect", () => {
            dispatch(setWebsocket(ws));
            dispatch(setConnectStatus(true));
        });
        ws.on("disconnect", () => {
            dispatch(setConnectStatus(false));
            dispatch(setWebsocket(null));
        });
        ws.on("online:update", (online) => {
            dispatch(setOnline(online));
        });
        ws.on("grounds:list", (grounds) => {
            dispatch(setGrounds(grounds));
        });
        ws.on("money:update", (balance) => {
            dispatch(updateMoney(balance));
        });
        ws.on("user:get", (user) => {
            user = Object.assign(Object.assign({}, user.user), { money: user.userOwn.money });
            if (user) {
                dispatch(setUser(user));
            }
        });
    };
    const getGrounds = () => {
        if (!websocket) {
            console.log("Cannot get grounds. no connection");
            return;
        }
        websocket.emit("grounds:get");
    };
    const disconnect = () => {
        if (!websocket) {
            console.log("User not connected");
            return;
        }
        websocket.disconnect(() => {
            dispatch(setConnectStatus(false));
            dispatch(setWebsocket(null));
        });
    };
    return {
        connect,
        disconnect,
        getGrounds,
    };
};
export default useWebsocket;
