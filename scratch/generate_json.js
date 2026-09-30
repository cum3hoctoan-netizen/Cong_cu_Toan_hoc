const fs = require('fs');

const data = [
  {
    "question_number": 1,
    "type": "multiple_choice",
    "ky_nang": "Tìm tập xác định",
    "content": "Tập xác định $D$ của hàm số $y = \\tan\\left(2x - \\dfrac{\\pi}{3}\\right)$ là:",
    "options": [
      { "id": "A", "content": "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{6} + k\\pi \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$", "is_correct": false },
      { "id": "B", "content": "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{5\\pi}{12} + \\dfrac{k\\pi}{2} \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$", "is_correct": true },
      { "id": "C", "content": "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{5\\pi}{6} + k\\pi \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$", "is_correct": false },
      { "id": "D", "content": "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{3} + \\dfrac{k\\pi}{2} \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$", "is_correct": false }
    ],
    "explanation": "Hàm số $y = \\tan\\left(2x - \\dfrac{\\pi}{3}\\right)$ xác định khi và chỉ khi:\n$$2x - \\dfrac{\\pi}{3} \\ne \\dfrac{\\pi}{2} + k\\pi \\Leftrightarrow 2x \\ne \\dfrac{5\\pi}{6} + k\\pi \\Leftrightarrow x \\ne \\dfrac{5\\pi}{12} + \\dfrac{k\\pi}{2} \\quad (k \\in \\mathbb{Z})$$\nVậy tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\left\\{\\dfrac{5\\pi}{12} + \\dfrac{k\\pi}{2} \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$."
  },
  {
    "question_number": 2,
    "type": "multiple_choice",
    "ky_nang": "Tìm tập giá trị",
    "content": "Tập giá trị $T$ của hàm số $y = 3\\cos\\left(x + \\dfrac{\\pi}{4}\\right) - 2$ là:",
    "options": [
      { "id": "A", "content": "$T = [-3; 3]$", "is_correct": false },
      { "id": "B", "content": "$T = [-1; 1]$", "is_correct": false },
      { "id": "C", "content": "$T = [-5; 1]$", "is_correct": true },
      { "id": "D", "content": "$T = [-5; 5]$", "is_correct": false }
    ],
    "explanation": "Với mọi $x \\in \\mathbb{R}$, ta có:\n$$-1 \\le \\cos\\left(x + \\dfrac{\\pi}{4}\\right) \\le 1 \\Rightarrow -3 \\le 3\\cos\\left(x + \\dfrac{\\pi}{4}\\right) \\le 3 \\Rightarrow -5 \\le 3\\cos\\left(x + \\dfrac{\\pi}{4}\\right) - 2 \\le 1$$\nDo đó $-5 \\le y \\le 1$. Tập giá trị của hàm số là $T = [-5; 1]$."
  },
  {
    "question_number": 3,
    "type": "multiple_choice",
    "ky_nang": "Xét tính chẵn lẻ",
    "content": "Trong các hàm số sau, hàm số nào là hàm số lẻ trên tập xác định của nó?",
    "options": [
      { "id": "A", "content": "$y = \\cos x$", "is_correct": false },
      { "id": "B", "content": "$y = \\sin x \\cdot \\cos 2x$", "is_correct": true },
      { "id": "C", "content": "$y = x \\sin x$", "is_correct": false },
      { "id": "D", "content": "$y = \\cos x + \\sin^2 x$", "is_correct": false }
    ],
    "explanation": "Xét hàm số $f(x) = \\sin x \\cdot \\cos 2x$, tập xác định $D = \\mathbb{R}$ là tập đối xứng.\nVới mọi $x \\in D$, ta có $-x \\in D$ và:\n$$f(-x) = \\sin(-x) \\cdot \\cos(-2x) = (-\\sin x) \\cdot \\cos 2x = -(\\sin x \\cdot \\cos 2x) = -f(x)$$\nDo đó $y = \\sin x \\cdot \\cos 2x$ là hàm số lẻ. Các hàm số ở các phương án còn lại đều là hàm số chẵn."
  },
  {
    "question_number": 4,
    "type": "multiple_choice",
    "ky_nang": "Giải phương trình lượng giác cơ bản",
    "content": "Tất cả các nghiệm của phương trình lượng giác $\\cos x = \\cos\\dfrac{\\pi}{5}$ là:",
    "options": [
      { "id": "A", "content": "$x = \\pm \\dfrac{\\pi}{5} + k2\\pi \\quad (k \\in \\mathbb{Z})$", "is_correct": true },
      { "id": "B", "content": "$x = \\dfrac{\\pi}{5} + k2\\pi \\quad (k \\in \\mathbb{Z})$", "is_correct": false },
      { "id": "C", "content": "$x = \\dfrac{\\pi}{5} + k\\pi \\quad (k \\in \\mathbb{Z})$", "is_correct": false },
      { "id": "D", "content": "$x = \\pm \\dfrac{\\pi}{5} + k\\pi \\quad (k \\in \\mathbb{Z})$", "is_correct": false }
    ],
    "explanation": "Áp dụng công thức nghiệm cơ bản của phương trình cosin:\n$$\\cos x = \\cos\\alpha \\Leftrightarrow x = \\pm \\alpha + k2\\pi \\quad (k \\in \\mathbb{Z})$$\nVới $\\alpha = \\dfrac{\\pi}{5}$, ta được $x = \\pm \\dfrac{\\pi}{5} + k2\\pi$ ($k \\in \\mathbb{Z}$)."
  },
  {
    "question_number": 5,
    "type": "multiple_choice",
    "ky_nang": "Tìm chu kỳ hàm số",
    "content": "Chu kỳ tuần hoàn $T$ của hàm số $y = \\sin\\left(3x - \\dfrac{\\pi}{4}\\right) + 2\\tan\\left(2x + \\dfrac{\\pi}{6}\\right)$ là:",
    "options": [
      { "id": "A", "content": "$T = \\dfrac{2\\pi}{3}$", "is_correct": false },
      { "id": "B", "content": "$T = \\dfrac{\\pi}{2}$", "is_correct": false },
      { "id": "C", "content": "$T = 2\\pi$", "is_correct": true },
      { "id": "D", "content": "$T = \\pi$", "is_correct": false }
    ],
    "explanation": "Hàm số $y_1 = \\sin\\left(3x - \\dfrac{\\pi}{4}\\right)$ tuần hoàn với chu kỳ $T_1 = \\dfrac{2\\pi}{3}$.\nHàm số $y_2 = \\tan\\left(2x + \\dfrac{\\pi}{6}\\right)$ tuần hoàn với chu kỳ $T_2 = \\dfrac{\\pi}{2}$.\nChu kỳ $T$ của hàm số tổng $y = y_1 + 2y_2$ là BCNN của $T_1$ và $T_2$:\n$$T = \\text{BCNN}\\left(\\dfrac{2\\pi}{3}, \\dfrac{\\pi}{2}\\right) = 2\\pi$$\nKiểm tra: $\\dfrac{2\\pi}{T_1} = 3 \\in \\mathbb{Z}^+$ và $\\dfrac{2\\pi}{T_2} = 4 \\in \\mathbb{Z}^+$. Do đó $T = 2\\pi$."
  },
  {
    "question_number": 6,
    "type": "multiple_choice",
    "ky_nang": "Xét sự biến thiên",
    "content": "Mệnh đề nào sau đây đúng khi nói về sự biến thiên của hàm số $y = \\sin x$?",
    "options": [
      { "id": "A", "content": "Hàm số đồng biến trên khoảng $\\left(0; \\dfrac{\\pi}{2}\\right)$ và nghịch biến trên khoảng $\\left(\\dfrac{\\pi}{2}; \\pi\\right)$", "is_correct": true },
      { "id": "B", "content": "Hàm số nghịch biến trên khoảng $\\left(0; \\dfrac{\\pi}{2}\\right)$ và đồng biến trên khoảng $\\left(\\dfrac{\\pi}{2}; \\pi\\right)$", "is_correct": false },
      { "id": "C", "content": "Hàm số đồng biến trên toàn bộ khoảng $(0; \\pi)$", "is_correct": false },
      { "id": "D", "content": "Hàm số nghịch biến trên toàn bộ khoảng $(0; \\pi)$", "is_correct": false }
    ],
    "explanation": "Dựa vào đồ thị và tính chất của hàm số $y = \\sin x$: trên khoảng $\\left(0; \\dfrac{\\pi}{2}\\right)$ góc $x$ tăng từ $0$ đến $\\dfrac{\\pi}{2}$ thì $\\sin x$ tăng từ $0$ lên $1$ (đồng biến); trên khoảng $\\left(\\dfrac{\\pi}{2}; \\pi\\right)$ góc $x$ tăng từ $\\dfrac{\\pi}{2}$ đến $\\pi$ thì $\\sin x$ giảm từ $1$ xuống $0$ (nghịch biến)."
  },
  {
    "question_number": 7,
    "type": "multiple_choice",
    "ky_nang": "Đếm số nghiệm phương trình",
    "content": "Số nghiệm của phương trình $\\sin\\left(x + \\dfrac{\\pi}{4}\\right) = \\dfrac{\\sqrt{2}}{2}$ trên đoạn $[0; 2\\pi]$ là:",
    "options": [
      { "id": "A", "content": "$1$", "is_correct": false },
      { "id": "B", "content": "$2$", "is_correct": false },
      { "id": "C", "content": "$3$", "is_correct": true },
      { "id": "D", "content": "$4$", "is_correct": false }
    ],
    "explanation": "Ta có $\\sin\\left(x + \\dfrac{\\pi}{4}\\right) = \\sin\\dfrac{\\pi}{4} \\Leftrightarrow \\left[\\begin{array}{l} x + \\dfrac{\\pi}{4} = \\dfrac{\\pi}{4} + k2\\pi \\\\ x + \\dfrac{\\pi}{4} = \\pi - \\dfrac{\\pi}{4} + k2\\pi \\end{array}\\right. \\Leftrightarrow \\left[\\begin{array}{l} x = k2\\pi \\\\ x = \\dfrac{\\pi}{2} + k2\\pi \\end{array}\\right. \\quad (k \\in \\mathbb{Z})$.\nXét $x \\in [0; 2\\pi]$:\n- Với $x = k2\\pi$: chọn $k = 0 \\Rightarrow x = 0$; chọn $k = 1 \\Rightarrow x = 2\\pi$.\n- Với $x = \\dfrac{\\pi}{2} + k2\\pi$: chọn $k = 0 \\Rightarrow x = \\dfrac{\\pi}{2}$.\nVậy phương trình có đúng $3$ nghiệm trên $[0; 2\\pi]$ là $x \\in \\left\\{0; \\dfrac{\\pi}{2}; 2\\pi\\right\\}$."
  },
  {
    "question_number": 8,
    "type": "multiple_choice",
    "ky_nang": "Phương trình bậc hai lượng giác",
    "content": "Tập nghiệm của phương trình $2\\cos^2 x - 3\\cos x + 1 = 0$ là:",
    "options": [
      { "id": "A", "content": "$S = \\left\\{\\pm \\dfrac{\\pi}{3} + k2\\pi \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$", "is_correct": false },
      { "id": "B", "content": "$S = \\left\\{k2\\pi \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$", "is_correct": false },
      { "id": "C", "content": "$S = \\left\\{k2\\pi, \\pm \\dfrac{\\pi}{3} + k2\\pi \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$", "is_correct": true },
      { "id": "D", "content": "$S = \\left\\{k\\pi, \\pm \\dfrac{\\pi}{6} + k2\\pi \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$", "is_correct": false }
    ],
    "explanation": "Đặt $t = \\cos x$ (điều kiện $-1 \\le t \\le 1$). Phương trình trở thành:\n$$2t^2 - 3t + 1 = 0 \\Leftrightarrow \\left[\\begin{array}{l} t = 1 \\text{ (thỏa mãn)} \\\\ t = \\dfrac{1}{2} \\text{ (thỏa mãn)} \\end{array}\\right.$$\n- Với $t = 1 \\Leftrightarrow \\cos x = 1 \\Leftrightarrow x = k2\\pi \\quad (k \\in \\mathbb{Z})$.\n- Với $t = \\dfrac{1}{2} \\Leftrightarrow \\cos x = \\dfrac{1}{2} \\Leftrightarrow x = \\pm \\dfrac{\\pi}{3} + k2\\pi \\quad (k \\in \\mathbb{Z})$."
  },
  {
    "question_number": 9,
    "type": "multiple_choice",
    "ky_nang": "Tính tổng nghiệm",
    "content": "Tổng các nghiệm của phương trình $\\sqrt{3}\\tan\\left(2x - \\dfrac{\\pi}{6}\\right) = 1$ thuộc khoảng $(0; \\pi)$ bằng:",
    "options": [
      { "id": "A", "content": "$\\dfrac{\\pi}{2}$", "is_correct": false },
      { "id": "B", "content": "$\\dfrac{5\\pi}{6}$", "is_correct": true },
      { "id": "C", "content": "$\\dfrac{2\\pi}{3}$", "is_correct": false },
      { "id": "D", "content": "$\\pi$", "is_correct": false }
    ],
    "explanation": "Phương trình $\\Leftrightarrow \\tan\\left(2x - \\dfrac{\\pi}{6}\\right) = \\dfrac{1}{\\sqrt{3}} = \\tan\\dfrac{\\pi}{6} \\Leftrightarrow 2x - \\dfrac{\\pi}{6} = \\dfrac{\\pi}{6} + k\\pi \\Leftrightarrow 2x = \\dfrac{\\pi}{3} + k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{6} + \\dfrac{k\\pi}{2}$.\nVì $x \\in (0; \\pi)$ nên $0 < \\dfrac{\\pi}{6} + \\dfrac{k\\pi}{2} < \\pi \\Leftrightarrow -\\dfrac{1}{3} < k < \\dfrac{5}{3}$.\nDo $k \\in \\mathbb{Z}$ nên $k \\in \\{0; 1\\}$.\n- Với $k = 0 \\Rightarrow x_1 = \\dfrac{\\pi}{6}$.\n- Với $k = 1 \\Rightarrow x_2 = \\dfrac{\\pi}{6} + \\dfrac{\\pi}{2} = \\dfrac{2\\pi}{3}$.\nTổng hai nghiệm: $x_1 + x_2 = \\dfrac{\\pi}{6} + \\dfrac{2\\pi}{3} = \\dfrac{5\\pi}{6}$."
  },
  {
    "question_number": 10,
    "type": "multiple_choice",
    "ky_nang": "Biện luận tham số",
    "content": "Tìm tất cả các giá trị của tham số $m$ để phương trình $2\\sin x + (m-1)\\cos x = m+1$ có nghiệm.",
    "options": [
      { "id": "A", "content": "$m \\ge 1$", "is_correct": false },
      { "id": "B", "content": "$m \\le 1$", "is_correct": true },
      { "id": "C", "content": "$m > 2$", "is_correct": false },
      { "id": "D", "content": "$-1 \\le m \\le 1$", "is_correct": false }
    ],
    "explanation": "Phương trình có dạng $A\\sin x + B\\cos x = C$ với $A = 2, B = m-1, C = m+1$.\nĐiều kiện để phương trình có nghiệm là $A^2 + B^2 \\ge C^2$:\n$$2^2 + (m-1)^2 \\ge (m+1)^2 \\Leftrightarrow 4 + m^2 - 2m + 1 \\ge m^2 + 2m + 1 \\Leftrightarrow 4m \\le 4 \\Leftrightarrow m \\le 1$$"
  },
  {
    "question_number": 11,
    "type": "multiple_choice",
    "ky_nang": "Biểu diễn nghiệm đường tròn",
    "content": "Số điểm biểu diễn các nghiệm của phương trình $\\dfrac{\\sin 3x - \\sin x}{\\sqrt{1 - \\cos x}} = 0$ trên đường tròn lượng giác là:",
    "options": [
      { "id": "A", "content": "$3$", "is_correct": false },
      { "id": "B", "content": "$4$", "is_correct": false },
      { "id": "C", "content": "$5$", "is_correct": true },
      { "id": "D", "content": "$6$", "is_correct": false }
    ],
    "explanation": "Điều kiện xác định: $1 - \\cos x > 0 \\Leftrightarrow \\cos x \\ne 1 \\Leftrightarrow x \\ne k2\\pi \\quad (k \\in \\mathbb{Z})$.\nPhương trình $\\Leftrightarrow \\sin 3x - \\sin x = 0 \\Leftrightarrow 2\\cos 2x \\sin x = 0 \\Leftrightarrow \\left[\\begin{array}{l} \\cos 2x = 0 \\\\ \\sin x = 0 \\end{array}\\right.$\n- Với $\\cos 2x = 0 \\Leftrightarrow 2x = \\dfrac{\\pi}{2} + k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2} \\quad (k \\in \\mathbb{Z})$.\nBiểu diễn nghiệm này trên đường tròn lượng giác được $4$ điểm phân biệt: $\\dfrac{\\pi}{4}, \\dfrac{3\\pi}{4}, \\dfrac{5\\pi}{4}, \\dfrac{7\\pi}{4}$. Cả $4$ điểm này đều thỏa mãn điều kiện $\\cos x \\ne 1$.\n- Với $\\sin x = 0 \\Leftrightarrow x = k\\pi \\quad (k \\in \\mathbb{Z})$.\n  + Nếu $k$ chẵn ($k = 2m$): $x = m2\\pi$ (loại do vi phạm điều kiện $\\cos x \\ne 1$).\n  + Nếu $k$ lẻ ($k = 2m+1$): $x = \\pi + m2\\pi$ (thỏa mãn điều kiện). Điểm biểu diễn là điểm $A'(-1; 0)$.\nTổng số điểm biểu diễn nghiệm phân biệt trên đường tròn lượng giác là $4 + 1 = 5$ điểm."
  },
  {
    "question_number": 12,
    "type": "multiple_choice",
    "ky_nang": "Mô hình hóa thực tế",
    "content": "Mực nước biển tại một cảng biển thay đổi theo thời gian $t$ (giờ, $0 \\le t \\le 24$) được mô hình hóa bởi hàm số $h(t) = 3\\cos\\left(\\dfrac{\\pi t}{6} + \\dfrac{\\pi}{3}\\right) + 12$ (mét). Mực nước biển tại cảng cao trên $13,5\\text{ m}$ trong khoảng thời gian nào trong ngày?",
    "options": [
      { "id": "A", "content": "$0 < t < 4$ và $12 < t < 16$", "is_correct": false },
      { "id": "B", "content": "$8 < t < 12$ và $20 < t < 24$", "is_correct": true },
      { "id": "C", "content": "$4 < t < 8$ và $16 < t < 20$", "is_correct": false },
      { "id": "D", "content": "$2 < t < 6$ và $14 < t < 18$", "is_correct": false }
    ],
    "explanation": "Mực nước biển cao trên $13,5\\text{ m} \\Leftrightarrow h(t) > 13,5$:\n$$3\\cos\\left(\\dfrac{\\pi t}{6} + \\dfrac{\\pi}{3}\\right) + 12 > 13,5 \\Leftrightarrow \\cos\\left(\\dfrac{\\pi t}{6} + \\dfrac{\\pi}{3}\\right) > \\dfrac{1}{2}$$\nVì $0 \\le t \\le 24$ nên góc $u = \\dfrac{\\pi t}{6} + \\dfrac{\\pi}{3} \\in \\left[\\dfrac{\\pi}{3}; \\dfrac{13\\pi}{3}\\right]$.\nBất phương trình $\\cos u > \\dfrac{1}{2}$ có tập nghiệm trên khoảng xét là:\n- Nhánh 1: $\\dfrac{5\\pi}{3} < \\dfrac{\\pi t}{6} + \\dfrac{\\pi}{3} < \\dfrac{7\\pi}{3} \\Leftrightarrow \\dfrac{4\\pi}{3} < \\dfrac{\\pi t}{6} < 2\\pi \\Leftrightarrow 8 < t < 12$.\n- Nhánh 2: $\\dfrac{11\\pi}{3} < \\dfrac{\\pi t}{6} + \\dfrac{\\pi}{3} < \\dfrac{13\\pi}{3} \\Leftrightarrow \\dfrac{10\\pi}{3} < \\dfrac{\\pi t}{6} < 4\\pi \\Leftrightarrow 20 < t < 24$."
  },
  {
    "question_number": 13,
    "type": "multiple_choice",
    "ky_nang": "Giá trị lớn nhất thực tế",
    "content": "Nhiệt độ $T$ ($^\\circ\\text{C}$) tại một thành phố trong một ngày mùa hè được mô phỏng bởi hàm số $T(t) = 22 + 5\\sin\\left(\\dfrac{\\pi t}{12} - \\dfrac{\\pi}{2}\\right)$, trong đó $t$ là thời gian tính bằng giờ kể từ $0$ giờ đêm ($0 \\le t \\le 24$). Nhiệt độ đạt giá trị cao nhất bằng bao nhiêu và vào thời điểm nào?",
    "options": [
      { "id": "A", "content": "$22^\\circ\\text{C}$ lúc $6$ giờ sáng", "is_correct": false },
      { "id": "B", "content": "$27^\\circ\\text{C}$ lúc $6$ giờ sáng", "is_correct": false },
      { "id": "C", "content": "$27^\\circ\\text{C}$ lúc $12$ giờ trưa", "is_correct": true },
      { "id": "D", "content": "$25^\\circ\\text{C}$ lúc $12$ giờ trưa", "is_correct": false }
    ],
    "explanation": "Vì $-1 \\le \\sin\\left(\\dfrac{\\pi t}{12} - \\dfrac{\\pi}{2}\\right) \\le 1$ với mọi $t \\in [0; 24]$ nên:\n$$T(t) \\le 22 + 5(1) = 27^\\circ\\text{C}$$\nNhiệt độ đạt giá trị cao nhất bằng $27^\\circ\\text{C}$ khi và chỉ khi:\n$$\\sin\\left(\\dfrac{\\pi t}{12} - \\dfrac{\\pi}{2}\\right) = 1 \\Leftrightarrow \\dfrac{\\pi t}{12} - \\dfrac{\\pi}{2} = \\dfrac{\\pi}{2} + k2\\pi \\Leftrightarrow \\dfrac{\\pi t}{12} = \\pi + k2\\pi \\Leftrightarrow t = 12 + 24k$$\nVì $0 \\le t \\le 24$ nên chọn $k = 0 \\Rightarrow t = 12$ (giờ, tức $12$ giờ trưa)."
  },
  {
    "question_number": 14,
    "type": "multiple_choice",
    "ky_nang": "Biện luận số nghiệm",
    "content": "Cho phương trình $\\cos 2x - (2m+1)\\cos x + m = 0$. Có bao nhiêu giá trị nguyên của tham số $m \\in [-10; 10]$ để phương trình có đúng $3$ nghiệm phân biệt thuộc đoạn $\\left[-\\dfrac{\\pi}{2}; \\pi\\right]$?",
    "options": [
      { "id": "A", "content": "$1$", "is_correct": false },
      { "id": "B", "content": "$2$", "is_correct": true },
      { "id": "C", "content": "$3$", "is_correct": false },
      { "id": "D", "content": "$4$", "is_correct": false }
    ],
    "explanation": "Biến đổi phương trình: $(2\\cos^2 x - 1) - (2m+1)\\cos x + m = 0 \\Leftrightarrow 2\\cos^2 x - (2m+1)\\cos x + m - 1 = 0$.\nPhân tích thành nhân tử:\n$$(2\\cos x - 1)(\\cos x - m) = 0 \\Leftrightarrow \\left[\\begin{array}{l} \\cos x = \\dfrac{1}{2} \\quad (1) \\\\ \\cos x = m \\quad (2) \\end{array}\\right.$$\nXét trên đoạn $\\left[-\\dfrac{\\pi}{2}; \\pi\\right]$:\n- Phương trình (1) $\\cos x = \\dfrac{1}{2}$ có đúng $2$ nghiệm phân biệt là $x = \\dfrac{\\pi}{3}$ và $x = -\\dfrac{\\pi}{3}$.\n- Để phương trình ban đầu có đúng $3$ nghiệm phân biệt thuộc $\\left[-\\dfrac{\\pi}{2}; \\pi\\right]$, thì phương trình (2) $\\cos x = m$ phải có đúng $1$ nghiệm thuộc $\\left[-\\dfrac{\\pi}{2}; \\pi\\right]$ và nghiệm đó khác $\\pm \\dfrac{\\pi}{3}$.\nKhảo sát hàm số $y = \\cos x$ trên $\\left[-\\dfrac{\\pi}{2}; \\pi\\right]$:\n- $y = -1$ tại $x = \\pi$.\n- $y = 0$ tại $x = -\\dfrac{\\pi}{2}$ và $x = \\dfrac{\\pi}{2}$.\n- $y = 1$ tại $x = 0$.\nĐường thẳng $y = m$ cắt đồ thị $y = \\cos x$ tại đúng $1$ điểm trên $\\left[-\\dfrac{\\pi}{2}; \\pi\\right]$ khi và chỉ khi:\n$m = 1$ (nghiệm $x = 0$) hoặc $m \\in [-1; 0)$ (nghiệm thuộc $(\\pi/2; \\pi]$).\nDo đó $m \\in [-1; 0) \\cup \\{1\\}$.\nCác giá trị nguyên của $m \\in [-10; 10]$ là $m = -1$ và $m = 1$. Có $2$ giá trị nguyên thỏa mãn."
  },
  {
    "question_number": 15,
    "type": "short_answer",
    "ky_nang": "Phương trình lượng giác bậc nhất",
    "content": "Giải phương trình lượng giác sau:\n$$\\sin 2x + \\sqrt{3}\\cos 2x = 2\\sin\\left(3x - \\dfrac{\\pi}{6}\\right)$$",
    "correct_answer": "$x = \\dfrac{\\pi}{2} + k2\\pi$ hoặc $x = \\dfrac{\\pi}{6} + \\dfrac{k2\\pi}{5}$ ($k \\in \\mathbb{Z}$)",
    "explanation": "Chia hai vế của phương trình cho $2$:\n$$\\dfrac{1}{2}\\sin 2x + \\dfrac{\\sqrt{3}}{2}\\cos 2x = \\sin\\left(3x - \\dfrac{\\pi}{6}\\right)$$ \\hfill \\textit{(0,25 điểm)}\n\nBiến đổi vế trái theo công thức cộng góc $\\sin(a+b) = \\sin a \\cos b + \\cos a \\sin b$:\n$$\\sin 2x \\cos\\dfrac{\\pi}{3} + \\cos 2x \\sin\\dfrac{\\pi}{3} = \\sin\\left(3x - \\dfrac{\\pi}{6}\\right)$$ \\hfill \\textit{(0,25 điểm)}\n\n$$\\Leftrightarrow \\sin\\left(2x + \\dfrac{\\pi}{3}\\right) = \\sin\\left(3x - \\dfrac{\\pi}{6}\\right)$$ \\hfill \\textit{(0,25 điểm)}\n\nÁp dụng công thức nghiệm phương trình $\\sin A = \\sin B$:\n$$\\Leftrightarrow \\left[\\begin{array}{l} 3x - \\dfrac{\\pi}{6} = 2x + \\dfrac{\\pi}{3} + k2\\pi \\\\ 3x - \\dfrac{\\pi}{6} = \\pi - \\left(2x + \\dfrac{\\pi}{3}\\right) + k2\\pi \\end{array}\\right. \\quad (k \\in \\mathbb{Z})$$ \\hfill \\textit{(0,25 điểm)}\n\n$$\\Leftrightarrow \\left[\\begin{array}{l} x = \\dfrac{\\pi}{2} + k2\\pi \\\\ 5x = \\dfrac{5\\pi}{6} + k2\\pi \\end{array}\\right. \\Leftrightarrow \\left[\\begin{array}{l} x = \\dfrac{\\pi}{2} + k2\\pi \\\\ x = \\dfrac{\\pi}{6} + \\dfrac{k2\\pi}{5} \\end{array}\\right. \\quad (k \\in \\mathbb{Z})$$ \\hfill \\textit{(0,5 điểm)}"
  },
  {
    "question_number": 16,
    "type": "short_answer",
    "ky_nang": "Mô hình hóa thực tế",
    "content": "Một chiếc cabin trên vòng quay Sun Wheel có bán kính $R = 30\\text{ m}$ quay đều với chu kỳ $15$ phút. Trục của vòng quay được đặt ở độ cao $33\\text{ m}$ so với mặt đất. Độ cao $h$ (mét) của cabin so với mặt đất tại thời điểm $t$ (phút) kể từ khi vòng quay bắt đầu vận hành từ vị trí thấp nhất được tính theo công thức:\n$$h(t) = 33 - 30\\cos\\left(\\dfrac{2\\pi t}{15}\\right)$$\n\\begin{enumerate}\n    \\item[a)] Tính độ cao của cabin ở các thời điểm $t = 0$ phút và $t = 3,75$ phút.\n    \\item[b)] Trong $30$ phút đầu tiên ($0 \\le t \\le 30$), xác định tất cả các thời điểm $t$ (phút) để cabin ở độ cao $48\\text{ m}$ so với mặt đất.\n\\end{enumerate}",
    "correct_answer": "$h(0) = 3\\text{ m}, h(3,75) = 33\\text{ m}$; $t \\in \\{5; 10; 20; 25\\}$ (phút)",
    "explanation": "a) Ở thời điểm $t = 0$ phút:\n$$h(0) = 33 - 30\\cos 0 = 33 - 30(1) = 3 \\text{ (m)}$$ \\hfill \\textit{(0,25 điểm)}\n\nỞ thời điểm $t = 3,75$ phút:\n$$h(3,75) = 33 - 30\\cos\\left(\\dfrac{2\\pi \\cdot 3,75}{15}\\right) = 33 - 30\\cos\\left(\\dfrac{\\pi}{2}\\right) = 33 - 30(0) = 33 \\text{ (m)}$$ \\hfill \\textit{(0,25 điểm)}\n\nb) Cabin đạt độ cao $48\\text{ m} \\Leftrightarrow h(t) = 48$:\n$$33 - 30\\cos\\left(\\dfrac{2\\pi t}{15}\\right) = 48 \\Leftrightarrow -30\\cos\\left(\\dfrac{2\\pi t}{15}\\right) = 15 \\Leftrightarrow \\cos\\left(\\dfrac{2\\pi t}{15}\\right) = -\\dfrac{1}{2}$$ \\hfill \\textit{(0,25 điểm)}\n\n$$\\Leftrightarrow \\dfrac{2\\pi t}{15} = \\pm \\dfrac{2\\pi}{3} + k2\\pi \\Leftrightarrow t = \\pm 5 + 15k \\quad (k \\in \\mathbb{Z})$$ \\hfill \\textit{(0,25 điểm)}\n\nXét khoảng thời gian $0 \\le t \\le 30$:\n- Nhánh $t = 5 + 15k$:\n  + Với $k = 0 \\Rightarrow t = 5$ (phút).\n  + Với $k = 1 \\Rightarrow t = 20$ (phút).\n- Nhánh $t = -5 + 15k$:\n  + Với $k = 1 \\Rightarrow t = 10$ (phút).\n  + Với $k = 2 \\Rightarrow t = 25$ (phút). \\hfill \\textit{(0,25 điểm)}\n\nVậy trong $30$ phút đầu tiên, cabin đạt độ cao $48\\text{ m}$ tại $4$ thời điểm: $t = 5$ phút, $t = 10$ phút, $t = 20$ phút và $t = 25$ phút. \\hfill \\textit{(0,25 điểm)}"
  }
];

const jsonStr = JSON.stringify(data, null, 2);
fs.writeFileSync('scratch/parsed_exam.json', jsonStr, 'utf8');
console.log('Valid JSON generated! Length:', data.length);
