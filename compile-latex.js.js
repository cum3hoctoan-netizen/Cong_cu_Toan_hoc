const fs = require('fs');
const { execSync } = require('child_process');

function compileDualPDF(texCode, baseFileName = "Integra_PhieuHocTap") {
    try {
        // --- LUỒNG 1: TẠO BẢN CHO HỌC SINH (KHÔNG ĐÁP ÁN) ---
        // Đảm bảo \True là rỗng
        let studentCode = texCode.replace(/\\providecommand{\\True}{.*}/g, "\\providecommand{\\True}{}");
        const studentTexPath = `${baseFileName}_HocSinh.tex`;
        fs.writeFileSync(studentTexPath, studentCode, 'utf8');
        
        console.log("Đang biên dịch bản Học Sinh...");
        execSync(`pdflatex -interaction=nonstopmode ${studentTexPath}`);

        // --- LUỒNG 2: TẠO BẢN CHO GIÁO VIÊN (CÓ ĐÁP ÁN) ---
        // Thay thế \True bằng lệnh bôi đỏ
        let teacherCode = texCode.replace(
            /\\providecommand{\\True}{.*}/g, 
            "\\renewcommand{\\True}{\\color{red}\\textbf{\\underline{X}} }" // Khoanh đỏ/Đánh dấu X đỏ
        );
        
        // Tùy chỉnh thêm: Hiện đáp án phần trả lời ngắn màu đỏ
        teacherCode = teacherCode.replace(
            /\\newcommand{\\shortans}\[2\]\[\]\{.*\\framebox\[2.4cm\]\{\\rule\{0pt\}\{1.1em\}#2\}.*\}/g,
            "\\newcommand{\\shortans}[2][]{\\par\\smallskip\\noindent\\textbf{Đáp số:} \\dotfill\\ \\framebox[2.4cm]{\\rule{0pt}{1.1em}\\color{red}\\textbf{#2}}\\par}"
        );

        const teacherTexPath = `${baseFileName}_GiaoVien.tex`;
        fs.writeFileSync(teacherTexPath, teacherCode, 'utf8');
        
        console.log("Đang biên dịch bản Giáo Viên...");
        execSync(`pdflatex -interaction=nonstopmode ${teacherTexPath}`);

        return `✅ Hoàn tất! Đã xuất 2 file PDF: ${baseFileName}_HocSinh.pdf và ${baseFileName}_GiaoVien.pdf`;
    } catch (error) {
        return `Lỗi: ${error.message}`;
    }
}