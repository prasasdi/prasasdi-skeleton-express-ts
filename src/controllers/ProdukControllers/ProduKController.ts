import { ProdukNotFoundException } from '@/entities/exceptions/Produk/ProdukNotFoundException';
import { IServiceManager } from '@/services/contracts/IServiceManager';
import express from 'express';
export class ProdukController {
    static inisiasiController(app:express.Express, service:IServiceManager):void {
        // get id
        app.get('/api/produk', async (req, res) => {
            //req.body.id
            const produks = await service.Produk.Find("");
            if (produks == null) {
                throw new ProdukNotFoundException("");
            }
        })
    }
}