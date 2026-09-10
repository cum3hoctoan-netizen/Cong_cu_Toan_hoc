const fs = require('fs');
const { execSync } = require('child_process');

// Hàm nhận mã code từ Antigravity
function compileToPDF(texCode, fileName = "Integra_PhieuHocTap") {
    try {
        let content = texCode;
        if (typeof texCode === 'string' && fs.existsSync(texCode)) {
            content = fs.readFileSync(texCode, 'utf8');
        }

        // 1. Lưu mã code thành file .tex
        const texFilePath = `${fileName}.tex`;
        fs.writeFileSync(texFilePath, content, 'utf8');
        console.log(`Đã lưu file: ${texFilePath}`);

        // 2. Chạy ngầm lệnh pdflatex của MiKTeX (biên dịch 2 lần để cập nhật số trang/mục lục nếu có)
        console.log("Đang gọi MiKTeX biên dịch...");
        execSync(`pdflatex -interaction=nonstopmode ${texFilePath}`);
        execSync(`pdflatex -interaction=nonstopmode ${texFilePath}`);

        console.log(`Thành công! File PDF đã sẵn sàng: ${fileName}.pdf`);
        return `Đã biên dịch xong! File lưu tại: ${fileName}.pdf`;
    } catch (error) {
        let logDetails = error.message;
        const logFilePath = `${fileName}.log`;
        if (fs.existsSync(logFilePath)) {
            const logContent = fs.readFileSync(logFilePath, 'utf8');
            const errorLines = logContent.split('\n').filter(l => l.startsWith('!') || l.includes('Error:')).slice(-5).join('\n');
            if (errorLines) {
                logDetails = errorLines;
            }
        }
        console.error(`Lỗi biên dịch MiKTeX: ${logDetails}`);
        return `Lỗi biên dịch MiKTeX: ${logDetails}. Vui lòng kiểm tra lại cấu trúc gói (package) hoặc lỗi ngoặc nhọn.`;
    }
}

// Lấy tham số từ Antigravity truyền vào
const args = process.argv.slice(2);
const result = compileToPDF(args[0], args[1]);
if (result) console.log(result);