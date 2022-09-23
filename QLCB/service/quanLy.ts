import {CanBo} from "../model/CanBo";

export interface QuanLy<T> {
    them(t: T);

    hienThiTatCa();

    timTheoTen(ten: string);

    sua(viTri: number, t: T);

    xoa(viTri: number);
}
