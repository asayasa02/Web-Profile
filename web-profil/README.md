# Web Profil Pribadi — Landing Page

Website statis satu halaman (HTML, CSS, JS) — tema putih, pink, kuning, dengan navbar yang langsung scroll ke tiap bagian.

## Struktur File
```
├── index.html           → seluruh halaman (Beranda, Tentang, Keahlian, Portofolio, Prestasi, Kontak)
├── css/style.css         → semua gaya visual
├── js/script.js          → menu mobile, scrollspy navbar, progress bar, animasi, tab portofolio
└── assets/portfolio/     → taruh foto proyek kamu di sini
```

## Bagian di dalam `index.html`
- `#beranda` → hero + intro singkat + marquee skill berjalan
- `#tentang` → cerita singkat + tabel biodata (nama, kelas, domisili, pendidikan, jurusan, GitHub)
- `#keahlian` → bahasa pemrograman, framework, database, tools, desain, skill lain
- `#portofolio` → tab Web (3 proyek) & Figma (3 proyek)
- `#prestasi` → timeline prestasi/kompetisi & pengalaman organisasi
- `#kontak` → WhatsApp, Instagram, GitHub, Gmail

Navbar otomatis menandai menu yang sedang aktif sesuai bagian yang sedang kamu lihat (scrollspy).

## Cara Mengisi Konten
Cari komentar `<!-- GANTI: ... -->` di `index.html` — itu penanda bagian yang perlu kamu ubah, di antaranya:
- Nama, kelas, domisili, pendidikan, jurusan, link GitHub, foto profil.
- Pill skill di tiap kartu keahlian (tambah/hapus `<span class="pill">...</span>`).
- Judul, deskripsi, link, dan foto tiap kartu proyek portofolio.
- Tahun, judul, dan deskripsi tiap item prestasi/organisasi.
- Nomor WA, username Instagram/GitHub, dan alamat Gmail.

### Memasang foto
Simpan foto di folder `assets/` (misalnya `assets/foto-profil.jpg`, `assets/portfolio/web-1.jpg`), lalu ganti:
```html
<span class="placeholder-text">TARUH FOTO...</span>
```
menjadi:
```html
<img src="assets/foto-profil.jpg" alt="Foto Nama Kamu">
```

## Deploy ke GitHub Pages
1. Buat repository baru di GitHub, misalnya `profil-saya`.
2. Upload semua file & folder ini ke repository tersebut (lewat GitHub Desktop, `git push`, atau upload manual di web GitHub).
3. Masuk ke **Settings → Pages** pada repository.
4. Pada bagian **Source**, pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
5. Tunggu 1–2 menit, website kamu akan aktif di:
   `https://username-github-kamu.github.io/profil-saya/`

Selamat mencoba! ✨
