import { ReactElement } from "react";

export interface IRoute {
    id: number;
    path: string;
    component: ReactElement;
}
