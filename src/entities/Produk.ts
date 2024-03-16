import {v4 as guid} from 'uuid';
import { TimeSpan } from '@utils/helper/TimeSpan';

export class Produk {
    Id: string;
    Nama: string;
    Harga: number;
    Rating: number;
    Deskripsi: string;
    CreatedAt: TimeSpan;
    ModifiedAt: TimeSpan;
}