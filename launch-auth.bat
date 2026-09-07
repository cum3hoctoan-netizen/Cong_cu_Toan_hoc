@echo off
title Gemini Notebook MCP - Dang nhap Google
echo ================================================================
echo  DANG MO CUA SO CHROME DANG NHAP GOOGLE CHO NOTEBOOKLM-MCP
echo  Profile: %LOCALAPPDATA%\notebooklm-mcp\Data\chrome_profile
echo ================================================================
start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --user-data-dir="%LOCALAPPDATA%\notebooklm-mcp\Data\chrome_profile" --new-window "https://accounts.google.com/ServiceLogin"
echo.
echo [1] Cua so Chrome da mo tren man hinh cua ban.
echo [2] Vui long dang nhap vao tai khoan Google.
echo [3] Sau khi dang nhap xong, hay truy cap https://notebook.google.com/ de kiem tra.
echo [4] Khi da dang nhap xong, ban co the dong Chrome lai va quay lai chat go: "Xac thuc xong".
echo ================================================================
pause
