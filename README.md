# Portal Layanan Mandiri & Aplikasi Internal
### Bagian Organisasi Setda Kab. Muaro Jambi

Dashboard portal modern dengan konsep *Single-Page Application* dan *Glassmorphism* untuk menyatukan akses seluruh aplikasi internal (Apps Script, Spreadsheet, Streamlit, dan regulasi). Portal ini dilengkapi dengan **integrasi Google Sheets**, sehingga Anda dapat menambahkan, mengedit, atau menghapus link menu secara dinamis tanpa perlu menulis kode!

---

## Fitur Utama

1. **Integrasi Google Sheets Dinamis**: Menu dashboard diambil secara real-time dari spreadsheet Anda. Cukup edit baris di Google Sheets, dan portal akan ter-update untuk semua orang!
2. **Offline & Local Database Fallback**: Jika koneksi terputus, salah memasukkan ID, atau hak akses spreadsheet belum dibuka, portal akan mendeteksi masalah tersebut dan secara otomatis memuat 12 menu default bawaan secara lokal.
3. **Integrated Fullscreen Iframe Viewer**: Membuka aplikasi (seperti Apps Script dan Google Spreadsheet) secara fullscreen langsung di dalam portal tanpa meninggalkan halaman utama. Lengkap dengan kontrol navigasi (Kembali, Muat Ulang, Buka di Tab Baru).
4. **Pencarian & Filter Kategori**: Filter cepat berdasarkan kata kunci pencarian dan kategori (Aplikasi, Kepegawaian, Data, Regulasi).
5. **Smart Timeout Fallback**: Jika aplikasi eksternal membatasi akses penyematan (*iframe blocking*), portal akan otomatis menawarkan tombol alternatif untuk membuka aplikasi di tab baru setelah 7 detik.

---

## Panduan Penyiapan Google Sheets (Database Menu)

Ikuti langkah-langkah berikut untuk mulai mengelola link menggunakan Google Sheets:

### Langkah 1: Salin Template Google Sheets
1. Buka tautan template berikut untuk menyalin format tabel:
   👉 **[Tautan Template Google Sheets](https://docs.google.com/spreadsheets/d/1X5031bY2bT46U_cM9aI-V6N0_rQ1t86Y4pB4iH6mBwQ/copy)**
2. Klik **Make a copy** (Buat salinan).

### Langkah 2: Struktur Kolom Spreadsheet
Pastikan format kolom di Spreadsheet Anda persis seperti berikut (jangan ubah urutan kolom):
- **Kolom A (ID)**: ID unik aplikasi (contoh: `simpel2`, `sianjab`, `espt`).
- **Kolom B (Nama)**: Nama aplikasi yang akan tampil di card.
- **Kolom C (Deskripsi)**: Penjelasan singkat fungsi aplikasi.
- **Kolom D (URL)**: Tautan langsung ke aplikasi (misal link Apps Script `/exec`, spreadsheet `pubhtml`, atau streamlit).
- **Kolom E (Kategori)**: Isi dengan salah satu nilai ini (huruf kecil semua): `aplikasi`, `kepegawaian`, `informasi`, atau `regulasi`.
- **Kolom F (Status)**: Badge status aplikasi. Isi dengan salah satu: `stabil`, `pengembangan`, atau `admin`.
- **Kolom G (Launch Mode)**: 
  - Tulis `iframe` jika ingin aplikasi terbuka di dalam viewer fullscreen portal.
  - Tulis `direct` jika aplikasi memblokir embed (seperti link edit Spreadsheet) agar otomatis terbuka di tab baru.
- **Kolom H (Icon Name)**: Pilih icon premium yang sesuai. Isi dengan salah satu kata kunci: `file`, `shield`, `chart`, `users`, `mail`, `eye`, `database`, `book`, atau `news`.

### Langkah 3: Bagikan Spreadsheet
1. Klik tombol **Share** (Bagikan) di pojok kanan atas Google Sheet Anda.
2. Di bagian *General access* (Akses umum), ubah dari *Restricted* (Dibatasi) menjadi **"Anyone with the link can view"** (Siapa saja yang memiliki link dapat melihat).
3. **PENTING**: Cukup setel sebagai *Viewer* (Pelihat), Anda tidak perlu menyetelnya sebagai Editor demi keamanan.

### Langkah 4: Hubungkan ke Portal
1. Salin ID Spreadsheet dari URL browser Anda. 
   - Contoh URL: `https://docs.google.com/spreadsheets/d/1p2XOwIdNdkH7qtvNghfCpnviojWE2s1DUXN1sA1w25M/edit`
   - ID Spreadsheet Anda adalah: `1p2XOwIdNdkH7qtvNghfCpnviojWE2s1DUXN1sA1w25M`
2. Buka Portal Web Anda di browser.
3. Klik tombol **Gigi Roda (Settings)** di pojok kanan atas.
4. Tempel (*paste*) ID Spreadsheet Anda ke kolom input yang tersedia.
5. Klik **Simpan & Sinkronkan**. Portal Anda sekarang terhubung secara live ke Google Sheets!

---

## Panduan Hosting & Deployment

Pilih salah satu metode di bawah ini untuk mempublikasikan portal Anda secara online dan gratis.

### Opsi 1: Hosting di GitHub Pages (Sangat Direkomendasikan)

#### Langkah-langkah:
1. **Buat Repository Baru di GitHub**:
   - Masuk ke akun GitHub Anda.
   - Buat repository baru, beri nama misalnya: `portal`.
   - Pilih visibilitas **Public**.

2. **Push Kode dari Komputer Anda**:
   Buka terminal di folder `/home/falcon/Documents/portal` lalu jalankan perintah berikut:
   ```bash
   git init
   git add .
   git commit -m "Initial commit portal bagor dengan google sheets"
   git remote add origin https://github.com/USERNAME-ANDA/NAMA-REPO-ANDA.git
   git branch -M main
   git push -u origin main
   ```

3. **Aktifkan GitHub Pages**:
   - Di halaman repository GitHub Anda, klik menu **Settings** > **Pages**.
   - Pada bagian **Branch**, pilih `main` dan `/ (root)`, lalu klik **Save**.
   - Tunggu 1 menit, portal Anda akan aktif di URL `https://username-anda.github.io/nama-repo-anda/`.

---

### Opsi 2: Hosting di Google Apps Script Web App

#### Langkah-langkah:
1. Buka [Google Apps Script](https://script.google.com/) dan buat proyek baru bernama `Portal Web`.
2. Ganti kode di `Code.js` dengan:
   ```javascript
   function doGet() {
     return HtmlService.createHtmlOutputFromFile('Index')
         .setTitle('Portal Layanan Mandiri Setda Muaro Jambi')
         .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
         .addMetaTag('viewport', 'width=device-width, initial-scale=1');
   }
   ```
3. Buat file HTML baru bernama `Index.html` di Apps Script.
4. Gabungkan file HTML, CSS, dan JS lokal Anda menjadi satu file di `Index.html`:
   - Salin isi dari `index.html` lokal.
   - Ganti baris `<link rel="stylesheet" href="style.css">` dengan:
     `<style>` lalu paste seluruh isi `style.css` Anda di sini, lalu tutup dengan `</style>`.
   - Ganti baris `<script src="app.js"></script>` dengan:
     `<script>` lalu paste seluruh isi `app.js` Anda di sini, lalu tutup dengan `</script>`.
5. Klik **Deploy > New Deployment**. Pilih **Web App**. Set *Execute as* sebagai `Me`, dan *Who has access* sebagai `Anyone`. Klik **Deploy**.

---

## Catatan Mengenai Link Apps Script
Agar aplikasi Apps Script Anda yang lain dapat dimuat secara mulus di dalam fullscreen viewer portal, pastikan fungsi `doGet()` di proyek Apps Script masing-masing aplikasi tersebut memiliki baris `.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)` seperti contoh di bawah ini:
```javascript
function doGet() {
  return HtmlService.createTemplateFromFile('index')
      .evaluate()
      .setTitle('Nama Aplikasi')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL); // PENTING!
}
```
Jika tidak ditambahkan, aplikasi akan diblokir oleh browser dari pemuatan iframe, namun jangan khawatir karena portal kita akan mendeteksinya secara otomatis setelah 7 detik dan menampilkan tombol alternatif untuk membukanya di tab baru.
