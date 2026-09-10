# Quy trình tạo & triển khai bài trắc nghiệm Toán học

Mỗi khi người dùng yêu cầu tạo bài trắc nghiệm (HTML/CSS/JS):

1. **Sinh mã trắc nghiệm & Tích hợp Webhook Chấm điểm n8n:**
   - Viết hoàn thiện giao diện HTML/CSS/JS (tích hợp KaTeX hiển thị công thức, giao diện thân thiện, tương tác chọn đáp án, nộp bài, chấm điểm và lời giải chi tiết).
   - Có ô nhập họ tên học sinh với `id="input-ten"` (mặc định nếu để trống: "Học sinh ẩn danh").
   - Nút "Nộp bài" bắt buộc có `id="btn-nop-bai"`.
   - Mỗi câu hỏi phải định nghĩa trường `skill` (kỹ năng/chuyên đề tương ứng).
   - Trong hàm chấm điểm, tự động tính toán:
     - `diem_so`: Tổng điểm bài làm (thang điểm 10).
     - `mang_cau_sai`: Mảng chứa các chuỗi `skill` của các câu bị làm sai.
   - Bắt buộc gắn sự kiện cho nút `btn-nop-bai` gửi dữ liệu về máy chủ Integra qua Webhook n8n:
     ```javascript
     const N8N_WEBHOOK_URL = "http://localhost:5678/webhook-test/cham-diem-integra";

     document.getElementById('btn-nop-bai').addEventListener('click', async function() {
         const tenHocSinh = document.getElementById('input-ten') ? document.getElementById('input-ten').value : "Học sinh ẩn danh";
         const tenBaiThi = document.title || "Bài kiểm tra Toán"; 
         
         const payload = {
             hoc_sinh: tenHocSinh,
             bai_thi: tenBaiThi,
             diem: diem_so, 
             thoi_gian_nop: new Date().toLocaleString('vi-VN'),
             ky_nang_sai: mang_cau_sai 
         };

         const btn = document.getElementById('btn-nop-bai');
         const originalText = btn.innerHTML;
         btn.innerHTML = "Đang xử lý...";
         btn.disabled = true;

         try {
             const response = await fetch(N8N_WEBHOOK_URL, {
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json' },
                 body: JSON.stringify(payload)
             });

             if (response.ok) {
                 const n8n_data = await response.json();
                 alert(`Nộp bài thành công!\nĐiểm của em: ${diem_so}\n\nNhận xét từ Integra Academy:\n${n8n_data.nhan_xet}`);
             } else {
                 alert("Có lỗi đường truyền khi nộp bài. Vui lòng thử lại.");
             }
         } catch (error) {
             alert("Đã ghi nhận điểm: " + diem_so + ". (Không thể kết nối đến máy chủ AI nhận xét).");
         } finally {
             btn.innerHTML = originalText;
             btn.disabled = false;
         }
     });
     ```

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
