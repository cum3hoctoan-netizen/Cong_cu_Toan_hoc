const fs = require('fs');
const path = require('path');

const quizData = {
  title: "PHIẾU HỌC TẬP INFOGRAPHIC: TẬP HỢP VÀ CÁC PHÉP TOÁN TẬP HỢP",
  subtitle: "Chuyên đề Toán 10 - Chương I: Mệnh đề và Tập hợp (GDPT 2018)",
  part1: [
    {
      id: 1,
      skill: "Tìm hiệu của hai tập hợp số thực chứa dấu giá trị tuyệt đối",
      question: "Cho hai tập hợp $A = \\{x \\in \\mathbb{R} \\mid |2x - 1| \\le 3\\}$ và $B = (0; +\\infty)$. Tìm tập hợp hiệu $A \\setminus B$.",
      options: [
        { key: "A", text: "$[-1; 0]$" },
        { key: "B", text: "$[-1; 0)$" },
        { key: "C", text: "$(0; 2]$" },
        { key: "D", text: "$(-\\infty; -1]$" }
      ],
      correct: "A",
      explanation: "Ta giải bất phương trình chứa dấu giá trị tuyệt đối:<br>$$|2x - 1| \\le 3 \\iff -3 \\le 2x - 1 \\le 3 \\iff -2 \\le 2x \\le 4 \\iff -1 \\le x \\le 2$$<br>Do đó $A = [-1; 2]$.<br>Mặt khác $B = (0; +\\infty)$.<br>Hiệu $A \\setminus B$ gồm các phần tử thuộc $A$ nhưng không thuộc $B$:<br>$$A \\setminus B = [-1; 2] \\setminus (0; +\\infty) = [-1; 0]$$<br><i>Chú ý:</i> Vì $0 \\notin B$ nên phần tử $0$ vẫn thuộc tập hiệu $A \\setminus B$ (lấy mút vuông tại $0$)."
    },
    {
      id: 2,
      skill: "Tìm tham số để giao của hai tập hợp bằng rỗng",
      question: "Cho hai tập hợp $A = [m-1; m+2]$ và $B = (1; 4)$. Tìm tất cả các giá trị thực của tham số $m$ để $A \\cap B = \\emptyset$.",
      options: [
        { key: "A", text: "$m \\le -1$ hoặc $m \\ge 5$" },
        { key: "B", text: "$-1 < m < 5$" },
        { key: "C", text: "$m < -1$ hoặc $m > 5$" },
        { key: "D", text: "$-1 \\le m \\le 5$" }
      ],
      correct: "A",
      explanation: "Đoạn $A = [m-1; m+2]$ có độ dài $(m+2) - (m-1) = 3 > 0$ luôn xác định với mọi $m$.<br>Để $A \\cap B = \\emptyset$, đoạn $A$ phải nằm hoàn toàn về bên trái hoặc hoàn toàn về bên phải của khoảng $B = (1; 4)$:<br>• Trường hợp 1: $A$ nằm bên trái $B \\implies m+2 \\le 1 \\iff m \\le -1$.<br>• Trường hợp 2: $A$ nằm bên phải $B \\implies m-1 \\ge 4 \\iff m \\ge 5$.<br>Vậy điều kiện cần tìm là $m \\le -1$ hoặc $m \\ge 5$."
    },
    {
      id: 3,
      skill: "Xác định các tập hợp và tìm hợp của hai tập hợp",
      question: "Cho tập hợp $A = \\{x \\in \\mathbb{Z} \\mid (x^2 - 4)(x^2 - 3x + 2) = 0\\}$ và $B = \\{n \\in \\mathbb{N} \\mid n < 5, n \\text{ là số nguyên tố}\\}$. Tìm tập hợp $A \\cup B$.",
      options: [
        { key: "A", text: "$\\{-2, 1, 2, 3\\}$" },
        { key: "B", text: "$\\{1, 2, 3\\}$" },
        { key: "C", text: "$\\{2\\}$" },
        { key: "D", text: "$\\{-2, 0, 1, 2, 3, 4\\}$" }
      ],
      correct: "A",
      explanation: "Phương trình $(x^2 - 4)(x^2 - 3x + 2) = 0 \\iff (x-2)(x+2)(x-1)(x-2) = 0 \\iff x \\in \\{-2, 1, 2\\}$. Vì các nghiệm đều nguyên nên $A = \\{-2, 1, 2\\}$.<br>Các số tự nhiên $n < 5$ là số nguyên tố gồm $2$ và $3$, do đó $B = \\{2, 3\\}$.<br>Hợp của hai tập hợp: $$A \\cup B = \\{-2, 1, 2\\} \\cup \\{2, 3\\} = \\{-2, 1, 2, 3\\}$$."
    },
    {
      id: 4,
      skill: "Tìm điều kiện tham số để tập hợp này là con của tập hợp kia",
      question: "Cho hai tập hợp $A = (-3; 2]$ và $B = (m-1; m+5)$. Tìm tất cả các giá trị thực của tham số $m$ để $A \\subset B$.",
      options: [
        { key: "A", text: "$-3 < m \\le -2$" },
        { key: "B", text: "$-3 \\le m \\le -2$" },
        { key: "C", text: "$m \\le -2$" },
        { key: "D", text: "$-3 < m < -2$" }
      ],
      correct: "A",
      explanation: "Để $A = (-3; 2] \\subset B = (m-1; m+5)$, ta cần thỏa mãn đồng thời hai đầu mút:<br>1) Đầu mút trái: $m - 1 \\le -3 \\iff m \\le -2$ (khi $m-1 = -3$, cả hai đều là khoảng mở bên trái tại $-3$ nên tập $A$ vẫn nằm trong $B$).<br>2) Đầu mút phải: $m + 5 > 2 \\iff m > -3$ (vì $A$ chứa phần tử $2$, còn $B$ mở tại $m+5$ nên bắt buộc $m+5 > 2$; nếu $m+5 = 2$ thì $2 \\notin B$).<br>Kết hợp lại: $$-3 < m \\le -2$$."
    },
    {
      id: 5,
      skill: "Ứng dụng sơ đồ Venn giải bài toán đếm hai tập hợp",
      question: "Lớp 10A có 45 học sinh, trong đó có 25 học sinh thích môn Toán, 20 học sinh thích môn Ngữ văn và 10 học sinh không thích môn nào trong hai môn này. Hỏi có bao nhiêu học sinh thích cả hai môn Toán và Ngữ văn?",
      options: [
        { key: "A", text: "$10$" },
        { key: "B", text: "$5$" },
        { key: "C", text: "$15$" },
        { key: "D", text: "$8$" }
      ],
      correct: "A",
      explanation: "Số học sinh thích ít nhất một trong hai môn là:<br>$$|T \\cup V| = 45 - 10 = 35$$<br>Theo công thức nguyên lý bù trừ:<br>$$|T \\cup V| = |T| + |V| - |T \\cap V| \\iff 35 = 25 + 20 - |T \\cap V| \\implies |T \\cap V| = 45 - 35 = 10$$ học sinh."
    },
    {
      id: 6,
      skill: "Đếm số tập con có k phần tử của một tập hợp",
      question: "Tìm số tập hợp con có đúng 2 phần tử của tập hợp $A = \\{x \\in \\mathbb{N} \\mid x^2 - 5x + 6 = 0 \\text{ hoặc } 0 < x \\le 4\\}$.",
      options: [
        { key: "A", text: "$6$" },
        { key: "B", text: "$4$" },
        { key: "C", text: "$16$" },
        { key: "D", text: "$12$" }
      ],
      correct: "A",
      explanation: "Phương trình $x^2 - 5x + 6 = 0 \\iff x = 2$ hoặc $x = 3$.<br>Các số tự nhiên $0 < x \\le 4$ là $x \\in \\{1, 2, 3, 4\\}$.<br>Hợp các phần tử lại ta được: $A = \\{1, 2, 3, 4\\}$ gồm $4$ phần tử.<br>Số tập con có đúng 2 phần tử của $A$ là: $$C_4^2 = \\frac{4!}{2!2!} = 6$$ tập con."
    },
    {
      id: 7,
      skill: "Tìm điều kiện tham số để giao của hai tập hợp khác rỗng",
      question: "Cho hai khoảng $A = (-\\infty; m+1)$ và $B = [3; +\\infty)$. Tìm điều kiện của tham số $m$ để $A \\cap B \\neq \\emptyset$.",
      options: [
        { key: "A", text: "$m > 2$" },
        { key: "B", text: "$m \\ge 2$" },
        { key: "C", text: "$m < 2$" },
        { key: "D", text: "$m \\le 2$" }
      ],
      correct: "A",
      explanation: "Tập $B = [3; +\\infty)$ bắt đầu từ giá trị $3$.<br>Để $A \\cap B \\neq \\emptyset$, khoảng $A = (-\\infty; m+1)$ phải vươn qua giá trị $3$, tức là $m+1 > 3 \\iff m > 2$.<br>(Nếu $m = 2$ thì $A = (-\\infty; 3)$, không chứa điểm $3$, dẫn tới $A \\cap B = \\emptyset$).<br>Vậy điều kiện là $m > 2$."
    },
    {
      id: 8,
      skill: "Điều kiện giao của hai khoảng khác rỗng chứa hai biến",
      question: "Cho hai khoảng $A = (a; a+2)$ và $B = (b; b+1)$. Biết rằng $A \\cap B \\neq \\emptyset$. Khẳng định nào sau đây là đúng?",
      options: [
        { key: "A", text: "$b - 2 < a < b + 1$" },
        { key: "B", text: "$b - 1 < a < b + 2$" },
        { key: "C", text: "$a < b < a + 2$" },
        { key: "D", text: "$b < a < b + 2$" }
      ],
      correct: "A",
      explanation: "Hai khoảng mở $(a; a+2)$ và $(b; b+1)$ có giao khác rỗng khi và chỉ khi mút trái của khoảng này bé hơn mút phải của khoảng kia:<br>$$\\begin{cases} a < b + 1 \\\\ b < a + 2 \\end{cases} \\iff \\begin{cases} a < b + 1 \\\\ a > b - 2 \\end{cases} \\iff b - 2 < a < b + 1$$."
    },
    {
      id: 9,
      skill: "Áp dụng định luật De Morgan cho phần bù và phép toán tập hợp",
      question: "Cho $C_{\\mathbb{R}} A = [-3; 5)$ và $C_{\\mathbb{R}} B = (1; 7]$. Xác định tập hợp phần bù $C_{\\mathbb{R}} (A \\cap B)$.",
      options: [
        { key: "A", text: "$[-3; 7]$" },
        { key: "B", text: "$(1; 5)$" },
        { key: "C", text: "$(-\\infty; -3) \\cup [7; +\\infty)$" },
        { key: "D", text: "$[-3; 1]$" }
      ],
      correct: "A",
      explanation: "Áp dụng định luật De Morgan cho phần bù trong $\\mathbb{R}$:<br>$$C_{\\mathbb{R}} (A \\cap B) = C_{\\mathbb{R}} A \\cup C_{\\mathbb{R}} B$$<br>Thay số liệu vào:<br>$$[-3; 5) \\cup (1; 7] = [-3; 7]$$<br>Vậy phần bù $C_{\\mathbb{R}} (A \\cap B) = [-3; 7]$."
    },
    {
      id: 10,
      skill: "Ứng dụng công thức bao hàm và loại trừ cho ba tập hợp",
      question: "Một trung tâm ngoại ngữ khảo sát 60 học viên: 35 người học tiếng Anh, 24 người học tiếng Pháp, 15 người học tiếng Trung; 12 người học cả Anh và Pháp, 8 người học cả Anh và Trung, 5 người học cả Pháp và Trung; 3 người học cả 3 tiếng. Hỏi có bao nhiêu học viên không học tiếng nào trong 3 tiếng trên?",
      options: [
        { key: "A", text: "$8$" },
        { key: "B", text: "$5$" },
        { key: "C", text: "$10$" },
        { key: "D", text: "$12$" }
      ],
      correct: "A",
      explanation: "Gọi $A, F, C$ lần lượt là tập học viên học tiếng Anh, Pháp, Trung.<br>Số học viên học ít nhất một ngoại ngữ là:<br>$$|A \\cup F \\cup C| = |A| + |F| + |C| - |A \\cap F| - |A \\cap C| - |F \\cap C| + |A \\cap F \\cap C|$$<br>$$= 35 + 24 + 15 - 12 - 8 - 5 + 3 = 52$$ học viên.<br>Số học viên không học bất kỳ thứ tiếng nào trong 3 tiếng trên là:<br>$$60 - 52 = 8$$ học viên."
    }
  ],
  part2: [
    {
      id: 1,
      skill: "Xác định phần tử và các phép toán giao, hiệu trên tập rời rạc",
      context: "Cho hai tập hợp $A = \\{x \\in \\mathbb{R} \\mid x^2 - 4 = 0\\}$ và $B = \\{x \\in \\mathbb{Z} \\mid -2 \\le x < 3\\}$:",
      items: [
        {
          label: "a",
          text: "Tập hợp $A$ viết dưới dạng liệt kê phần tử là $A = \\{-2, 2\\}$.",
          correct: true,
          explanation: "$x^2 - 4 = 0 \\iff x = \\pm 2 \\implies A = \\{-2, 2\\}$. Mệnh đề ĐÚNG."
        },
        {
          label: "b",
          text: "Tập hợp $B$ gồm 5 phần tử là $B = \\{-2, -1, 0, 1, 2\\}$.",
          correct: true,
          explanation: "Các số nguyên $-2 \\le x < 3$ gồm $-2, -1, 0, 1, 2$ (đúng 5 phần tử). Mệnh đề ĐÚNG."
        },
        {
          label: "c",
          text: "Phép giao của hai tập hợp là $A \\cap B = \\{-2, 2\\}$.",
          correct: true,
          explanation: "Cả $-2$ và $2$ đều vừa thuộc $A$ vừa thuộc $B$. Vậy $A \\cap B = \\{-2, 2\\}$. Mệnh đề ĐÚNG."
        },
        {
          label: "d",
          text: "Tập hợp hiệu $B \\setminus A = \\{-1, 0, 1, 3\\}$.",
          correct: false,
          explanation: "Số $3 \\notin B$ vì $x < 3$. Tập hiệu chính xác là $B \\setminus A = \\{-1, 0, 1\\}$. Mệnh đề SAI."
        }
      ]
    },
    {
      id: 2,
      skill: "Các phép toán hợp, giao, hiệu, phần bù trên các khoảng nửa khoảng",
      context: "Cho hai tập hợp số $A = [-2; 3)$ và $B = (1; 5]$ trên tập số thực $\\mathbb{R}$:",
      items: [
        {
          label: "a",
          text: "Hợp của hai tập hợp là $A \\cup B = [-2; 5]$.",
          correct: true,
          explanation: "$[-2; 3) \\cup (1; 5] = [-2; 5]$. Mệnh đề ĐÚNG."
        },
        {
          label: "b",
          text: "Giao của hai tập hợp là $A \\cap B = (1; 3)$.",
          correct: true,
          explanation: "$[-2; 3) \\cap (1; 5] = (1; 3)$. Mệnh đề ĐÚNG."
        },
        {
          label: "c",
          text: "Hiệu của hai tập hợp là $A \\setminus B = [-2; 1]$.",
          correct: true,
          explanation: "$[-2; 3) \\setminus (1; 5] = [-2; 1]$ (vì $1 \\notin B$ nên $1$ còn lại trong hiệu). Mệnh đề ĐÚNG."
        },
        {
          label: "d",
          text: "Phần bù của $A$ trong $\\mathbb{R}$ là $C_{\\mathbb{R}} A = (-\\infty; -2) \\cup [3; +\\infty)$.",
          correct: true,
          explanation: "Phần bù của $[-2; 3)$ trong $\\mathbb{R}$ là $\\mathbb{R} \\setminus [-2; 3) = (-\\infty; -2) \\cup [3; +\\infty)$. Mệnh đề ĐÚNG."
        }
      ]
    },
    {
      id: 3,
      skill: "Mối quan hệ giữa các tập hợp số thực, hữu tỉ, vô tỉ, nguyên, tự nhiên",
      context: "Xét các mối quan hệ bao hàm và phép toán trên các tập hợp số $\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{R}$ và tập số vô tỉ $\\mathbb{I}$:",
      items: [
        {
          label: "a",
          text: "Mối quan hệ bao hàm đúng là $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$.",
          correct: true,
          explanation: "Mọi số tự nhiên đều là số nguyên, mọi số nguyên đều là số hữu tỉ, mọi số hữu tỉ đều là số thực. Mệnh đề ĐÚNG."
        },
        {
          label: "b",
          text: "Tập hợp các số hữu tỉ và tập hợp các số vô tỉ rời nhau, nghĩa là $\\mathbb{Q} \\cap \\mathbb{I} = \\emptyset$.",
          correct: true,
          explanation: "Một số thực không thể vừa là số hữu tỉ vừa là số vô tỉ. Mệnh đề ĐÚNG."
        },
        {
          label: "c",
          text: "Phần bù của tập số hữu tỉ trong tập số thực là tập số vô tỉ, tức là $\\mathbb{R} \\setminus \\mathbb{Q} = \\mathbb{I}$.",
          correct: true,
          explanation: "Theo định nghĩa tập số vô tỉ, $\\mathbb{I} = \\mathbb{R} \\setminus \\mathbb{Q}$. Mệnh đề ĐÚNG."
        },
        {
          label: "d",
          text: "Hiệu của tập số nguyên và tập số tự nhiên là tập các số nguyên âm, tức là $\\mathbb{Z} \\setminus \\mathbb{N} = \\mathbb{Z}^-$.",
          correct: true,
          explanation: "Do $\\mathbb{N} = \\{0, 1, 2, \\dots\\}$ chứa cả số $0$, nên $\\mathbb{Z} \\setminus \\mathbb{N} = \\{\\dots, -3, -2, -1\\} = \\mathbb{Z}^-$. Mệnh đề ĐÚNG."
        }
      ]
    },
    {
      id: 4,
      skill: "Biện luận tham số m đối với các phép toán tập hợp",
      context: "Cho hai tập hợp phụ thuộc tham số $m$: $A = (1; m+1]$ và $B = (2; 5]$:",
      items: [
        {
          label: "a",
          text: "Điều kiện để $A$ là một tập hợp khác rỗng là $m > 0$.",
          correct: true,
          explanation: "Khoảng-nửa-đoạn $(1; m+1] \\neq \\emptyset \\iff m+1 > 1 \\iff m > 0$. Mệnh đề ĐÚNG."
        },
        {
          label: "b",
          text: "Khi $m = 3$, phép giao hai tập hợp là $A \\cap B = (2; 4]$.",
          correct: true,
          explanation: "Khi $m = 3 \\implies A = (1; 4]$. Giao với $B = (2; 5]$ là $(1; 4] \\cap (2; 5] = (2; 4]$. Mệnh đề ĐÚNG."
        },
        {
          label: "c",
          text: "Điều kiện của $m$ để $B \\subset A$ là $m \\ge 4$.",
          correct: true,
          explanation: "Ta có $B = (2; 5]$ và $A = (1; m+1]$. Do $1 < 2$, để $B \\subset A$ thì $m+1 \\ge 5 \\iff m \\ge 4$. Mệnh đề ĐÚNG."
        },
        {
          label: "d",
          text: "Điều kiện của $m$ để $A \\cap B = \\emptyset$ là $m \\le 1$.",
          correct: true,
          explanation: "Khi $m > 0$, để $(1; m+1] \\cap (2; 5] = \\emptyset$ thì $m+1 \\le 2 \\iff m \\le 1$. Khi $m \\le 0$ thì $A = \\emptyset$ nên giao hiển nhiên rỗng. Vậy $m \\le 1$. Mệnh đề ĐÚNG."
        }
      ]
    }
  ],
  part3: [
    {
      id: 1,
      skill: "Tìm điều kiện tham số để một đoạn là tập con của một khoảng",
      question: "Câu 1. Tìm tất cả các giá trị thực của tham số $m$ để đoạn $A = [m; m+2]$ nằm hoàn toàn trong khoảng $B = (-1; 4)$.",
      answer_display: "$-1 < m < 2$",
      acceptable: ["-1 < m < 2", "-1<m<2", "(-1; 2)", "(-1;2)", "m in (-1; 2)"],
      explanation: "Đoạn $A = [m; m+2]$ nằm trong $(-1; 4) \\iff \\begin{cases} m > -1 \\\\ m + 2 < 4 \\end{cases} \\iff -1 < m < 2$."
    },
    {
      id: 2,
      skill: "Xác định phần bù của hợp hai tập hợp số",
      question: "Câu 2. Cho hai tập hợp $A = (-2; 3]$ và $B = (1; +\\infty)$. Tìm tập hợp phần bù $C = C_{\\mathbb{R}} (A \\cup B)$.",
      answer_display: "$(-\\infty; -2]$",
      acceptable: ["(-\\infty; -2]", "(-inf; -2]", "(-oo; -2]", "(-vô cùng; -2]", "x <= -2"],
      explanation: "Ta có $A \\cup B = (-2; 3] \\cup (1; +\\infty) = (-2; +\\infty)$.<br>Phần bù trong $\\mathbb{R}$ là: $C_{\\mathbb{R}}(A \\cup B) = \\mathbb{R} \\setminus (-2; +\\infty) = (-\\infty; -2]$."
    },
    {
      id: 3,
      skill: "Tính số tập con của tập hợp nghiệm phương trình",
      question: "Câu 3. Cho $A$ là tập hợp các nghiệm thực của phương trình $(x^2 - 9)(x^2 - 3x) = 0$. Hỏi tập hợp $A$ có tất cả bao nhiêu tập hợp con?",
      answer_display: "8",
      acceptable: ["8"],
      explanation: "Giải phương trình: $(x-3)(x+3) \\cdot x(x-3) = 0 \\iff x \\in \\{-3, 0, 3\\}$.<br>Tập $A = \\{-3, 0, 3\\}$ có đúng $3$ phần tử phân biệt.<br>Số tập hợp con là $2^3 = 8$."
    },
    {
      id: 4,
      skill: "Giải bài toán thực tế bằng sơ đồ Venn hai tập hợp",
      question: "Câu 4. Một trường THPT tổ chức hội thao cho 100 học sinh khối 10. Có 55 học sinh đăng ký thi đấu bóng đá, 48 học sinh đăng ký thi đấu cầu lông và 15 học sinh không đăng ký môn nào. Hỏi có bao nhiêu học sinh đăng ký thi đấu CHỈ MỘT trong hai môn bóng đá hoặc cầu lông?",
      answer_display: "67",
      acceptable: ["67"],
      explanation: "Số học sinh thi đấu ít nhất 1 môn là: $100 - 15 = 85$ bạn.<br>Số học sinh thi đấu cả 2 môn là: $(55 + 48) - 85 = 18$ bạn.<br>Số học sinh chỉ thi đấu MỘT trong hai môn là: $85 - 18 = 67$ bạn."
    },
    {
      id: 5,
      skill: "Giải bài toán khảo sát thị trường ứng dụng tập hợp",
      question: "Câu 5 (Vận dụng thực tế). Một công ty sản xuất hai loại sản phẩm A và B. Để điều tra thị trường, công ty phỏng vấn 120 khách hàng: có 75 người dùng sản phẩm A, 60 người dùng sản phẩm B và 25 người không dùng sản phẩm nào. Công ty quyết định tặng quà tri ân cho những khách hàng dùng CẢ HAI sản phẩm A và B. Hỏi công ty cần chuẩn bị bao nhiêu phần quà?",
      answer_display: "40",
      acceptable: ["40"],
      explanation: "Số khách hàng dùng ít nhất một sản phẩm A hoặc B là: $120 - 25 = 95$ người.<br>Số khách hàng dùng CẢ HAI sản phẩm là: $$75 + 60 - 95 = 40$$ người.<br>Vậy công ty cần chuẩn bị đúng 40 phần quà tri ân."
    }
  ]
};

const htmlContent = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${quizData.title}</title>
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">

  <!-- KaTeX -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

  <style>
    :root {
      --primary: #182A78;
      --primary-hover: #111e56;
      --primary-light: #EEF2FB;
      --primary-border: #CCD8F5;
      
      --accent: #C62828;
      --accent-hover: #A31D1D;
      --accent-light: #FEF2F2;
      --accent-border: #FECACA;
      
      --bg-page: #FAFAFA;
      --bg-card: #FFFFFF;
      --bg-card-alt: #F8FAFC;
      
      --text-main: #0F172A;
      --text-secondary: #334155;
      --text-muted: #64748B;
      --border-color: #E2E8F0;
      
      --success: #15803D;
      --success-light: #F0FDF4;
      --success-border: #BBF7D0;
      
      --warning: #D97706;
      --warning-light: #FFFBEB;
      --warning-border: #FDE68A;

      --danger: #DC2626;
      --danger-light: #FEF2F2;
      --danger-border: #FECACA;
      
      --shadow-sm: 0 1px 3px rgba(24, 42, 120, 0.06);
      --shadow-md: 0 4px 14px rgba(24, 42, 120, 0.08);
      --shadow-lg: 0 10px 30px rgba(24, 42, 120, 0.12);
      
      --radius-sm: 8px;
      --radius-md: 12px;
      --radius-lg: 16px;
      --radius-full: 9999px;
      
      --transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: var(--bg-page);
      color: var(--text-main);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      padding-bottom: 60px;
    }

    /* Topbar */
    .topbar {
      background: var(--bg-card);
      border-bottom: 2px solid var(--primary-border);
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: var(--shadow-sm);
    }

    .topbar-container {
      max-width: 1360px;
      margin: 0 auto;
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-icon {
      width: 42px;
      height: 42px;
      background: linear-gradient(135deg, var(--primary) 0%, #283593 100%);
      color: #fff;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 1.25rem;
      box-shadow: 0 3px 8px rgba(24, 42, 120, 0.25);
    }

    .brand-text h1 {
      font-size: 1.05rem;
      font-weight: 800;
      color: var(--primary);
      letter-spacing: -0.01em;
      line-height: 1.2;
    }

    .brand-text p {
      font-size: 0.78rem;
      color: var(--text-muted);
      font-weight: 500;
    }

    .topbar-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .timer-badge {
      display: flex;
      align-items: center;
      gap: 6px;
      background: var(--primary-light);
      border: 1.5px solid var(--primary-border);
      padding: 6px 14px;
      border-radius: var(--radius-full);
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      font-size: 0.95rem;
      color: var(--primary);
    }

    .timer-badge.warning {
      background: var(--warning-light);
      border-color: var(--warning-border);
      color: var(--warning);
      animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.03); }
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      font-family: inherit;
      font-weight: 700;
      font-size: 0.88rem;
      padding: 8px 16px;
      border-radius: var(--radius-md);
      cursor: pointer;
      transition: var(--transition);
      border: 1px solid transparent;
      white-space: nowrap;
    }

    .btn-primary {
      background: var(--primary);
      color: #fff;
    }
    .btn-primary:hover {
      background: var(--primary-hover);
      box-shadow: 0 4px 12px rgba(24, 42, 120, 0.2);
    }

    .btn-accent {
      background: var(--accent);
      color: #fff;
    }
    .btn-accent:hover {
      background: var(--accent-hover);
      box-shadow: 0 4px 12px rgba(198, 40, 40, 0.25);
    }

    .btn-outline {
      background: transparent;
      border-color: var(--border-color);
      color: var(--text-secondary);
    }
    .btn-outline:hover {
      background: var(--bg-card-alt);
      border-color: var(--text-muted);
    }

    .btn-toggle-sol {
      background: var(--bg-card-alt);
      border: 1.5px solid var(--border-color);
      color: var(--text-secondary);
    }
    .btn-toggle-sol.active {
      background: var(--accent-light);
      border-color: var(--accent-border);
      color: var(--accent);
    }

    /* Main Container */
    .main-container {
      max-width: 1360px;
      margin: 24px auto 0 auto;
      padding: 0 20px;
      display: grid;
      grid-template-columns: 1fr 320px;
      gap: 24px;
      align-items: start;
    }

    @media (max-width: 1024px) {
      .main-container {
        grid-template-columns: 1fr;
      }
      .sidebar {
        order: -1;
      }
    }

    /* Exam Header Card */
    .exam-header-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 24px 28px;
      margin-bottom: 24px;
      box-shadow: var(--shadow-sm);
    }

    .exam-info h2 {
      font-size: 1.3rem;
      font-weight: 800;
      color: var(--accent);
      letter-spacing: -0.02em;
      margin-bottom: 6px;
    }

    .exam-info p {
      color: var(--text-secondary);
      font-size: 0.92rem;
      margin-bottom: 16px;
    }

    .exam-meta-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 20px;
    }

    .meta-tag {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 4px 12px;
      border-radius: var(--radius-full);
      font-size: 0.8rem;
      font-weight: 700;
      background: var(--primary-light);
      color: var(--primary);
    }
    .meta-tag.red {
      background: var(--accent-light);
      color: var(--accent);
    }
    .meta-tag.green {
      background: var(--success-light);
      color: var(--success);
    }

    /* 3 Ô Thông tin học sinh bắt buộc */
    .student-info-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr;
      gap: 16px;
      background: var(--bg-card-alt);
      border: 1px dashed var(--primary-border);
      padding: 16px;
      border-radius: var(--radius-md);
    }

    @media (max-width: 768px) {
      .student-info-grid {
        grid-template-columns: 1fr;
      }
    }

    .student-input-item {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .student-input-item label {
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--primary);
    }

    .student-input-item input {
      font-family: inherit;
      padding: 8px 12px;
      border-radius: var(--radius-sm);
      border: 1.5px solid var(--border-color);
      font-size: 0.9rem;
      outline: none;
      transition: var(--transition);
      background: #fff;
    }

    .student-input-item input:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(24, 42, 120, 0.1);
    }

    /* Section Header Box */
    .section-header-box {
      background: linear-gradient(135deg, var(--primary) 0%, #283593 100%);
      color: #fff;
      padding: 14px 20px;
      border-radius: var(--radius-md);
      margin: 28px 0 16px 0;
      box-shadow: var(--shadow-sm);
    }

    .section-header-box h3 {
      font-size: 1.05rem;
      font-weight: 800;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .section-header-box p {
      font-size: 0.82rem;
      opacity: 0.9;
      margin-top: 4px;
    }

    /* Question Cards */
    .question-card {
      background: #fff;
      border-radius: var(--radius-md);
      border: 1px solid var(--border-color);
      padding: 20px 24px;
      margin-bottom: 16px;
      box-shadow: var(--shadow-sm);
      transition: var(--transition);
      position: relative;
    }

    .question-card:hover {
      box-shadow: var(--shadow-md);
      border-color: var(--primary-border);
    }

    .q-header-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      flex-wrap: wrap;
      gap: 8px;
    }

    .q-badge {
      display: inline-flex;
      align-items: center;
      padding: 3px 10px;
      border-radius: var(--radius-full);
      font-size: 0.8rem;
      font-weight: 800;
      background: var(--primary-light);
      color: var(--primary);
    }

    .q-skill-badge {
      font-size: 0.75rem;
      color: var(--text-muted);
      font-weight: 600;
      background: #F1F5F9;
      padding: 2px 8px;
      border-radius: var(--radius-sm);
      border: 1px solid #E2E8F0;
    }

    .q-title {
      font-size: 0.98rem;
      font-weight: 600;
      color: var(--text-main);
      line-height: 1.6;
      margin-bottom: 16px;
    }

    /* Part 1 Options */
    .options-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 10px;
      margin-top: 12px;
    }

    .option-btn {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 14px;
      border-radius: var(--radius-md);
      border: 1.5px solid var(--border-color);
      background: #fff;
      cursor: pointer;
      transition: var(--transition);
      text-align: left;
      font-family: inherit;
      font-size: 0.92rem;
      color: var(--text-secondary);
    }

    .option-btn:hover {
      background: var(--bg-card-alt);
      border-color: var(--primary-border);
    }

    .option-key {
      width: 28px;
      height: 28px;
      border-radius: var(--radius-full);
      border: 1.5px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 0.82rem;
      color: var(--text-secondary);
      flex-shrink: 0;
      transition: var(--transition);
    }

    .option-btn.selected {
      background: var(--primary-light);
      border-color: var(--primary);
      color: var(--primary);
    }
    .option-btn.selected .option-key {
      background: var(--primary);
      color: #fff;
      border-color: var(--primary);
    }

    /* Graded state Part 1 */
    .option-btn.graded-correct {
      background: var(--success-light) !important;
      border-color: var(--success) !important;
      color: var(--success) !important;
    }
    .option-btn.graded-correct .option-key {
      background: var(--success) !important;
      color: #fff !important;
      border-color: var(--success) !important;
    }

    .option-btn.graded-incorrect {
      background: var(--danger-light) !important;
      border-color: var(--danger) !important;
      color: var(--danger) !important;
    }
    .option-btn.graded-incorrect .option-key {
      background: var(--danger) !important;
      color: #fff !important;
      border-color: var(--danger) !important;
    }

    /* Part 2: True/False Table Layout */
    .tf-table {
      width: 100%;
      margin-top: 12px;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      overflow: hidden;
    }

    .tf-row {
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 12px;
      align-items: center;
      padding: 12px 16px;
      border-bottom: 1px solid var(--border-color);
      transition: var(--transition);
      background: #fff;
    }
    .tf-row:last-child {
      border-bottom: none;
    }
    .tf-row:hover {
      background: #F8FAFC;
    }

    .tf-key {
      font-weight: 800;
      color: var(--primary);
      font-size: 0.92rem;
      width: 24px;
    }

    .tf-content {
      font-size: 0.92rem;
      color: var(--text-main);
    }

    .tf-actions {
      display: flex;
      gap: 8px;
    }

    .tf-btn {
      padding: 5px 14px;
      border-radius: var(--radius-full);
      font-size: 0.82rem;
      font-weight: 700;
      border: 1.5px solid var(--border-color);
      background: #fff;
      color: var(--text-secondary);
      cursor: pointer;
      transition: var(--transition);
    }

    .tf-btn:hover {
      background: #F1F5F9;
    }

    .tf-btn.active-true {
      background: #E0F2FE;
      border-color: #0284C7;
      color: #0369A1;
    }

    .tf-btn.active-false {
      background: #FEF2F2;
      border-color: #DC2626;
      color: #B91C1C;
    }

    .tf-btn.graded-correct {
      background: var(--success-light) !important;
      border-color: var(--success) !important;
      color: var(--success) !important;
    }
    .tf-btn.graded-incorrect {
      background: var(--danger-light) !important;
      border-color: var(--danger) !important;
      color: var(--danger) !important;
    }

    /* Part 3: Short Answer Box */
    .sa-box {
      margin-top: 14px;
      display: flex;
      gap: 12px;
      align-items: center;
      flex-wrap: wrap;
    }

    .sa-input {
      font-family: 'JetBrains Mono', monospace;
      padding: 10px 14px;
      font-size: 0.95rem;
      border: 1.5px solid var(--border-color);
      border-radius: var(--radius-sm);
      outline: none;
      width: 280px;
      transition: var(--transition);
    }

    .sa-input:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(24, 42, 120, 0.1);
    }

    .sa-feedback {
      font-size: 0.85rem;
      font-weight: 700;
      display: none;
    }
    .sa-feedback.correct {
      color: var(--success);
      display: inline-block;
    }
    .sa-feedback.incorrect {
      color: var(--danger);
      display: inline-block;
    }

    /* Solution Box */
    .solution-box {
      display: none;
      margin-top: 16px;
      padding: 16px 20px;
      background: #F8FAFC;
      border: 1.5px dashed #CBD5E1;
      border-radius: var(--radius-md);
      font-size: 0.9rem;
      color: var(--text-secondary);
      border-left: 5px solid var(--accent);
    }

    .solution-box.show {
      display: block;
      animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-4px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .sol-header {
      font-weight: 800;
      color: var(--accent);
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .sol-content {
      line-height: 1.65;
    }

    /* Sidebar / Question Palette */
    .sidebar {
      position: sticky;
      top: 76px;
    }

    .palette-card {
      background: #fff;
      border-radius: var(--radius-lg);
      border: 1px solid var(--border-color);
      padding: 20px;
      box-shadow: var(--shadow-sm);
    }

    .palette-title {
      font-size: 0.95rem;
      font-weight: 800;
      color: var(--primary);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .progress-bar-container {
      background: #E2E8F0;
      height: 8px;
      border-radius: var(--radius-full);
      overflow: hidden;
      margin-bottom: 16px;
    }

    .progress-bar {
      background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
      height: 100%;
      width: 0%;
      transition: width 0.3s ease;
    }

    .palette-section-label {
      font-size: 0.78rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--text-muted);
      margin: 12px 0 8px 0;
    }

    .palette-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 6px;
      margin-bottom: 12px;
    }

    .pal-btn {
      aspect-ratio: 1;
      border: 1.5px solid var(--border-color);
      background: #fff;
      border-radius: var(--radius-sm);
      font-weight: 700;
      font-size: 0.82rem;
      cursor: pointer;
      transition: var(--transition);
      color: var(--text-secondary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'JetBrains Mono', monospace;
    }

    .pal-btn:hover {
      border-color: var(--primary);
      background: var(--primary-light);
    }

    .pal-btn.answered {
      background: var(--primary);
      color: #fff;
      border-color: var(--primary);
    }

    .pal-btn.correct {
      background: var(--success) !important;
      color: #fff !important;
      border-color: var(--success) !important;
    }

    .pal-btn.incorrect {
      background: var(--danger) !important;
      color: #fff !important;
      border-color: var(--danger) !important;
    }

    .palette-actions {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    /* Modal Kết Quả */
    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(4px);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 2000;
      padding: 20px;
    }

    .modal-overlay.open {
      display: flex;
    }

    .modal-card {
      background: #fff;
      border-radius: var(--radius-lg);
      max-width: 520px;
      width: 100%;
      padding: 32px;
      box-shadow: var(--shadow-lg);
      text-align: center;
      animation: modalSlide 0.3s ease;
    }

    @keyframes modalSlide {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .score-circle {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--accent) 0%, #E53935 100%);
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto 16px auto;
      box-shadow: 0 8px 20px rgba(198, 40, 40, 0.3);
    }

    .score-number {
      font-size: 2.2rem;
      font-weight: 800;
      font-family: 'JetBrains Mono', monospace;
      line-height: 1;
    }

    .score-max {
      font-size: 0.75rem;
      opacity: 0.9;
      font-weight: 600;
    }

    .modal-card h3 {
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--primary);
      margin-bottom: 6px;
    }

    .modal-card p {
      color: var(--text-secondary);
      font-size: 0.92rem;
      margin-bottom: 20px;
    }

    .score-detail-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      background: var(--bg-card-alt);
      padding: 12px;
      border-radius: var(--radius-md);
      margin-bottom: 24px;
    }

    .score-detail-item {
      text-align: center;
    }

    .score-detail-label {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--text-muted);
    }

    .score-detail-val {
      font-size: 1.1rem;
      font-weight: 800;
      color: var(--primary);
      font-family: 'JetBrains Mono', monospace;
    }

    /* Print Styles */
    @media print {
      .topbar, .sidebar, .btn, .tf-actions, .sa-box button, .student-info-grid {
        display: none !important;
      }
      .main-container {
        grid-template-columns: 1fr;
        padding: 0;
        margin: 0;
      }
      .question-card {
        border: 1px solid #ccc;
        box-shadow: none;
        page-break-inside: avoid;
      }
      .solution-box {
        display: block !important;
      }
    }
  </style>
</head>
<body>

  <!-- Topbar -->
  <header class="topbar">
    <div class="topbar-container">
      <div class="brand">
        <div class="brand-icon">10</div>
        <div class="brand-text">
          <h1>CHUYÊN ĐỀ TOÁN 10 - NÂNG CAO</h1>
          <p>Tập hợp và Các phép toán Tập hợp (GDPT 2018)</p>
        </div>
      </div>

      <div class="topbar-actions">
        <div class="timer-badge" id="timerBadge">
          ⏱️ <span id="timerDisplay">45:00</span>
        </div>
        <button class="btn btn-outline" id="btnPauseTimer" title="Tạm dừng / Tiếp tục">⏸️</button>
        <button class="btn btn-toggle-sol" id="btnToggleSol">💡 Hiện lời giải</button>
        <button class="btn btn-accent" id="btnSubmitTop">📝 Nộp bài</button>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="main-container">
    <div class="quiz-content">

      <!-- Exam Header Card -->
      <div class="exam-header-card">
        <div class="exam-info">
          <h2>${quizData.title}</h2>
          <p>${quizData.subtitle} - Mức độ Vận dụng & Vận dụng cao.</p>
          <div class="exam-meta-tags">
            <span class="meta-tag">⏱️ 45 phút</span>
            <span class="meta-tag red">🎯 19 câu hỏi Vận dụng & VDC</span>
            <span class="meta-tag green">💯 Thang điểm 10.0</span>
          </div>
        </div>

        <!-- 3 ô thông tin học sinh bắt buộc theo quy tắc GEMINI.md -->
        <div class="student-info-grid">
          <div class="student-input-item">
            <label for="input-ten">👤 Họ và tên:</label>
            <input type="text" id="input-ten" placeholder="Nhập họ và tên...">
          </div>
          <div class="student-input-item">
            <label for="input-ma-hs">🏷️ Mã Học Sinh:</label>
            <input type="text" id="input-ma-hs" placeholder="Ví dụ: NTH26-001">
          </div>
          <div class="student-input-item">
            <label for="input-lop">🏫 Lớp / Nhóm:</label>
            <input type="text" id="input-lop" placeholder="Ví dụ: 10A1">
          </div>
        </div>
      </div>

      <!-- PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN -->
      <div class="section-header-box">
        <h3>PHẦN I. TRẮC NGHIỆM NHIỀU LỰA CHỌN (10 CÂU - 3.0 ĐIỂM)</h3>
        <p>Khoanh tròn vào chữ cái A, B, C hoặc D trước phương án trả lời đúng nhất. Mỗi câu đúng được 0.3 điểm.</p>
      </div>
      <div id="part1Container"></div>

      <!-- PHẦN II: TRẮC NGHIỆM ĐÚNG - SAI -->
      <div class="section-header-box" style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);">
        <h3>PHẦN II. TRẮC NGHIỆM ĐÚNG - SAI (4 CÂU - 4.0 ĐIỂM)</h3>
        <p>Ghi Đúng (Đ) hoặc Sai (S) cho từng nhận định a, b, c, d. Đúng 1 ý: 0.1đ | 2 ý: 0.25đ | 3 ý: 0.5đ | 4 ý: 1.0đ.</p>
      </div>
      <div id="part2Container"></div>

      <!-- PHẦN III: TRẢ LỜI NGẮN -->
      <div class="section-header-box" style="background: linear-gradient(135deg, #991b1b 0%, #dc2626 100%);">
        <h3>PHẦN III. CÂU HỎI TRẢ LỜI NGẮN (5 CÂU - 3.0 ĐIỂM)</h3>
        <p>Điền đáp số ngắn gọn vào ô tương ứng. Mỗi câu đúng được 0.6 điểm.</p>
      </div>
      <div id="part3Container"></div>

    </div>

    <!-- Sidebar / Question Palette -->
    <aside class="sidebar">
      <div class="palette-card">
        <div class="palette-title">
          <span>Tiến độ làm bài</span>
          <span id="progressText" style="font-family:'JetBrains Mono',monospace; color:var(--primary);">0/19</span>
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar" id="progressBar"></div>
        </div>

        <div class="palette-section-label">Phần I: Trắc nghiệm (10 câu)</div>
        <div class="palette-grid" id="palPart1"></div>

        <div class="palette-section-label">Phần II: Đúng - Sai (4 câu)</div>
        <div class="palette-grid" id="palPart2"></div>

        <div class="palette-section-label">Phần III: Trả lời ngắn (5 câu)</div>
        <div class="palette-grid" id="palPart3"></div>

        <div class="palette-actions">
          <button class="btn btn-accent" id="btn-nop-bai" style="width: 100%;">📝 Nộp bài & Chấm điểm</button>
          <button class="btn btn-outline" id="btnResetQuiz" style="width: 100%;">🔄 Làm lại đề</button>
          <button class="btn btn-outline" onclick="window.print()" style="width: 100%;">🖨️ In đề thi / PDF</button>
        </div>
      </div>
    </aside>
  </main>

  <!-- Modal Kết Quả -->
  <div class="modal-overlay" id="scoreModal">
    <div class="modal-card">
      <div class="score-circle">
        <div class="score-number" id="modalScore">0.0</div>
        <div class="score-max">/ 10 điểm</div>
      </div>
      <h3 id="modalGradeText">KẾT QUẢ BÀI THI</h3>
      <p id="modalSubText">Bạn đã hoàn thành bài thi!</p>

      <div class="score-detail-grid">
        <div class="score-detail-item">
          <div class="score-detail-label">Phần I</div>
          <div class="score-detail-val" id="scoreP1">0.0 / 3.0</div>
        </div>
        <div class="score-detail-item">
          <div class="score-detail-label">Phần II</div>
          <div class="score-detail-val" id="scoreP2">0.0 / 4.0</div>
        </div>
        <div class="score-detail-item">
          <div class="score-detail-label">Phần III</div>
          <div class="score-detail-val" id="scoreP3">0.0 / 3.0</div>
        </div>
      </div>

      <div id="modalSkillsMissed" style="text-align: left; margin-bottom: 20px; font-size: 0.85rem; color: var(--danger); max-height: 120px; overflow-y: auto;"></div>

      <div style="display: flex; gap: 10px; justify-content: center;">
        <button class="btn btn-primary" id="btnCloseModal">🔍 Xem chi tiết lời giải</button>
        <button class="btn btn-outline" id="btnRetakeModal">🔄 Làm lại</button>
      </div>
    </div>
  </div>

  <script>
    const quiz = ${JSON.stringify(quizData)};

    // State
    const userAnswers = {
      part1: {},
      part2: {},
      part3: {}
    };

    let isSubmitted = false;
    let isSolutionsVisible = false;
    let timerSeconds = 45 * 60;
    let timerInterval = null;
    let isTimerRunning = true;

    let diem_so = 0;
    let mang_cau_sai = [];

    // TIMER
    function startTimer() {
      const display = document.getElementById('timerDisplay');
      const badge = document.getElementById('timerBadge');

      timerInterval = setInterval(() => {
        if (!isTimerRunning) return;
        timerSeconds--;

        if (timerSeconds <= 0) {
          clearInterval(timerInterval);
          timerSeconds = 0;
          alert('Đã hết thời gian làm bài! Hệ thống sẽ tự động chấm bài.');
          document.getElementById('btn-nop-bai').click();
        }

        const mins = Math.floor(timerSeconds / 60);
        const secs = timerSeconds % 60;
        display.textContent = \`\${mins.toString().padStart(2, '0')}:\${secs.toString().padStart(2, '0')}\`;

        if (timerSeconds <= 300) {
          badge.classList.add('warning');
        }
      }, 1000);
    }

    document.getElementById('btnPauseTimer').addEventListener('click', function() {
      if (isSubmitted) return;
      isTimerRunning = !isTimerRunning;
      this.textContent = isTimerRunning ? '⏸️' : '▶️';
      this.title = isTimerRunning ? 'Tạm dừng' : 'Tiếp tục';
    });

    // RENDER QUESTIONS
    function renderQuiz() {
      // Part 1
      const p1Box = document.getElementById('part1Container');
      p1Box.innerHTML = quiz.part1.map(q => \`
        <div class="question-card" id="card-p1-\${q.id}">
          <div class="q-header-meta">
            <span class="q-badge">Câu \${q.id} (P.I)</span>
            <span class="q-skill-badge">🎯 \${q.skill}</span>
          </div>
          <div class="q-title">\${q.question}</div>
          <div class="options-grid">
            \${q.options.map(opt => \`
              <button class="option-btn" data-qid="\${q.id}" data-key="\${opt.key}" onclick="selectPart1(\${q.id}, '\${opt.key}')">
                <span class="option-key">\${opt.key}</span>
                <span class="option-text">\${opt.text}</span>
              </button>
            \`).join('')}
          </div>
          <div class="solution-box" id="sol-p1-\${q.id}">
            <div class="sol-header">💡 Lời giải chi tiết:</div>
            <div class="sol-content">\${q.explanation}</div>
          </div>
        </div>
      \`).join('');

      // Part 2
      const p2Box = document.getElementById('part2Container');
      p2Box.innerHTML = quiz.part2.map(q => \`
        <div class="question-card" id="card-p2-\${q.id}">
          <div class="q-header-meta">
            <span class="q-badge">Câu \${q.id} (P.II)</span>
            <span class="q-skill-badge">🎯 \${q.skill}</span>
          </div>
          <div class="q-title">\${q.context}</div>
          <div class="tf-table">
            \${q.items.map(item => \`
              <div class="tf-row" id="row-p2-\${q.id}-\${item.label}">
                <div class="tf-key">\${item.label})</div>
                <div class="tf-content">\${item.text}</div>
                <div class="tf-actions">
                  <button class="tf-btn" id="tf-btn-\${q.id}-\${item.label}-true" onclick="selectPart2(\${q.id}, '\${item.label}', true)">Đúng</button>
                  <button class="tf-btn" id="tf-btn-\${q.id}-\${item.label}-false" onclick="selectPart2(\${q.id}, '\${item.label}', false)">Sai</button>
                </div>
              </div>
            \`).join('')}
          </div>
          <div class="solution-box" id="sol-p2-\${q.id}">
            <div class="sol-header">💡 Lời giải chi tiết:</div>
            <div class="sol-content">
              \${q.items.map(it => \`
                <div style="margin-bottom: 6px;"><b>\${it.label})</b>: \${it.explanation}</div>
              \`).join('')}
            </div>
          </div>
        </div>
      \`).join('');

      // Part 3
      const p3Box = document.getElementById('part3Container');
      p3Box.innerHTML = quiz.part3.map(q => \`
        <div class="question-card" id="card-p3-\${q.id}">
          <div class="q-header-meta">
            <span class="q-badge">Câu \${q.id} (P.III)</span>
            <span class="q-skill-badge">🎯 \${q.skill}</span>
          </div>
          <div class="q-title">\${q.question}</div>
          <div class="sa-box">
            <input type="text" class="sa-input" id="sa-input-\${q.id}" placeholder="Điền đáp số..." oninput="recordPart3(\${q.id}, this.value)">
            <span class="sa-feedback" id="sa-fb-\${q.id}"></span>
          </div>
          <div class="solution-box" id="sol-p3-\${q.id}">
            <div class="sol-header">💡 Lời giải chi tiết:</div>
            <div class="sol-content">
              <div style="font-weight:700; color:var(--primary); margin-bottom:4px;">Đáp án chuẩn: \${q.answer_display}</div>
              \${q.explanation}
            </div>
          </div>
        </div>
      \`).join('');

      renderPalette();
    }

    // PALETTE
    function renderPalette() {
      // P1
      const palP1 = document.getElementById('palPart1');
      palP1.innerHTML = quiz.part1.map(q => \`
        <button class="pal-btn" id="pal-btn-p1-\${q.id}" onclick="scrollToCard('card-p1-\${q.id}')">\${q.id}</button>
      \`).join('');

      // P2
      const palP2 = document.getElementById('palPart2');
      palP2.innerHTML = quiz.part2.map(q => \`
        <button class="pal-btn" id="pal-btn-p2-\${q.id}" onclick="scrollToCard('card-p2-\${q.id}')">\${q.id}</button>
      \`).join('');

      // P3
      const palP3 = document.getElementById('palPart3');
      palP3.innerHTML = quiz.part3.map(q => \`
        <button class="pal-btn" id="pal-btn-p3-\${q.id}" onclick="scrollToCard('card-p3-\${q.id}')">\${q.id}</button>
      \`).join('');
    }

    function scrollToCard(id) {
      const el = document.getElementById(id);
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elRect = el.getBoundingClientRect().top;
        const elPos = elRect - bodyRect;
        const offsetPos = elPos - offset;
        window.scrollTo({ top: offsetPos, behavior: 'smooth' });
      }
    }

    // USER INTERACTION
    window.selectPart1 = function(qid, key) {
      if (isSubmitted) return;
      userAnswers.part1[qid] = key;
      const card = document.getElementById(\`card-p1-\${qid}\`);
      card.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.key === key);
      });
      document.getElementById(\`pal-btn-p1-\${qid}\`).classList.add('answered');
      updateProgress();
    };

    window.selectPart2 = function(qid, label, val) {
      if (isSubmitted) return;
      if (!userAnswers.part2[qid]) userAnswers.part2[qid] = {};
      userAnswers.part2[qid][label] = val;

      const btnT = document.getElementById(\`tf-btn-\${qid}-\${label}-true\`);
      const btnF = document.getElementById(\`tf-btn-\${qid}-\${label}-false\`);

      if (val === true) {
        btnT.classList.add('active-true');
        btnF.classList.remove('active-false');
      } else {
        btnF.classList.add('active-false');
        btnT.classList.remove('active-true');
      }

      const q = quiz.part2.find(item => item.id === qid);
      const answeredAll = q.items.every(it => userAnswers.part2[qid][it.label] !== undefined);
      if (answeredAll) {
        document.getElementById(\`pal-btn-p2-\${qid}\`).classList.add('answered');
      }
      updateProgress();
    };

    window.recordPart3 = function(qid, val) {
      if (isSubmitted) return;
      const trimmed = val.trim();
      if (trimmed) {
        userAnswers.part3[qid] = trimmed;
        document.getElementById(\`pal-btn-p3-\${qid}\`).classList.add('answered');
      } else {
        delete userAnswers.part3[qid];
        document.getElementById(\`pal-btn-p3-\${qid}\`).classList.remove('answered');
      }
      updateProgress();
    };

    function updateProgress() {
      let answeredCount = 0;
      answeredCount += Object.keys(userAnswers.part1).length;
      quiz.part2.forEach(q => {
        if (userAnswers.part2[q.id] && q.items.every(it => userAnswers.part2[q.id][it.label] !== undefined)) {
          answeredCount++;
        }
      });
      answeredCount += Object.keys(userAnswers.part3).length;

      const total = quiz.part1.length + quiz.part2.length + quiz.part3.length;
      const pct = Math.round((answeredCount / total) * 100);

      document.getElementById('progressText').textContent = \`\${answeredCount}/\${total}\`;
      document.getElementById('progressBar').style.width = \`\${pct}%\`;
    }

    // CHẤM ĐIỂM
    function normalizeStr(s) {
      return (s || '').toLowerCase()
        .replace(/\\s+/g, '')
        .replace(/;/g, ',')
        .replace(/\\$/g, '');
    }

    function chamDiemBaiThi() {
      isSubmitted = true;
      isTimerRunning = false;

      let scoreP1 = 0;
      let scoreP2 = 0;
      let scoreP3 = 0;
      mang_cau_sai = [];

      // 1. Chấm Phần I (10 câu, mỗi câu 0.3đ)
      quiz.part1.forEach(q => {
        const userChoice = userAnswers.part1[q.id];
        const palBtn = document.getElementById(\`pal-btn-p1-\${q.id}\`);
        const card = document.getElementById(\`card-p1-\${q.id}\`);

        card.querySelectorAll('.option-btn').forEach(btn => {
          if (btn.dataset.key === q.correct) {
            btn.classList.add('graded-correct');
          } else if (btn.dataset.key === userChoice) {
            btn.classList.add('graded-incorrect');
          }
        });

        if (userChoice === q.correct) {
          scoreP1 += 0.3;
          palBtn.classList.add('correct');
        } else {
          palBtn.classList.add('incorrect');
          mang_cau_sai.push(q.skill);
        }
      });

      // 2. Chấm Phần II (4 câu, Đúng-Sai quy chuẩn: 1 ý 0.1đ, 2 ý 0.25đ, 3 ý 0.5đ, 4 ý 1.0đ)
      const p2Weights = { 1: 0.1, 2: 0.25, 3: 0.5, 4: 1.0 };
      quiz.part2.forEach(q => {
        const userQ = userAnswers.part2[q.id] || {};
        let correctCount = 0;
        const palBtn = document.getElementById(\`pal-btn-p2-\${q.id}\`);

        q.items.forEach(it => {
          const userVal = userQ[it.label];
          const btnT = document.getElementById(\`tf-btn-\${q.id}-\${it.label}-true\`);
          const btnF = document.getElementById(\`tf-btn-\${q.id}-\${it.label}-false\`);

          if (it.correct === true) {
            btnT.classList.add('graded-correct');
            if (userVal === false) btnF.classList.add('graded-incorrect');
          } else {
            btnF.classList.add('graded-correct');
            if (userVal === true) btnT.classList.add('graded-incorrect');
          }

          if (userVal === it.correct) {
            correctCount++;
          }
        });

        const qScore = p2Weights[correctCount] || 0;
        scoreP2 += qScore;

        if (correctCount === 4) {
          palBtn.classList.add('correct');
        } else {
          palBtn.classList.add('incorrect');
          mang_cau_sai.push(q.skill);
        }
      });

      // 3. Chấm Phần III (5 câu, mỗi câu 0.6đ)
      quiz.part3.forEach(q => {
        const userVal = normalizeStr(userAnswers.part3[q.id]);
        const palBtn = document.getElementById(\`pal-btn-p3-\${q.id}\`);
        const fb = document.getElementById(\`sa-fb-\${q.id}\`);
        const input = document.getElementById(\`sa-input-\${q.id}\`);

        const isCorrect = q.acceptable.some(acc => normalizeStr(acc) === userVal);

        if (isCorrect) {
          scoreP3 += 0.6;
          palBtn.classList.add('correct');
          fb.textContent = '✓ Chính xác (+0.6đ)';
          fb.className = 'sa-feedback correct';
          input.style.borderColor = 'var(--success)';
        } else {
          palBtn.classList.add('incorrect');
          fb.textContent = \`✗ Sai (Đáp án: \${q.answer_display})\`;
          fb.className = 'sa-feedback incorrect';
          input.style.borderColor = 'var(--danger)';
          mang_cau_sai.push(q.skill);
        }
      });

      // Tổng điểm (thang 10)
      diem_so = Math.round((scoreP1 + scoreP2 + scoreP3) * 10) / 10;

      // Cập nhật UI Modal
      document.getElementById('modalScore').textContent = diem_so.toFixed(1);
      document.getElementById('scoreP1').textContent = \`\${scoreP1.toFixed(1)} / 3.0\`;
      document.getElementById('scoreP2').textContent = \`\${scoreP2.toFixed(2)} / 4.0\`;
      document.getElementById('scoreP3').textContent = \`\${scoreP3.toFixed(1)} / 3.0\`;

      let gradeTitle = "XUẤT SẮC!";
      let gradeSub = "Kiến thức về Tập hợp và các phép toán tập hợp rất vững vàng!";
      if (diem_so < 5.0) {
        gradeTitle = "CẦN CỐ GẮNG HƠN!";
        gradeSub = "Em hãy xem lại các chuyên đề sai sót phía dưới và ôn lại lý thuyết nhé.";
      } else if (diem_so < 8.0) {
        gradeTitle = "KẾT QUẢ KHÁ TỐT!";
        gradeSub = "Cần chú ý kỹ các bẫy tham số m và các bài toán chứa điều kiện mút biên.";
      }

      const skillsBox = document.getElementById('modalSkillsMissed');
      if (mang_cau_sai.length > 0) {
        skillsBox.innerHTML = '<b>Kỹ năng cần ôn luyện thêm:</b><ul style="padding-left: 18px; margin-top: 4px;">' +
          [...new Set(mang_cau_sai)].map(s => \`<li>\${s}</li>\`).join('') + '</ul>';
      } else {
        skillsBox.innerHTML = '<b style="color: var(--success);">Xuất sắc! Em không sai kỹ năng nào.</b>';
      }

      document.getElementById('modalGradeText').textContent = gradeTitle;
      document.getElementById('modalSubText').textContent = gradeSub;
      document.getElementById('scoreModal').classList.add('open');

      toggleSolutions(true);
    }

    // TÍCH HỢP HỆ THỐNG CHẤM ĐIỂM TỰ ĐỘNG - N8N
    const N8N_WEBHOOK_URL = "http://localhost:5678/webhook-test/cham-diem-integra";

    document.getElementById('btn-nop-bai').addEventListener('click', async function() {
        if (!isSubmitted) {
            chamDiemBaiThi();
        }

        const tenHocSinh = document.getElementById('input-ten') ? document.getElementById('input-ten').value : "Ẩn danh";
        // LẤY THÊM MÃ HS VÀ LỚP
        const maHocSinh = document.getElementById('input-ma-hs') ? document.getElementById('input-ma-hs').value : "Trống";
        const lopNhom = document.getElementById('input-lop') ? document.getElementById('input-lop').value : "Trống";
        
        const tenBaiThi = document.title || "Bài kiểm tra Toán"; 
        
        const payload = {
            hoc_sinh: tenHocSinh,
            ma_hs: maHocSinh,   // Dữ liệu mới cho n8n
            lop: lopNhom,       // Dữ liệu mới cho n8n
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
                // Không cần đợi JSON trả về nữa, chỉ cần Webhook thành công
                alert(\`Nộp bài thành công!\\nĐiểm của em: \${diem_so}\\nKết quả chi tiết đã được gửi về Thầy Ngọc.\`);
            } else {
                alert("Có lỗi đường truyền khi nộp bài. Vui lòng thử lại.");
            }
        } catch (error) {
            alert("Đã ghi nhận điểm: " + diem_so + ". (Không thể kết nối đến máy chủ Integra).");
        } finally {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    });

    // Nút nộp bài trên Topbar
    document.getElementById('btnSubmitTop').addEventListener('click', () => {
      document.getElementById('btn-nop-bai').click();
    });

    function toggleSolutions(forceShow = null) {
      if (forceShow !== null) {
        isSolutionsVisible = forceShow;
      } else {
        isSolutionsVisible = !isSolutionsVisible;
      }

      const boxes = document.querySelectorAll('.solution-box');
      boxes.forEach(b => {
        if (isSolutionsVisible) b.classList.add('show');
        else b.classList.remove('show');
      });

      const btn = document.getElementById('btnToggleSol');
      if (btn) {
        if (isSolutionsVisible) {
          btn.classList.add('active');
          btn.textContent = '🙈 Ẩn lời giải';
        } else {
          btn.classList.remove('active');
          btn.textContent = '💡 Hiện lời giải';
        }
      }
    }

    function resetQuiz() {
      if (!confirm('Bạn có chắc chắn muốn làm lại bài thi từ đầu?')) return;
      location.reload();
    }

    // EVENT LISTENERS KHÁC
    document.getElementById('btnToggleSol').addEventListener('click', () => toggleSolutions());
    document.getElementById('btnResetQuiz').addEventListener('click', resetQuiz);
    document.getElementById('btnCloseModal').addEventListener('click', () => {
      document.getElementById('scoreModal').classList.remove('open');
    });
    document.getElementById('btnRetakeModal').addEventListener('click', () => {
      document.getElementById('scoreModal').classList.remove('open');
      location.reload();
    });

    function renderMath() {
      if (window.renderMathInElement) {
        renderMathInElement(document.body, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\\\(', right: '\\\\)', display: false},
            {left: '\\\\[', right: '\\\\]', display: true}
          ],
          throwOnError: false
        });
      }
    }

    // INIT
    window.addEventListener('DOMContentLoaded', () => {
      renderQuiz();
      startTimer();
      setTimeout(renderMath, 200);
      setTimeout(renderMath, 800);
    });
  </script>
</body>
</html>
`;

const outputPath = path.join(__dirname, '..', 'To10_Web', 'To10_C1_B2_TapHop_PhepToan.html');
fs.writeFileSync(outputPath, htmlContent, 'utf8');
console.log('Successfully generated:', outputPath);
