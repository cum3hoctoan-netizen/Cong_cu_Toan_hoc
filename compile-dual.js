const fs = require('fs');
const { execSync } = require('child_process');

function compileDualPDF(texCode, baseFileName = "Integra_PhieuHocTap") {
    try {
        let content = texCode;
        // Kiểm tra xem đầu vào là đường dẫn file hay là chuỗi mã code
        if (typeof texCode === 'string' && fs.existsSync(texCode)) {
            content = fs.readFileSync(texCode, 'utf8');
        }

        // =====================================================================
        // LUỒNG 1: TẠO BẢN CHO HỌC SINH (KHÔNG ĐÁP ÁN, SẠCH 100%)
        // =====================================================================
        // 1. Xóa cờ \True (để vô hiệu hóa đánh dấu đáp án đúng)
        let studentCode = content.replace(/\\providecommand{\\True}{.*}/g, "\\providecommand{\\True}{}");
        
        // 2. LỌC ĐÁP ÁN: Tìm tất cả các lệnh \shortans{đáp_án} và xóa rỗng thành \shortans{}
        // Biểu thức [^}]* sẽ quét toàn bộ nội dung bên trong cặp ngoặc nhọn và xóa đi.
        studentCode = studentCode.replace(/\\shortans\{[^}]*\}/g, "\\shortans{}");
        
        const studentTexPath = `${baseFileName}_HocSinh.tex`;
        fs.writeFileSync(studentTexPath, studentCode, 'utf8');
        
        console.log(`Đang biên dịch bản Học Sinh: ${studentTexPath}...`);
        execSync(`pdflatex -interaction=nonstopmode ${studentTexPath}`);
        execSync(`pdflatex -interaction=nonstopmode ${studentTexPath}`); // Chạy lần 2 để cập nhật tham chiếu

        // =====================================================================
        // LUỒNG 2: TẠO BẢN CHO GIÁO VIÊN (CÓ ĐÁP ÁN MÀU ĐỎ)
        // =====================================================================
        // 1. Kích hoạt cờ \True bằng một chữ X gạch chân màu đỏ
        let teacherCode = content.replace(
            /\\providecommand{\\True}{.*}/g, 
            "\\renewcommand{\\True}{\\color{red}\\textbf{\\underline{X}} }" 
        );
        
        // 2. ÉP ĐỊNH DẠNG ĐÁP ÁN NGẮN: Ghi đè lệnh \shortans ngay sau \begin{document}
        // Cách này an toàn và không bị lỗi so với việc dùng regex tìm kiếm nội dung định dạng cũ
        const overrideShortAns = "\\begin{document}\n\t\\renewcommand{\\shortans}[2][]{\\par\\smallskip\\noindent\\textbf{Đáp số:} \\dotfill\\ \\framebox[2.4cm]{\\rule{0pt}{1.1em}\\color{red}\\textbf{#2}}\\par}";
        teacherCode = teacherCode.replace(/\\begin\{document\}/, overrideShortAns);

        const teacherTexPath = `${baseFileName}_GiaoVien.tex`;
        fs.writeFileSync(teacherTexPath, teacherCode, 'utf8');
        
        console.log(`Đang biên dịch bản Giáo Viên: ${teacherTexPath}...`);
        execSync(`pdflatex -interaction=nonstopmode ${teacherTexPath}`);
        execSync(`pdflatex -interaction=nonstopmode ${teacherTexPath}`);

        return `✅ Hoàn tất! Đã xuất 2 file PDF:\n1. ${baseFileName}_HocSinh.pdf (Bản sạch)\n2. ${baseFileName}_GiaoVien.pdf (Bản đáp án)`;
    } catch (error) {
        return `❌ Lỗi biên dịch MiKTeX: ${error.message}\nVui lòng kiểm tra lại file mã LaTeX.`;
    }
}

// Bắt tham số từ dòng lệnh (Antigravity gọi)
const args = process.argv.slice(2);
if (args.length > 0) {
    const result = compileDualPDF(args[0], args[1]);
    console.log(result);
} else {
    console.log("Lỗi: Không nhận được mã LaTeX đầu vào.");
}