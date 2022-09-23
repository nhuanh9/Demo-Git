import {CanBo} from "./CanBo";

export class KySu extends CanBo{
    private _nganh: string;


    constructor(ten: string, tuoi: number, nganh: string) {
        super(ten, tuoi);
        this._nganh = nganh;
    }


    get nganh(): string {
        return this._nganh;
    }

    set nganh(value: string) {
        this._nganh = value;
    }
}
