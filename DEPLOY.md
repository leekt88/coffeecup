# Hướng Dẫn Deploy Lên Online Miễn Phí

Có nhiều cách để deploy ứng dụng React/Vite này lên online miễn phí. Dưới đây là các lựa chọn tốt nhất:

## 🚀 Cách 1: Vercel (Khuyên dùng - Dễ nhất)

### Ưu điểm:
- ✅ Miễn phí hoàn toàn
- ✅ Tự động deploy từ GitHub
- ✅ SSL tự động
- ✅ CDN toàn cầu
- ✅ Custom domain miễn phí
- ✅ Hỗ trợ Vite tốt nhất

### Các bước:

1. **Tạo GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/coffee-cup.git
   git push -u origin main
   ```

2. **Deploy lên Vercel:**
   - Truy cập: https://vercel.com
   - Đăng nhập bằng GitHub
   - Click "New Project"
   - Import repository của bạn
   - Vercel tự động detect Vite, không cần config gì thêm
   - Click "Deploy"
   - Xong! Bạn sẽ có URL như: `https://your-project.vercel.app`

### Cấu hình tự động:
Vercel tự động detect Vite, nhưng nếu cần, tạo file `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

---

## 🌐 Cách 2: Netlify

### Ưu điểm:
- ✅ Miễn phí
- ✅ Drag & drop deploy
- ✅ Tự động deploy từ GitHub
- ✅ SSL tự động

### Các bước:

1. **Build project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Truy cập: https://app.netlify.com
   - Đăng ký/đăng nhập
   - Kéo thả folder `dist` vào Netlify
   - Hoặc kết nối GitHub repository

3. **Tạo file `netlify.toml` (tùy chọn):**
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
   ```

---

## 📦 Cách 3: GitHub Pages

### Ưu điểm:
- ✅ Miễn phí hoàn toàn
- ✅ Tích hợp với GitHub
- ✅ URL: `username.github.io/repo-name`

### Các bước:

1. **Cài đặt gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Thêm script vào `package.json`:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://YOUR_USERNAME.github.io/coffee-cup"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Cấu hình GitHub:**
   - Vào Settings > Pages
   - Chọn branch `gh-pages` và folder `/root`

---

## ⚡ Cách 4: Cloudflare Pages

### Ưu điểm:
- ✅ Miễn phí
- ✅ Rất nhanh (CDN toàn cầu)
- ✅ SSL tự động

### Các bước:

1. **Truy cập:** https://pages.cloudflare.com
2. **Kết nối GitHub repository**
3. **Cấu hình:**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. **Deploy**

---

## 🎯 Cách 5: Surge.sh (Nhanh nhất)

### Ưu điểm:
- ✅ Miễn phí
- ✅ Deploy trong 30 giây
- ✅ URL: `your-project.surge.sh`

### Các bước:

1. **Cài đặt Surge:**
   ```bash
   npm install -g surge
   ```

2. **Build và deploy:**
   ```bash
   npm run build
   cd dist
   surge
   ```

3. **Làm theo hướng dẫn:**
   - Nhập email
   - Nhập domain (hoặc Enter để dùng domain mặc định)
   - Xong!

---

## 📝 Khuyến nghị

**Cho người mới bắt đầu:** Vercel hoặc Netlify (dễ nhất)
**Cho người muốn nhanh:** Surge.sh
**Cho người dùng GitHub nhiều:** GitHub Pages

---

## 🔧 Lưu ý khi deploy

1. **Đảm bảo build thành công:**
   ```bash
   npm run build
   ```

2. **Kiểm tra folder `dist`:**
   - Phải có file `index.html`
   - Phải có các file JS và CSS

3. **Nếu có lỗi routing:**
   - Thêm file `_redirects` trong `public/` (cho Netlify)
   - Hoặc cấu hình redirect trong hosting platform

---

## 🎨 Custom Domain (Miễn phí)

Tất cả các platform trên đều hỗ trợ custom domain miễn phí:
- Vercel: Settings > Domains
- Netlify: Domain settings
- GitHub Pages: Settings > Pages > Custom domain

---

Chúc bạn deploy thành công! 🚀

