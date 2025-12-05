# Hướng Dẫn Deploy Lên GitHub Pages

## 📋 Bước 1: Tạo GitHub Repository

1. Truy cập https://github.com và đăng nhập
2. Click nút **"New"** hoặc **"+"** → **"New repository"**
3. Đặt tên repository (ví dụ: `coffee-cup` hoặc `amazing-secomm-coffee`)
4. Chọn **Public** (GitHub Pages miễn phí chỉ cho public repo)
5. **KHÔNG** tích "Initialize with README" (vì bạn đã có code)
6. Click **"Create repository"**

## 📦 Bước 2: Khởi tạo Git và Push Code

Mở terminal trong thư mục project và chạy:

```bash
# Khởi tạo git (nếu chưa có)
git init

# Thêm tất cả files
git add .

# Commit
git commit -m "Initial commit: Amazing Secomm Coffee Cup SPA"

# Thêm remote (thay YOUR_USERNAME và REPO_NAME bằng thông tin của bạn)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push lên GitHub
git branch -M main
git push -u origin main
```

**Ví dụ:**
```bash
git remote add origin https://github.com/mcb-tlk/coffee-cup.git
```

## ⚙️ Bước 3: Cấu Hình Package.json

1. Mở file `package.json`
2. Tìm dòng `"homepage"` và thay `YOUR_USERNAME` và `coffee` bằng thông tin của bạn:

```json
"homepage": "https://YOUR_USERNAME.github.io/REPO_NAME"
```

**Ví dụ nếu repo tên là `coffee-cup`:**
```json
"homepage": "https://mcb-tlk.github.io/coffee-cup"
```

## 🔧 Bước 4: Cấu Hình Vite (Nếu repo không phải root)

Nếu repository của bạn **KHÔNG** phải là GitHub Pages root (username.github.io), bạn cần:

1. Mở file `vite.config.js`
2. Uncomment và cập nhật dòng `base`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/REPO_NAME/',  // Thay REPO_NAME bằng tên repo của bạn
})
```

**Ví dụ nếu repo tên là `coffee-cup`:**
```javascript
base: '/coffee-cup/',
```

**Lưu ý:** Nếu repo của bạn là `username.github.io` (root), thì **KHÔNG** cần set base, giữ nguyên như hiện tại.

## 🚀 Bước 5: Deploy

Chạy lệnh deploy:

```bash
npm run deploy
```

hoặc

```bash
yarn deploy
```

Lệnh này sẽ:
1. Tự động build project (`npm run build`)
2. Tạo branch `gh-pages`
3. Push code lên GitHub Pages

## ⚙️ Bước 6: Kích Hoạt GitHub Pages

1. Vào repository trên GitHub
2. Click **Settings** (cài đặt)
3. Scroll xuống phần **Pages** (bên trái)
4. Trong **Source**, chọn:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

## ✅ Bước 7: Kiểm Tra

Sau vài phút, truy cập:
```
https://YOUR_USERNAME.github.io/REPO_NAME
```

**Ví dụ:**
```
https://mcb-tlk.github.io/coffee-cup
```

## 🔄 Cập Nhật Website

Mỗi khi bạn thay đổi code và muốn cập nhật website:

```bash
git add .
git commit -m "Update: mô tả thay đổi"
git push
npm run deploy
```

## 🐛 Xử Lý Lỗi

### Lỗi: "fatal: A branch named 'gh-pages' already exists"

Giải pháp:
```bash
git push origin --delete gh-pages
npm run deploy
```

### Lỗi: Website không hiển thị đúng

1. Kiểm tra `base` trong `vite.config.js` đã đúng chưa
2. Kiểm tra `homepage` trong `package.json` đã đúng chưa
3. Đợi 5-10 phút để GitHub Pages cập nhật

### Lỗi: 404 khi truy cập

- Đảm bảo đã kích hoạt GitHub Pages trong Settings
- Kiểm tra URL có đúng format không
- Đợi vài phút để GitHub xử lý

## 📝 Checklist

- [ ] Đã tạo GitHub repository
- [ ] Đã push code lên GitHub
- [ ] Đã cập nhật `homepage` trong `package.json`
- [ ] Đã cập nhật `base` trong `vite.config.js` (nếu cần)
- [ ] Đã chạy `npm run deploy`
- [ ] Đã kích hoạt GitHub Pages trong Settings
- [ ] Đã kiểm tra website hoạt động

## 🎉 Xong!

Website của bạn đã online miễn phí trên GitHub Pages!

---

**Lưu ý:** 
- GitHub Pages miễn phí chỉ cho public repository
- Nếu muốn private repo, cần GitHub Pro ($4/tháng)
- Website sẽ có URL: `https://username.github.io/repo-name`

