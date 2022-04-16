// @ts-nocheck
import island from "../../assets/images/grounds/1.svg";
import iceland from "../../assets/images/grounds/2.svg";
import desertland from "../../assets/images/grounds/3.svg";
import lavaland from "../../assets/images/grounds/4.svg";
import crystalland from "../../assets/images/grounds/5.svg";
import toxicland from "../../assets/images/grounds/6.svg";
import waterland from "../../assets/images/grounds/7.svg";
import crystalland2 from "../../assets/images/grounds/8.svg";
import deadland from "../../assets/images/grounds/9.svg";
import { EGroundType } from "../../enums/EGroundType";

export const getImageByGroundType = (type: EGroundType) => {
    let image = null;
    switch (type) {
        case EGroundType.ISLAND:
            return island;
        case EGroundType.ICELAND:
            return iceland;
        case EGroundType.DESERTLAND:
            return desertland;
        case EGroundType.LAVALAND:
            return lavaland;
        case EGroundType.CRYSTALLAND:
            return crystalland;
        case EGroundType.TOXICLAND:
            return toxicland;
        case EGroundType.WATERLAND:
            return waterland;
        case EGroundType.CRYSTALLAND2:
            return crystalland2;
        case EGroundType.DEADLAND:
            return deadland;
    }

    return image;
};
