//import express
import express from "express";

//init express router
const router = express.Router();

router.get('/biodata/:nama/:tempat/:lahir/:jk/:agama/:alamat/:telepon/:email/:hobi/:cita/:moto', (req, res) => {
    
    var nama = req.params.nama
    var tempat_lahir = req.params.tempat
    var tanggal_lahir = req.params.lahir
    var jk = req.params.jk
    var agama = req.params.agama
    var alamat = req.params.alamat
    var telepon = req.params.telepon
    var email = req.params.email
    var hobi = req.params.hobi
    var cita = req.params.cita
    var moto = req.params.moto

    res.send(
        'Nama : ' + nama + '<br>' +
        'Tempat_lahir : ' + tempat_lahir + '<br>' +
        'Tanggal_lahir : ' + tanggal_lahir + '<br>' +
        'Jenis Kelamin : ' + jk + '<br>' +
        'Agama : ' + agama + '<br>' +
        'Alamat : ' + alamat + '<br>' +
        'Telepon : ' + telepon + '<br>' +
        'Email : ' + email + '<br>' +
        'Hobi : ' + hobi + '<br>' +
        'Cita-cita : ' + cita + '<br>' +
        'Moto_hidup : ' + moto
    );

});
router.get('/aritmatika', (req, res) => {
    
    var bilangan1 = 10;
    var bilangan2 = 5;
    var tambah1 = bilangan1 + bilangan2;

    var kurang1 = 10;
    var kurang2 = 5;
    var tambah2 = kurang1 - kurang2;

    var kali1 = 10;
    var kali2 = 5;
    var tambah3 = kali1 * kali2;

    var bagi1 = 10;
    var bagi2 = 5;
    var tambah4 = bagi1 / bagi2;



    res.send(
        '<h3>Penjumlahan</h3>' +
        'Bilangan ke 1 : ' + bilangan1 + '<br>' +
        'Bilangan ke 2 : ' + bilangan2 + '<br>' +
        'Hasil : ' + tambah1 + '<br>' +
        '<hr>' +
        '<h3>Pengurangan</h3>' +
        'Bilangan ke 1 : ' + bilangan1 + '<br>' +
        'Bilangan ke 2 : ' + bilangan2 + '<br>' +
        'Hasil : ' + tambah2 + '<br>' +
        '<hr>' +
        '<h3>Perkalian</h3>' +
        'Bilangan ke 1 : ' + bilangan1 + '<br>' +
        'Bilangan ke 2 : ' + bilangan2 + '<br>' +
        'Hasil : ' + tambah3 + '<br>' +
        '<hr>' +
        '<h3>Pembagian</h3>' +
        'Bilangan ke 1 : ' + bilangan1 + '<br>' +
        'Bilangan ke 2 : ' + bilangan2 + '<br>' +
        'Hasil : ' + tambah4 + '<br>'
    );

});

router.get('/bangun_datar', (req,res) => {
    
    var sisi = 5;
    var jumlah1 = sisi * sisi;

    var p = 10;
    var t = 5;
    var lebar = 5;
    var jumlah2 = p * t * lebar;

    var alas = 10;
    var jumlah3 =  alas * t / 2;

    var v = 3.14;
    var r = 20;
    var jumlah4 = v * r * r;

    res.send(
        '<h3>Menghitung luas Persegi</h3>' + '<br>' +
        'Rumus Persegi adalah Sisi x Sisi :' + '<br>' +
        'Luas Perseginya adalah : ' + jumlah1 +  '<br>' + '<hr>' +

        '<h3>Menghitung luas Persegi Panjang</h3>' + '<br>' +
        'Rumus Persegi Panjang adalah Panjang x Tinggi x Lebar :' + '<br>' +
        'Luas Perseginya adalah : ' + jumlah2 +  '<br>' + '<hr>' +

        '<h3>Menghitung luas Segitiga</h3>' + '<br>' +
        'Rumus Persegi Panjang adalah 1/2 x Alas x Tinggi :' + '<br>' +
        'Luas Perseginya adalah : ' + jumlah3 +  '<br>' + '<hr>' +
        
        '<h3>Menghitung luas Lingkaran</h3>' + '<br>' +
        'Rumus Persegi Panjang adalah v x r2 :' + '<br>' +
        'Luas Perseginya adalah : ' + jumlah4 +  '<br>' 
    );
});

router.get('/biodatamu/:nama/:asal', (req, res) => {

    var nama = req.params.nama;
    var asal = req.params.asal;

    res.send(
        'Nama : ' + nama + '<br>' +
        'Tinggal : ' + asal + '<br>'
    );
});

router.get('/tes/:nama/:kelas/:pts/:pas', (req,res) => {

    var nama = req.params.nama;
    var kelas = req.params.kelas;
    var pts = parseInt(req.params.pts);
    var pas = parseInt(req.params.pas);
    var rapot = (pts + pas) / 2;

    let  keterangan;

    if (rapot >= 90) {
        keterangan='grade A'
    } else if (rapot >= 80) {
        keterangan='grade B'
    } else if (rapot >= 70) {
        keterangan='grade C'
    } else if (rapot >= 60) {
        keterangan='grade D'
    } else if (rapot >= 50) {
        keterangan='grade E'
    } else {
        keterangan='Belajar sing rajin!'
    }

    res.send(
        'Nama : '+ nama +'<br>' +
        'Kelas : '+ kelas +'<br>' +
        'Nilai PTS : '+ pts +'<br>' +
        'Nilai PAS : '+ pas +'<br>' +
        'Rapot : '+  rapot + '<br>' +
        'keterangan : ' + keterangan
    )
})

router.get('/biodata2/:nama/:tempat', (req, res) => {

    var nama = req.params.nama;
    var tempat_lahir = req.params.tempat;

    res.send(
        'Nama : ' + nama + '<br>' +
        'Tempat_lahir : ' + tempat_lahir + '<br>'
    )
})

router.get('/bersarang/:nama/:provinsi/:kota', (req, res) => {
    var nama = req.params.nama
    var provinsi = req.params.provinsi
    var kota = req.params.kota

    if(provinsi == "Jawa Barat"){
        if(kota == "Bandung"){
            var ket = nama + " Asli Orang Bandung";
        } else if(kota == "Garut"){
            var ket = nama + " Asli Orang Garut";
        } else if(kota == "Cimahi"){
            var ket = nama + " Asli Orang Cimahi";
        }else {
            var ket = "Lah kamu asal mana dah"
        }
    } else if(provinsi == "Jawa Tengah"){
        if(kota == "Semarang"){
            var ket = nama + " Asli Orang Semarang";
        } else if(kota == "Cilacap"){
            var ket = nama + " Asli Orang Cilacap";
        } else if(kota == "Solo"){
            var ket = nama + " Asli Orang Solo";
        } else {
            var ket = "Lah kamu asal mana dah"
        }
    } else if(provinsi == "Jawa Timur"){
        if(kota == "Madiun"){
            var ket = nama + " Asli Orang Madiun";
        } else if(kota == "Malang"){
            var ket = nama + " Asli Orang Malang";
        } else if(kota == "Kediri"){
            var ket = nama + " Asli Orang Kediri";
        } else {
            var ket = "Lah kamu asal mana dah"
        }
    } else {
        var ket = "Provinsi yang anda masukan tidak tersedia"
    }

    res.send(
        "nama : " + nama + "<br>" +
        "provinsi : " + provinsi + "<br>" +
        "kota : " + kota + "<br>" +
        "keterangan : " + ket
    )
})

router.get('/kasir/:nama/:tanggal/:jenis/:barang/:jumlah', (req, res) => {

//variabel
    var namaPmbli = req.params.nama;
    var tglBeli = req.params.tanggal;
    var jenisMkn = req.params.jenis;
    var namaPsn = req.params.barang;
    var jumlah = parseInt(req.params.jumlah);

//jenis
    if(jenisMkn == "makanan"){
        if(namaPsn == "seblak"){
            var harga = 25000
        } else if(namaPsn == "spageti"){
            var harga = 30000
        } else if(namaPsn == "burger"){
            var harga = 35000
        } else {
            var namaPsn = "minuman/makanan tidak tersedia"
        }
    } else if(jenisMkn == "minuman"){
        if(namaPsn == "air mineral"){
            var harga = 10000
        } else if(namaPsn == "lemon tea"){
            var harga = 20000
        } else if(namaPsn == "kopi"){
            var harga = 30000
        } else {
            var namaPsn = "minuman/makanan tidak tersedia"
        }
    } else {
        var jenisMkn = "anda tidak membeli makanan dan minuman"
    }

//perhitugan
    var total = (harga * jumlah);
    if(total > 100000){
        var diskon = (total) * 0.2;
    } else {
        var diskon = 0;
    }
    var totalPembayaran = total - diskon;

    res.send(
        `<h3> *Waroeng's Enjoy's* </h3>` + '<hr>' +
        'Nama Pembeli: ' + namaPmbli + '<br>' +
        'Tanggal Pembelian: ' + tglBeli + '<br>' +
        'Jenis: ' + jenisMkn + '<br>' + 
        'Nama Pesanan: ' + namaPsn + '<br>' +
        'Harga: ' + harga + '<br>' +
        'Jumlah: ' + jumlah + '<br>' + '<hr>' +
        'Total : ' + total + '<br>' +
        'Potongan 20%: ' + diskon + '<br>' +
        'Total Pembayaran: ' + totalPembayaran +
        '<p>---------------------- Terima Kasih ---------------------- </p>'
    )
})

//export defaul router
export default router;