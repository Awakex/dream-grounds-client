import { IUser } from "./IUser";

export interface IGround {
    _id: number;
    incomePerTick: number;
    name: string;
    ownerId: IUser;
    price: number;
}
