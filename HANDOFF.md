# HANDOFF DOCUMENT — FM DICTIONARY LANDING

**Date:** 2026-10-21T14:30:00+07:00  
**Repository:** `fm_dictionary_landing`  
**Current Milestone:** Initial Launch — Full Next.js 15 Standalone Landing Page with Framer Dark System & Three.js 3D  
**Target Next Session:** Remote GitHub repository connection, Vercel/Cloudflare Pages deployment & custom domain setup  

---

## 1. Executive Summary

Repository landing page độc lập của **FM Dictionary** đã được khởi tạo hoàn chỉnh tại `C:\Users\Admin\Documents\Github\fm_dictionary_landing` với chất lượng sản xuất cao:
- **Công nghệ cốt lõi:** Next.js 15.2.1, React 19, TypeScript 5, Tailwind CSS 3.4, Three.js 0.174, Lucide React.
- **Hệ thống thiết kế:** Framer Dark Futuristic (`DESIGN.md`), triệt tiêu hoàn toàn liên kết Supabase, chuẩn White Pill CTA trên nền đen sâu.
- **Visual 3D Three.js:** Khối lăng kính kỹ thuật thông minh (Architectural Prism) xoay theo parallax chuột với 90 vệ tinh dữ liệu phát quang và cơ chế dọn dẹp bộ nhớ WebGL an toàn.
- **7 Phân hệ trang chuẩn thương mại:** Trang chủ (`/`), Tính năng chuyên sâu (`/features`), Về chúng tôi (`/about`), Trung tâm hỏi đáp (`/faq`), Trang liên hệ (`/contact`), Chính sách quyền riêng tư (`/privacy`), Điều khoản dịch vụ (`/terms`), Trang 404 tùy chỉnh (`/not-found`).
- **Đa ngữ toàn diện:** Hỗ trợ chuyển đổi song ngữ tức thì (Tiếng Việt & English), lưu trạng thái vào `localStorage`.
- **Quản trị AI Agent:** Hệ thống `.agents/rules/` (`frontend.md`, `global.md`, `security.md`) và `.agents/skills/` (`taste`, `handoff`, `threejs-optimiser`, `seo-audit`) cùng tệp chỉ dẫn `AGENTS.md`.

---

## 2. Quality Gates & System Health

- **TypeScript Type Checker:** `npx tsc --noEmit` -> **0 errors**.
- **Production Build:** `npm run build` -> **12/12 static routes prerendered thành công 100%**.
- **Git Repository:** Nhánh `main`, remote `origin` (`https://github.com/ankhang0704/fm_dictionary_landing.git`), đã đồng bộ thành công.

---

## 3. Route Map & Checklists Verification

| Route | Mục Đích | Điểm Nổi Bật |
| :--- | :--- | :--- |
| `/` | Landing Page chính | 3D Hero Canvas, White Pill CTA, Social proof, Bento 4 lợi ích, Accordion FAQ, Bottom CTA. |
| `/features` | Tính năng chuyên sâu | 4 nhóm công năng theo công việc, quote kỹ sư MEP thực tế, outcome metrics, mockup trực quan. |
| `/about` | Câu chuyện sáng lập | Rào cản thuật ngữ MEP tại Việt Nam, tôn chỉ sản phẩm (Local-First, 0-Bloat), hồ sơ tác giả An Khang. |
| `/faq` | Trung tâm hỏi đáp | Tìm kiếm từ khóa thời gian thực, lọc 4 chủ đề, 3 cấp độ hỗ trợ (Form -> GitHub -> Email). |
| `/contact` | Kết nối & Hỗ trợ | Form chọn phân loại có xác thực client, phản hồi thành công, email & GitHub trực tiếp. |
| `/privacy` | Chính sách bảo mật | Tóm tắt 30s dễ hiểu, Local-First Hive, bảo mật micro, 0 cookie quảng cáo, quyền xóa dữ liệu. |
| `/terms` | Điều khoản dịch vụ | Giới hạn trách nhiệm công trường, bản quyền mã nguồn mở MIT License. |
| `/not-found` | Trang lỗi 404 | Khối nhận diện phát sáng, thanh tìm kiếm cứu hộ, 3 lối tắt điều hướng (Home, Features, Contact). |
| `/robots.txt` & `/sitemap.xml` | SEO Utilities | Tự động sinh bởi Next.js metadata routes. |

---

## 4. Next Session Action Items

- [x] Tạo repository mới trên GitHub: `https://github.com/ankhang0704/fm_dictionary_landing.git`
- [x] Đã liên kết remote `origin` và đẩy code lên nhánh `main`.
- [x] Cấu hình Static Export (`output: 'export'`) tối ưu riêng cho **Cloudflare Pages**, đã test build `out/` thành công.
- [ ] Kết nối repo lên Cloudflare Pages (Build command: `npm run build`, Output directory: `out`).
- [ ] Gắn custom domain (nếu có) và cập nhật link landing page vào `README.md` của `fm_dictionary_app`.
