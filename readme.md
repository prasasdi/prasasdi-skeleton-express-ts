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
5.1.a Buat Database Context dan Servicenya<br>
5.1.b Konfigurasi Context dalam IoC<br>
5.2.a Buat satu dulu Model atau Entities dari tiap use case<br>
5.2.b Buat Repository dan Interfacenya (pada contracts) dari enties, (jika 5.1.b sudah berhasil) konfigurasi scope ke container<br>
5.2.c Buat Service dan Interfacenya (pada service.contracts) dari entities, (jika 5.1.b sudah berhasil) konfigurasi scope ke container, inject dependensi Repository dan Logger<br>
5.2.d Buat Controller sesuai dengan Service beserta dengan Route juga konfigurasi Rutenya<br>
5.3 Tes<br>
6. Inisiasi test unit pada projek<br>

Cara pakai
