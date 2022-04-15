import React from "react";
import { IRoute } from "../models/IRoute";
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

export const ROUTES_COMPONENTS: IRoute[] = [
    { id: 1, path: ROUTES.LOBBY.ROOT, component: <Lobby /> },
    { id: 2, path: ROUTES.GROUNDS.ROOT, component: <Grounds /> },
];
