# Thực hành – Sử dụng màu sắc trong trang web

Đây là **trang minh họa mới**, được xây dựng nhằm đáp ứng bài thực hành CodeGym; **không phải** bản sửa trực tiếp file `Pra.zip` gốc. File ZIP gốc tham chiếu: https://github.com/codegym-vn/democodegym/blob/9cfdb957dc5976cce341eaa266bd2cb3b5aa8a0e/web/Pra.zip

## Cách chạy

- Giải nén thư mục.
- Mở thư mục trong Visual Studio Code.
- Nhấp chuột phải `index.html` → **Open with Live Server** (hoặc nhấp đúp `index.html`).
- Trên đầu trang chọn **Xem màu tím** để mở phiên bản màu thứ hai.

Không cần cài thư viện hoặc cơ sở dữ liệu, website chạy offline. Nút **Xem trước sản phẩm** mở hộp thoại xem trước.

## Cấu trúc

```text
web-phoi-mau-don-sac/
├── index.html        # Bản màu xanh theo yêu cầu đề
├── mau-khac.html     # Bản phối đơn sắc màu tím (bước 8)
├── style.css         # Các biến màu CSS và giao diện responsive
├── script.js         # Hộp thoại xem trước sản phẩm
├── assets/           # SVG minh họa sản phẩm (đều nằm trong thư mục)
└── anh-minh-chung/   # Ảnh chụp hai trang web
```

## Đối chiếu yêu cầu

| Bước | Áp dụng |
|---|---|
| 1 | Xác định màu xanh chủ đạo `#00ADEE` |
| 2 | Nền chính `.hero`, `.statement` dùng `#00BFF2` |
| 3 | Khu ON SALE/PREVIEW `.sale-banner` dùng `#00ADEE` |
| 4 | Nền khu vực nội dung `.products-section` dùng `#8DD7F7` |
| 5 | Footer `.site-footer` dùng `#C6E9FA` |
| 6 | Chữ toàn trang màu đen `#000000` (nút sử dụng nền sáng, viền đen) |
| 7 | Chạy `index.html` bằng Live Server |
| 8 | `mau-khac.html` – bảng màu đơn sắc tím |

### Bảng màu xanh

- Bậc 1: `#00ADEE`
- Bậc 2: `#00B2EF`
- Bậc 4: `#00BFF2`
- Bậc 7: `#8DD7F7`
- Bậc 9: `#C6E9FA`

### Bảng màu tím (lựa chọn khác)

- Bậc 1: `#7544D4`
- Bậc 2: `#915CE9`
- Bậc 4: `#B79AFF`
- Bậc 7: `#DBC9FF`
- Bậc 9: `#F2EAFE`

## Đưa lên GitHub

1. Tạo public repository tên `thuc-hanh-phoi-mau-don-sac` trên GitHub (không chọn tạo README nếu muốn push trực tiếp).
2. Mở Terminal trong thư mục dự án rồi chạy:

```bash
git init
git add .
git commit -m "Hoan thanh thuc hanh phoi mau don sac"
git branch -M main
git remote add origin https://github.com/TEN_TAI_KHOAN/thuc-hanh-phoi-mau-don-sac.git
git push -u origin main
```

Thay `TEN_TAI_KHOAN` bằng tài khoản GitHub của mình. Nộp link dạng `https://github.com/TEN_TAI_KHOAN/thuc-hanh-phoi-mau-don-sac`.

Có thể triển khai GitHub Pages từ Settings → Pages → Branch `main` → `/ (root)` để có link xem trang.
