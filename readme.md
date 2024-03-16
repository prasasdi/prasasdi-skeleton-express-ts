Rangka pikiran<br>
<br>
Mengimplementasi RestAPI pada TypeScript seperti apa yang saya pernah kerjakan pada projek .Net.<br>
Mengkonfigurasi IoC, Logger, ExceptionHandling, Repository, dan Layer Data Transferale Object, kecuali menggunakan ORM seperti LinQ pada Entity Framework milik .NET<br><br>

Untuk menjaga alur pengerjaan, dibuatlah langkah konstruksi bangunan secara berurutan seperti ini<br>
1. Inisiasi http server projek ExpressJS dengan TS
2. Inisiasi Logging dengan Winston dan Morgan (sebagai middleware)
3. Inisiasi Inversify untuk implementasi IoC pada projek <br>
3.1 Konfigurasi scoped service Logger membuat Interface dan Implementasinya<br>
3.2 Konfigurasi LoggerMiddleware sebagai MiddlewareFactory dengan menggunakan servce Logger dari kontainer<br>
4. Inisiasi ErrorHandler dengan Express<br>
4.1 Konfigurasi ErrorHandler sebagai middleware<br>
4.2 Coba dengan throw error dari salah satu route sementara<br>
5. Inisiasi Model, Services, Controllers<br>
5.1 Buat Database Context dan Servicenya<br>
5.2 Konfigurasi Context dalam IoC<br>

Cara pakai
