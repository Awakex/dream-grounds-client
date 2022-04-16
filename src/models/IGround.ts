import { IUser } from "./IUser";
import { EGroundType } from "../enums/EGroundType";

export interface IGround {
    _id: number;
    type: EGroundType;
    incomePerTick: number;
    name: string;
    ownerId: IUser;
    price: number;
}
