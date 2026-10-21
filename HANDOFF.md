# HANDOFF DOCUMENT — FM DICTIONARY LANDING

**Date:** 2026-10-21T18:55:00+07:00  
**Repository:** `fm_dictionary_landing`  
**Current Milestone:** Smart Building 3D Wireframe Overhaul, React Bits Motion Architecture, High-Performance Canvas & Animation Fixes, Ownership Correction (Thúy Tạ & Nguyễn An Khang), 100% Free Non-Profit Community Overhaul  
**Target Next Session:** Custom domain DNS propagation (`fm-dictionary.dev` / `fmdictionary.com`) & Cloudflare Pages deployment  

---

## 1. Executive Summary

Trang landing page độc lập của **FM Dictionary** tại `C:\Users\Admin\Documents\Github\fm_dictionary_landing` đã hoàn tất nâng cấp toàn diện và vượt qua đợt rà soát chất lượng chuyên sâu (Deep Review):

1. **Mô Hình 3D Cao Ốc Thông Minh (Three.js Hero Model Overhaul - `ThreeHeroCanvas.tsx`):**
   - Thay thế toàn bộ hình khối icosahedron trừu tượng trước đây bằng **Tòa cao ốc thông minh (Smart Building wireframe)** dạng kiến trúc đa tầng (Tiered High-Rise Tower).
   - Khối đế phân phối điện MSB, thân tháp thương mại, tầng kỹ thuật Chiller/AHU, tháp anten BMS telemetry với đèn tín hiệu nhấp nháy xanh lá (`#22c55e`).
   - Mạng lưới đường ống cơ điện & truyền thông BMS (`#0099ff`) kết nối xuyên suốt qua trục kỹ thuật trung tâm.
   - **Tối ưu hóa sâu:** Khắc phục triệt để lỗi nhân đôi vòng lặp `requestAnimationFrame` khi IntersectionObserver kích hoạt; thay thế `RingGeometry` tam giác bằng đường bao tròn mượt mà; kẹp giới hạn góc xoay chuột/cảm ứng tránh biến dạng khi cuộn trang; bổ sung sự kiện `touchend` đưa mô hình về tư thế chuẩn; giải phóng 100% bộ nhớ WebGL khi unmount.

2. **Lớp Hiệu Ứng Chuyển Động React Bits (Motion Layer):**
   - `DecryptedText.tsx`: Hiệu ứng giải mã ký tự số trên tiêu đề chính Hero ("Chinh Phục Tiếng Anh Quản Lý Tòa Nhà"), đồng bộ tức thì khi đổi ngôn ngữ EN/VI, tôn trọng chế độ `prefers-reduced-motion`, hỗ trợ kích hoạt khi vào màn hình (`animateOn="view"`), 0 lỗi ESLint `set-state-in-effect`.
   - `SpotlightCard.tsx`: Tối ưu hóa điều khiển DOM trực tiếp (Direct DOM manipulation) thay vì re-render React state liên tục, giúp loại bỏ 100% hiện tượng re-render giật lag cây component con (`InteractiveTermExplorer`, `Pillars`, `Features`); căn chỉnh lớp overlay `z-10` giúp ánh sáng tỏa tròn hiển thị chuẩn trên nền surface.
   - `MagneticButton.tsx`: Lực hút xúc giác nam châm (Magnetic cursor pull) trên các nút CTA chính (Framer White Pill), tự động nhận diện thiết bị chuột (`pointer: fine`), chạy mượt mà 60fps qua `translate3d`.

3. **Chuẩn Hóa Bản Quyền & Quyền Sở Hữu (Ownership & Licensing):**
   - **Chủ sở hữu & Định hướng dự án:** Chị **Thúy Tạ (Thuy Ta)**.
   - **Kỹ sư phát triển & Hỗ trợ kỹ thuật:** **Nguyễn An Khang** (`ankhang.nguyen0704@gmail.com`).
   - **Hình thức pháp lý:** **Dự án cộng đồng 100% Miễn phí phi lợi nhuận (100% Free Community Project)**, nhưng **KHÔNG PHẢI MÃ NGUỒN MỞ (NOT Open Source)**.
   - Đã rà soát và xóa sạch toàn bộ các từ khóa "Open Source", "Mã nguồn mở", "MIT License" trên tất cả các trang và component (`page.tsx`, `about/page.tsx`, `faq/page.tsx`, `privacy/page.tsx`, `terms/page.tsx`, `features/page.tsx`, `contact/page.tsx`, `Footer.tsx`, `layout.tsx`).

4. **Tích Hợp Liên Kết Apple App Store & Android APK:**
   - **iOS:** Tích hợp liên kết trực tiếp tới trang ứng dụng trên Apple App Store: `https://apps.apple.com/vn/app/fm-dictionary/id6774868353?l=vi`.
   - **Android:** Tải trực tiếp file APK kèm chú thích minh bạch: *"Bản APK trực tiếp (Sắp có trên Google Play Console)"*.
   - Thanh điều hướng (Navbar), Hero CTA, Showcase và Chân trang (Footer) đều có nút điều hướng rõ ràng cho cả hai nền tảng.

5. **Hiệu Chỉnh Văn Phong Thực Tế & Khiêm Tốn (Honest & Grounded Tone):**
   - Lược bỏ hoàn toàn các từ ngữ quảng cáo phóng đại ("thống trị", "tiên phong", v.v.).
   - Tập trung vào giá trị cốt lõi hữu ích cho kỹ sư hiện trường: 1,800+ thuật ngữ chuyên ngành chuẩn hóa ASHRAE/NFPA/ISO, phát âm chuẩn kép UK/US, chạy ngoại tuyến 100% trong phòng máy/tầng hầm không có sóng mạng.

---

## 2. Quality Gates & Verification Record

- **TypeScript Compiler (`npx tsc --noEmit`):** **0 errors** (Exit code 0).
- **ESLint (`npm run lint`):** **0 errors, 0 warnings** (Exit code 0).
- **taste-skill lint (`node .agents/skills/taste-skill/scripts/lint.mjs ./src`):** **0 FAIL, 5 WARN** (Chỉ giữ lại các cảnh báo hợp lệ về viền menu nổi).
- **Production Static Build (`npm run build`):** **12/12 static HTML routes exported** thành công với 0 lỗi.

---

## 3. Route Map & Component Architecture

| File / Component | Vai Trò & Tối Ưu Mới |
| :--- | :--- |
| `src/components/ThreeHeroCanvas.tsx` | Mô hình 3D Tòa cao ốc thông minh (Smart Building wireframe) với trục kỹ thuật trung tâm, đường ống cơ điện MEP, đèn cảm biến BMS telemetry, chống nhân đôi render loop, kẹp góc xoay chuột mượt mà. |
| `src/components/DecryptedText.tsx` | Component giải mã ký tự kiểu React Bits cho tiêu đề Hero, xử lý mượt mà chuyển đổi EN/VI, tôn trọng `prefers-reduced-motion`. |
| `src/components/SpotlightCard.tsx` | Component thẻ chiếu sáng tỏa tròn theo chuột, tối ưu hóa zero re-render DOM manipulation cho Term Explorer, Pillars, Features và CTA. |
| `src/components/MagneticButton.tsx` | Component nút bấm nam châm xúc giác 60fps qua `translate3d` cho CTA App Store và APK. |
| `src/components/Navbar.tsx` | Thanh điều hướng nổi tích hợp nút tải App Store, tải APK, chuyển đổi EN/VI. |
| `src/components/Footer.tsx` | Chân trang thông tin chủ sở hữu Thúy Tạ, lập trình viên Nguyễn An Khang (`ankhang.nguyen0704@gmail.com`), cam kết 100% miễn phí phi lợi nhuận. |
| `src/app/page.tsx` | Trang chủ với Hero DecryptedText, 3D Smart Building, Term Explorer Spotlight, và Bottom CTA. |
| `src/app/about/page.tsx` | Trang giới thiệu: Câu chuyện khởi nguồn từ thực địa, hồ sơ chị Thúy Tạ (Project Owner) và Nguyễn An Khang (Developer). |
| `src/app/terms/page.tsx` | Điều khoản sử dụng: Khẳng định dự án cộng đồng miễn phí 100%, bảo lưu bản quyền, không phải mã nguồn mở. |
| `src/app/faq/page.tsx` | Trung tâm hỏi đáp: Cập nhật tình trạng App Store (iOS) và Android APK, gỡ bỏ liên kết mã nguồn mở. |
| `src/app/contact/page.tsx` | Trang liên hệ: Gửi phản hồi tới ban dự án, thông tin liên hệ Thúy Tạ và Nguyễn An Khang. |
| `src/app/features/page.tsx` | Trang tính năng chi tiết: Tích hợp SpotlightCard trên toàn bộ thẻ tính năng và khối CTA. |
| `src/app/layout.tsx` | Root layout: Cập nhật tác giả (Thúy Tạ & Nguyễn An Khang), email hỗ trợ, metadata chuẩn SEO. |

---

## 4. Next Deployment Steps

1. Triển khai thư mục `out/` lên Cloudflare Pages hoặc Vercel Static.
2. Trỏ bản ghi CNAME / DNS tên miền `fm-dictionary.dev`.
3. Kiểm tra hiển thị thực tế trên thiết bị di động iOS Safari và Android Chrome.
