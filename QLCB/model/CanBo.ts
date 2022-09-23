export class CanBo {
    private _ten: string;
    private _tuoi: number;


    constructor(ten: string, tuoi: number) {
        this._ten = ten;
        this._tuoi = tuoi;
    }


    get tuoi(): number {
        return this._tuoi;
    }

    set tuoi(value: number) {
        this._tuoi = value;
    }

    get ten(): string {
        return this._ten;
    }

    set ten(value: string) {
        this._ten = value;
    }
}
