# HANDOFF DOCUMENT — FM DICTIONARY LANDING

**Date:** 2026-11-02T08:25:00+07:00  
**Repository:** `fm_dictionary_landing`  
**Current Milestone:** Complete Overhaul of Support Page into Interactive Engineering Operations & Diagnostics Hub ([`/support`](file:///c:/Users/Admin/Documents/Github/fm_dictionary_landing/src/app/support/page.tsx)), Restored Global Footer, 100% Anti-Slop Verified (0 FAIL / 0 WARN)  
**Target Next Session:** Custom domain DNS propagation (`fm-dictionary.dev` / `fmdictionary.com`) & Cloudflare Pages deployment verification  

---

## 1. Executive Summary

Trang landing page độc lập của **FM Dictionary** tại `C:\Users\Admin\Documents\Github\fm_dictionary_landing` (đang host tại [fm-dictionary.pages.dev](https://fm-dictionary.pages.dev/)) đã hoàn tất đợt tái thiết kế đột phá cho trang Hỗ Trợ ([`/support`](file:///c:/Users/Admin/Documents/Github/fm_dictionary_landing/src/app/support/page.tsx)), biến một trang tĩnh đơn điệu thành một **Trung Tâm Vận Hành & Chẩn Đoán Kỹ Thuật (Engineering Operations & Support Hub)** mang lại trải nghiệm WOW đỉnh cao:

### 1. Tái Thiết Kế Toàn Diện Trang Hỗ Trợ ([`support/page.tsx`](file:///c:/Users/Admin/Documents/Github/fm_dictionary_landing/src/app/support/page.tsx)):
- **Bộ Soạn Yêu Cầu Hỗ Trợ Trực Quan (Interactive Ticket Dispatcher):**
  - Cho phép người dùng chọn phân loại vấn đề (Cài đặt APK/iOS, Báo cáo lỗi kỹ thuật, Góp ý thuật ngữ MEP, Câu hỏi khác).
  - Tùy chọn nhập dòng máy (iPhone, Samsung Galaxy, Xiaomi...) để tăng tốc độ phân tích sự cố.
  - Tự động tạo cấu trúc email hoàn chỉnh và mở ứng dụng thư với một cú nhấp (`mailto:`).
  - Tích hợp nút sao chép địa chỉ email `ankhang.nguyen0704@gmail.com` với hiệu ứng phản hồi xúc giác.
- **4 Thẻ Chẩn Đoán Thực Địa Tự Phục Vụ (Self-Service Engineering Guides):**
  1. *Cài đặt Android APK:* Hướng dẫn xử lý cảnh báo Play Protect và tải trực tiếp từ Google Drive.
  2. *Bộ nhớ ngoại tuyến (Hive DB):* Cơ chế lưu trữ 100% cục bộ, không cần mạng dưới trạm biến áp/chiller.
  3. *Âm thanh phòng thu & Micro:* Hướng dẫn cấp quyền Microphone để luyện phát âm IPA chuẩn kép UK/US.
  4. *Đề xuất thuật ngữ MEP:* Hướng dẫn kỹ sư đóng góp bản vẽ và thuật ngữ O&M mới.
- **Hộp Cài Đặt Ứng Dụng Tức Thì:** Lối tắt trực tiếp tải qua Apple App Store và link Google Drive APK chính thức.
- **Kích Hoạt Footer Toàn Cục:** Loại bỏ điều kiện ẩn footer trên `/support` trong [`Footer.tsx`](file:///c:/Users/Admin/Documents/Github/fm_dictionary_landing/src/components/Footer.tsx), mang lại sự liền mạch và đồng bộ 100% trên toàn website.

### 2. Chuẩn Hóa Bản Sắc Màu Kỹ Thuật (Strict Technical Blue Accent):
- Tập trung 100% vào dải màu xanh kỹ thuật (`accent-blue: #0099ff / #0080e6`, `cyan: #38bdf8`), loại bỏ các màu sắc lệch tông (hồng rose, tím magenta, cam neon) ở các huy hiệu và tab tính năng.
- Tinh chỉnh dải màu nền dark canvas sang sắc thái chiều sâu kỹ thuật sang trọng (`#08090d` / `#11141c`), cải thiện độ tương phản và khả năng đọc tài liệu MEP.

### 3. Thiết Kế Flagship Titanium Device Chassis Cho Hero ([`page.tsx`](file:///c:/Users/Admin/Documents/Github/fm_dictionary_landing/src/app/page.tsx)):
- Thay thế ảnh chụp màn hình đơn điệu trôi nổi bằng một mô hình khung máy smartphone cao cấp (Titanium Smartphone Chassis) với viền kim loại phay xước, Dynamic Island, hiệu ứng phản chiếu bề mặt kính và vầng hào quang xanh kỹ thuật tỏa sáng phía sau.
- Tích hợp huy hiệu Telemetry thời gian thực: `⚡ Phản hồi < 0.2s • Hive DB Local` & `🔊 Phát âm chuẩn kép • UK (RP) & US (GA) (IPA)`.

### 4. Nâng Cấp Thanh Điều Hướng Nổi Cao Cấp ([`Navbar.tsx`](file:///c:/Users/Admin/Documents/Github/fm_dictionary_landing/src/components/Navbar.tsx)):
- Thiết kế thanh điều hướng dạng Floating Pill cố định độ rộng (`max-w-7xl`), loại bỏ hiện tượng co giật kích thước khi cuộn trang.
- Hiệu ứng kính mờ (Backdrop Blur), bo góc tròn hoàn hảo, bổ sung tag phiên bản `v1.1.3` cạnh logo, tích hợp nút chuyển đổi giao diện sáng/tối và nút song ngữ EN/VI với phản hồi mượt mà.

### 5. Tuyệt Đối Không Bịa Đặt Nội Dung (100% Grounded Content):
- Giữ nguyên toàn bộ 100% dữ liệu thực tế: 1,800+ thuật ngữ, 53 chuyên đề, kiến trúc ngoại tuyến Hive DB, thuật toán SM-2, chứng nhận quốc tế ASHRAE / NFPA / ISO 41001.
- Bảo toàn thông tin nhà sáng lập và đội ngũ: Chị Thúy Tạ (Project Owner & Lead Curator) và Nguyễn An Khang (Software Developer & Technical Support).

---

## 2. Quality Gates & Verification Record

- **taste-skill Linter (`node .agents/skills/taste-skill/scripts/lint.mjs src/app`):** **0 FAIL, 0 WARN** (Đạt tuyệt đối trên toàn bộ 16 tệp mã nguồn giao diện).
- **ESLint (`npm run lint`):** **0 errors, 0 warnings** (Exit code 0).
- **TypeScript Compiler (`npx tsc --noEmit`):** **0 type errors** (Exit code 0).
- **Production Static Build (`npm run build`):** **13/13 static HTML routes & assets exported** thành công ra `out/`.

---

## 3. Next Immediate Actions

1. Git commit & push toàn bộ các thay đổi lên remote repository `origin/main`.
2. Kiểm tra trực tiếp giao diện mới của trang Support trên Cloudflare Pages: [https://fm-dictionary.pages.dev/support](https://fm-dictionary.pages.dev/support).
