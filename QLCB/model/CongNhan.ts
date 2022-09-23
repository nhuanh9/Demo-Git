import {CanBo} from "./CanBo";

export class CongNhan extends CanBo{
    private _capBac: number;

    constructor(ten: string, tuoi: number, capBac: number) {
        super(ten, tuoi);
        this._capBac = capBac;
    }


    get capBac(): number {
        return this._capBac;
    }

    set capBac(value: number) {
        this._capBac = value;
    }
}
