import React from "react";
import Grounds from "../components/Grounds/Grounds";
import Lobby from "../components/Lobby/Lobby";
export const ROUTES = {
    GROUNDS: {
        ROOT: "/grounds",
    },
    LOBBY: {
        ROOT: "/",
    },
};
export const ROUTES_COMPONENTS = [
    { id: 1, path: ROUTES.LOBBY.ROOT, component: React.createElement(Lobby, null) },
    { id: 2, path: ROUTES.GROUNDS.ROOT, component: React.createElement(Grounds, null) },
];
