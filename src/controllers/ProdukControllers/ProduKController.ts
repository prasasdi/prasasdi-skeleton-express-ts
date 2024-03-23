import { ProdukNotFoundException } from '@/entities/exceptions/Produk/ProdukNotFoundException';
import { IServiceManager } from '@/services/contracts/IServiceManager';
import { asyncUtil } from '@/utils/asyncUtil';
import express from 'express';
export class ProdukController {
    static inisiasiController(app:express.Express, service:IServiceManager):void {
        // get id
        app.get('/api/produk', asyncUtil(async (req, res, next) => {
            const produks = await service.Produk.Find("");
            res.send(produks);
        }))
    }
}