const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function deployQuiz(htmlInput, folderName, fileName) {
    try {
        // 1. Chuẩn hóa tên file (xóa khoảng trắng, ký tự đặc biệt, đảm bảo đuôi .html)
        let cleanFileName = fileName.replace(/\.html$/i, '').replace(/[^a-zA-Z0-9_.-]/g, '_') + '.html';
        
        // 2. Tạo thư mục nếu chưa có (VD: To10_Web, To11_Web, To12_Web, TS10_Web, DGNL_Web)
        const targetDir = path.join(__dirname, folderName);
        if (!fs.existsSync(targetDir)){
            fs.mkdirSync(targetDir, { recursive: true });
        }

        // 3. Xử lý nội dung HTML: hỗ trợ cả chuỗi HTML trực tiếp lẫn đường dẫn file
        let htmlContent = htmlInput;
        if (typeof htmlInput === 'string' && fs.existsSync(htmlInput)) {
            try {
                if (fs.statSync(htmlInput).isFile()) {
                    htmlContent = fs.readFileSync(htmlInput, 'utf8');
                }
            } catch (e) {}
        }

        // Lưu file HTML vào đúng thư mục
        const filePath = path.join(targetDir, cleanFileName);
        fs.writeFileSync(filePath, htmlContent, 'utf8');
        console.log(`Đã lưu file: ${folderName}/${cleanFileName}`);

        // 4. Đồng bộ và đẩy tự động lên GitHub
        console.log("Đang đồng bộ lên GitHub...");
        try {
            execSync('git pull --rebase', { stdio: 'inherit' });
        } catch (e) {
            console.log("Lưu ý khi git pull:", e.message);
        }
        execSync('git add .', { stdio: 'inherit' });
        execSync(`git commit -m "Auto-deploy: Thêm bài ${cleanFileName}"`, { stdio: 'inherit' });
        execSync('git push', { stdio: 'inherit' });

        // 5. Tạo link gửi học sinh
        const webLink = `https://cong-cu-toan-hoc.vercel.app/${folderName}/${cleanFileName}`;
        return `✅ Đã đẩy lên web thành công!\n🔗 Link gửi học sinh: ${webLink}`;
        
    } catch (error) {
        return `❌ Lỗi Deploy: ${error.message}`;
    }
}

// Bắt tham số từ Antigravity (Nội dung HTML hoặc Đường dẫn file, Tên thư mục, Tên bài)
const args = process.argv.slice(2);
if (args.length >= 3) {
    const result = deployQuiz(args[0], args[1], args[2]);
    console.log(result);
}