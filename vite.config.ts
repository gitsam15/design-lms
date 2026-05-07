# ✅ Checklist Deploy - Telkom University LMS

## Pre-Deployment Checklist

### 1. File Penting ✅
- [x] `index.html` - Entry point HTML
- [x] `src/main.tsx` - React entry point
- [x] `vercel.json` - Vercel configuration
- [x] `.gitignore` - Git ignore rules
- [x] `package.json` - Dependencies & scripts
- [x] `pnpm-lock.yaml` - Lock file
- [x] `README.md` - Dokumentasi
- [x] `DEPLOY_QUICK_START.md` - Panduan deploy

### 2. Build Test ✅
- [x] Local build berhasil (`pnpm run build`)
- [x] Output directory: `dist/`
- [x] Assets generated successfully

### 3. Git Repository
- [ ] Repository GitHub sudah dibuat
- [ ] Remote origin sudah ditambahkan
- [ ] Code sudah di-push ke main branch

### 4. Vercel Setup
- [ ] Akun Vercel sudah dibuat
- [ ] Connected dengan GitHub
- [ ] Project sudah di-import
- [ ] Deployment sukses

## Post-Deployment Checklist

### 1. Functional Testing
- [ ] Halaman login dapat diakses
- [ ] Login berhasil (test dengan kredensial dummy)
- [ ] Navigasi antar halaman berfungsi
- [ ] Home page menampilkan data dengan baik
- [ ] Course details dapat dibuka
- [ ] Assignment upload berfungsi
- [ ] Notifications dapat dibuka
- [ ] Profile page menampilkan data user
- [ ] Settings page dapat edit profile
- [ ] Dark mode toggle berfungsi
- [ ] Logout redirect ke login page

### 2. Responsive Testing
- [ ] Mobile view (iPhone 11 size)
- [ ] Tablet view
- [ ] Desktop view
- [ ] Bottom navigation responsive
- [ ] Forms responsive

### 3. Performance
- [ ] Page load < 3 detik
- [ ] Navigasi smooth tanpa lag
- [ ] Images load dengan baik
- [ ] Dark mode transition smooth

### 4. Browser Compatibility
- [ ] Chrome/Edge (Desktop)
- [ ] Safari (Desktop)
- [ ] Chrome (Mobile)
- [ ] Safari (iOS)

## Commands Reference

```bash
# Test build lokal
pnpm run build

# Preview build
pnpm preview

# Git commands
git add .
git commit -m "Deploy: Telkom University LMS"
git push

# Vercel CLI (optional)
vercel --prod
```

## Troubleshooting

### Build Failed?
1. Check `pnpm run build` locally
2. Review error logs di Vercel
3. Pastikan semua dependencies ter-install

### 404 Error?
1. Check `vercel.json` rewrites
2. Pastikan routing configuration benar

### Styling Issues?
1. Check Tailwind CSS loading
2. Verify theme.css imported
3. Check dark mode localStorage

## Success Criteria ✅

Deploy dianggap sukses jika:
- ✅ Build berhasil tanpa error
- ✅ URL deployment accessible
- ✅ Login page muncul dengan benar
- ✅ Dapat navigate ke semua halaman
- ✅ Dark mode berfungsi
- ✅ Responsive di mobile

---

**Selamat! Aplikasi LMS Telkom University siap digunakan! 🎉**
