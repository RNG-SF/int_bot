# RNG Partner System — UI Prototype

Folder ini adalah implementasi awal **frontend mobile-first** untuk Partner / Referral / Creator System berdasarkan `RNG_SF_Partner_System_Master_Command.md`.

## Cara membuka

Buka `partner/index.html` melalui static server atau GitHub Pages.

Contoh:

```bash
python3 -m http.server 8000
```

Lalu buka `http://localhost:8000/partner/`.

## Yang sudah tersedia

- Overview partner
- Stable demo partner code
- Referral link dan tombol copy
- Statistik click, attribution, order, komisi, reward, dan saldo
- Daftar commission dengan status `PENDING` / `APPROVED`
- Creator submission dengan status review
- Form withdrawal demo dengan pemisahan saldo available
- Activity/audit-style feed
- Navigasi mobile-first
- Data demo tersimpan di `localStorage` agar UI dapat dicoba tanpa backend

## Batasan keamanan

Ini **belum merupakan sistem finansial production**. `localStorage` dapat diubah user dan tidak boleh dipercaya untuk:

- role/developer authorization
- payment verification
- harga atau commission
- saldo
- approval
- withdrawal
- creator metrics

Implementasi production harus mengganti data demo dengan backend dan database relasional, lalu menambahkan authentication, authorization, payment webhook verification, ledger immutable secara logika, idempotency, rate limiting, audit log server-side, dan review anti-fraud.

File existing tidak diubah agar HBD, ucapan, kalender, dan portal lama tetap aman.
