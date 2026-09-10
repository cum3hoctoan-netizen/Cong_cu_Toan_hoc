# Quy trình tạo & triển khai bài trắc nghiệm Toán học

Mỗi khi người dùng yêu cầu tạo bài trắc nghiệm (HTML/CSS/JS):

1. **Sinh mã trắc nghiệm:**
   - Viết hoàn thiện giao diện HTML/CSS/JS (tích hợp MathJax / KaTeX hiển thị công thức, giao diện thân thiện, tương tác chọn đáp án, nộp bài, chấm điểm và lời giải chi tiết).

2. **Gọi script triển khai tự động:**
   - Sử dụng script `deploy-web.js` với 3 tham số:
     - `[Khối mã HTML]` (hoặc đường dẫn tới file HTML)
     - `[Tên thư mục tương ứng lớp]` (VD: `To10_Web`, `To11_Web`, `To12_Web`, `TS10_Web`, `DGNL_Web`)
     - `[Tên bài học không dấu]` (VD: `bai_1_menh_de_toan_hoc`, `toan10_c1_b1_menh_de`)
   - Lệnh gọi:
     ```powershell
     node deploy-web.js <Khối mã HTML hoặc FilePath> <Thư mục lớp> <Tên bài không dấu>
     ```

3. **Trả về kết quả:**
   - Lấy link web Vercel từ kết quả chạy script (định dạng `https://cong-cu-toan-hoc.vercel.app/<Thư mục lớp>/<Tên bài>.html`).
   - Trả về link trực tiếp kèm lời dẫn gửi học sinh cho người dùng.
