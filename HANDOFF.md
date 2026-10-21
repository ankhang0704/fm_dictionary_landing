# HANDOFF DOCUMENT — FM DICTIONARY LANDING

**Date:** 2026-10-21T23:08:00+07:00  
**Repository:** `fm_dictionary_landing`  
**Current Milestone:** Apple SVG Icon Architecture Standardized (`AppleIcon.tsx` & `public/icons/apple.svg`), Initial Load Performance Fix (Deferred 3D Hydration), Design Taste Frontend Audit (0 Fail / 0 Warn), Rich 60fps Scroll Reveal & Interactive Counter Animations across all 7 Routes + 404  
**Target Next Session:** Custom domain DNS propagation (`fm-dictionary.dev` / `fmdictionary.com`) & Cloudflare Pages deployment  

---

## 1. Executive Summary

Trang landing page độc lập của **FM Dictionary** tại `C:\Users\Admin\Documents\Github\fm_dictionary_landing` đã hoàn tất khắc phục triệt để lỗi SVG Apple và nâng cấp toàn bộ hệ thống giao diện:

### 1. Sửa Triệt Để Lỗi Biểu Tượng SVG Apple ([`AppleIcon.tsx`](file:///c:/Users/Admin/Documents/Github/fm_dictionary_landing/src/components/AppleIcon.tsx)):
- **Nguyên nhân lỗi cũ:**
  1. Các đoạn mã SVG inline cũ sử dụng path vẽ với viewBox `0 0 170 170` bị lệch tâm tọa độ, dẫn đến phần đáy quả táo bị cắt cụt (clipped) và cuống lá bị xô lệch trên các kích thước nhỏ (14px - 16px).
  2. Tệp `public/icons/apple.svg` cũ có thuộc tính `width="814" height="1000"` nhưng **thiếu hoàn toàn thuộc tính `viewBox`**, khiến trình duyệt không thể co giãn vector theo tỷ lệ CSS.
- **Giải pháp chuẩn hóa:**
  1. Xây dựng component chuẩn vector tái sử dụng [`src/components/AppleIcon.tsx`](file:///c:/Users/Admin/Documents/Github/fm_dictionary_landing/src/components/AppleIcon.tsx) theo chuẩn SimpleIcons (`viewBox="0 0 24 24"`), căn giữa hoàn hảo, hỗ trợ `fill="currentColor"` và co giãn sắc nét từ 12px đến 64px.
  2. Cập nhật lại toàn bộ các nút tải App Store trên hệ thống: [`Navbar.tsx`](file:///c:/Users/Admin/Documents/Github/fm_dictionary_landing/src/components/Navbar.tsx) (desktop & mobile drawer), [`page.tsx`](file:///c:/Users/Admin/Documents/Github/fm_dictionary_landing/src/app/page.tsx) (Hero CTA & Bottom CTA), [`about/page.tsx`](file:///c:/Users/Admin/Documents/Github/fm_dictionary_landing/src/app/about/page.tsx), [`features/page.tsx`](file:///c:/Users/Admin/Documents/Github/fm_dictionary_landing/src/app/features/page.tsx), [`AppScreenshotsShowcase.tsx`](file:///c:/Users/Admin/Documents/Github/fm_dictionary_landing/src/components/AppScreenshotsShowcase.tsx) và [`Footer.tsx`](file:///c:/Users/Admin/Documents/Github/fm_dictionary_landing/src/components/Footer.tsx).
  3. Bổ sung `viewBox="0 0 24 24"` và chuẩn hóa mã nguồn tệp asset `public/icons/apple.svg`.

### 2. Tối Ưu Tốc Độ Tải Lần Đầu (Deferred 3D Hydration):
- Tách thư viện Three.js thành client chunk tải nền bất đồng bộ (`next/dynamic` với `ssr: false`).
- Khung chờ CAD Blueprint Shimmer xuất hiện ngay lập tức trong 0ms.
- Mô hình 3D tháp cao ốc chuyển đổi êm ái bằng hiệu ứng fade-in điện ảnh (`transition-opacity duration-700 ease-out`) ngay khi khung hình WebGL đầu tiên sẵn sàng.

### 3. Audit Toàn Diện Theo `/design-taste-frontend` (0 FAIL, 0 WARN):
- Đạt kết quả kiểm định tuyệt đối **0 FAIL, 0 WARN** trên toàn bộ 12 tệp giao diện với `taste-skill lint`.
- Xóa bỏ toàn bộ bóng mờ nhân tạo `shadow-sm`, loại bỏ đường kẻ `border-y` rườm rà, chuẩn hóa `transition-transform transition-opacity` chạy 100% trên GPU.

### 4. Hệ Thống Hiệu Ứng Động 60fps Đã Triển Khai:
- **`AnimatedCounter.tsx`:** Bộ đếm số tự động nhảy mượt mà khi cuộn tới phần thông số trên trang chủ.
- **`RevealOnScroll.tsx`:** Hiệu ứng trượt nổi nhẹ nhàng khi cuộn trang áp dụng trên 7 trang nội dung (`/`, `/features`, `/about`, `/faq`, `/contact`, `/terms`, `/privacy`) và trang 404 (`_not-found`).
- **Spotlight Cards:** Vầng sáng điện tử xanh chuyển động theo chuột người dùng.
- **Accordion tương tác:** Đóng/mở câu hỏi FAQ mượt mà với bộ lọc tìm kiếm tức thì.

---

## 2. Quality Gates & Verification Record

- **taste-skill Linter (`node .agents/skills/taste-skill/scripts/lint.mjs src/app`):** **0 FAIL, 0 WARN**.
- **TypeScript Compiler (`npx tsc --noEmit`):** **0 errors** (Exit code 0).
- **ESLint (`npm run lint`):** **0 errors, 0 warnings** (Exit code 0).
- **Production Static Build (`npm run build`):** **12/12 static HTML routes exported** thành công ra `out/`.
