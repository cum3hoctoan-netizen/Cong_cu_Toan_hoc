import fs from "fs";

const quizData = [
  {
    id: 1,
    question_text: "Tìm tọa độ đỉnh $I$ của parabol $(P): y = -x^2 + 4x - 3$.",
    options: [
      "A. $I(-2; -15)$",
      "B. $I(2; 1)$",
      "C. $I(4; -3)$",
      "D. $I(2; -1)$"
    ],
    correct_answer: "B",
    explanation: "Đáp án B đúng: Parabol có hệ số $a = -1, b = 4, c = -3$. Hoành độ đỉnh là $x_I = -\\frac{b}{2a} = -\\frac{4}{2(-1)} = 2$. Thay $x = 2$ vào phương trình hàm số ta được tung độ đỉnh: $y_I = -(2)^2 + 4(2) - 3 = -4 + 8 - 3 = 1$. Vậy đỉnh $I(2; 1)$. Phẫu thuật bẫy sai lầm: Học sinh chọn A do quên dấu trừ trong công thức hoành độ đỉnh ($x_I = \\frac{b}{2a} = -2 \\Rightarrow y_I = -15$). Học sinh chọn C do nhầm sang công thức tổng nghiệm của định lý Vi-ét ($x = -\\frac{b}{a} = 4$). Học sinh chọn D do sai lầm về dấu khi tính lũy thừa: ngộ nhận $-(2)^2 = (-2)^2 = 4$ dẫn đến tính nhầm tung độ bằng $-1$."
  },
  {
    id: 2,
    question_text: "Xác định phương trình trục đối xứng của parabol $(P): y = 2x^2 - 4x + 1$.",
    options: [
      "A. $x = 1$",
      "B. $x = -1$",
      "C. $y = 1$",
      "D. $1$"
    ],
    correct_answer: "A",
    explanation: "Đáp án A đúng: Trục đối xứng của parabol $y = ax^2 + bx + c$ luôn là đường thẳng có phương trình $x = -\\frac{b}{2a}$. Với $a = 2, b = -4$, ta có $x = -\\frac{-4}{2(2)} = 1$. Vậy trục đối xứng là đường thẳng $x = 1$. Phẫu thuật bẫy sai lầm: Học sinh chọn B do áp dụng công thức thiếu dấu trừ ($x = \\frac{b}{2a} = -1$). Học sinh chọn C do nhầm trục đối xứng dọc (song song $Oy$, dạng $x = x_0$) sang đường nằm ngang $y = 1$. Học sinh chọn D mắc lỗi bản chất hình học khi biểu diễn trục đối xứng bằng một số vô hướng đơn lẻ 1 thay vì phương trình đường thẳng $x = 1$ trong mặt phẳng $Oxy$."
  },
  {
    id: 3,
    question_text: "Tìm khoảng nghịch biến của hàm số bậc hai $y = -x^2 + 2x + 3$.",
    options: [
      "A. $(-\\infty; 1)$",
      "B. $(1; +\\infty)$",
      "C. $(-\\infty; 4)$",
      "D. $(4; +\\infty)$"
    ],
    correct_answer: "B",
    explanation: "Đáp án B đúng: Hệ số $a = -1 < 0$ nên parabol có bề lõm quay xuống dưới (đồ thị đi lên rồi đi xuống). Hoành độ đỉnh là $x_I = -\\frac{2}{2(-1)} = 1$. Do đó hàm số đồng biến trên $(-\\infty; 1)$ và nghịch biến trên $(1; +\\infty)$. Phẫu thuật bẫy sai lầm: Học sinh chọn A do nhớ nhầm dạng đồ thị của trường hợp $a > 0$ (bề lõm quay lên, đi xuống rồi đi lên). Học sinh chọn C hoặc D mắc bẫy kinh điển 'nhầm vai trò biến $x$ và giá trị $y$': tính tung độ đỉnh $y_I = -(1)^2 + 2(1) + 3 = 4$ rồi lấy số 4 này để kết luận khoảng biến thiên của biến $x$. Cần lưu ý: khoảng đơn điệu bắt buộc phải là khoảng của biến số $x$, không phải của $y$."
  },
  {
    id: 4,
    question_text: "Tìm giá trị lớn nhất ($M$) và giá trị nhỏ nhất ($m$) của hàm số $y = x^2 - 4x + 3$ trên đoạn $[0; 3]$.",
    options: [
      "A. $M = 3, m = 0$",
      "B. $M = 3, m = -1$",
      "C. $M = 0, m = -1$",
      "D. $M = 3, m = 3$"
    ],
    correct_answer: "B",
    explanation: "Đáp án B đúng: Hoành độ đỉnh của parabol là $x_I = -\\frac{-4}{2(1)} = 2$. Nhận thấy $x_I = 2 \\in [0; 3]$. Ta tính giá trị tại đỉnh và hai đầu mút: $f(0) = 3$, $f(3) = 3^2 - 4(3) + 3 = 0$, $f(2) = 2^2 - 4(2) + 3 = -1$. So sánh ba giá trị: $-1 < 0 < 3$, suy ra trên đoạn $[0; 3]$, $M = 3$ (tại $x = 0$) và $m = -1$ (tại $x = 2$). Phẫu thuật bẫy sai lầm: Học sinh chọn A do áp dụng rập khuôn quy trình của hàm đơn điệu, chỉ tính hai đầu mút $f(0) = 3$ và $f(3) = 0$ rồi vội vã kết luận $m = 0$, hoàn toàn bỏ qua việc đỉnh parabol (điểm thấp nhất của đồ thị) nằm lọt trong đoạn đang xét. Học sinh chọn C do tính sai hoặc nhầm lẫn $0$ là giá trị lớn nhất."
  },
  {
    id: 5,
    question_text: "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = (m - 2)x^2 + 2x - 1$ là một hàm số bậc hai.",
    options: [
      "A. $m > 2$",
      "B. $m \\neq 2$",
      "C. $m = 2$",
      "D. Với mọi $m \\in \\mathbb{R}$"
    ],
    correct_answer: "B",
    explanation: "Đáp án B đúng: Theo định nghĩa hàm số bậc hai $y = ax^2 + bx + c$, điều kiện tiên quyết là hệ số $a \\neq 0$. Ở đây $a = m - 2$, do đó hàm số là bậc hai khi và chỉ khi $m - 2 \\neq 0 \\Leftrightarrow m \\neq 2$. Phẫu thuật bẫy sai lầm: Học sinh chọn A do nhầm sang điều kiện để đồ thị có bề lõm quay lên trên ($a > 0 \\Leftrightarrow m > 2$). Học sinh chọn C do nhầm từ 'khác 0' thành 'bằng 0', tức là tìm điều kiện để hàm số bị suy biến thành bậc nhất ($y = 2x - 1$). Học sinh chọn D do chủ quan, bỏ qua việc kiểm tra hệ số $a$, mặc định cứ thấy có $x^2$ là hàm bậc hai."
  },
  {
    id: 6,
    question_text: "Đồ thị parabol $y = ax^2 + bx + c$ có bề lõm quay xuống dưới ($a < 0$), cắt trục tung tại điểm nằm phía trên trục hoành ($c > 0$) và có đỉnh nằm bên phải trục tung ($x_I > 0$). Khẳng định nào sau đây về dấu của hệ số $b$ là đúng?",
    options: [
      "A. $b > 0$",
      "B. $b < 0$",
      "C. $b = 0$",
      "D. Không xác định được dấu của $b$"
    ],
    correct_answer: "A",
    explanation: "Đáp án A đúng: Hoành độ đỉnh của parabol là $x_I = -\\frac{b}{2a}$. Vì đỉnh nằm bên phải trục tung nên $x_I > 0 \\Leftrightarrow -\\frac{b}{2a} > 0 \\Leftrightarrow \\frac{b}{2a} < 0$, suy ra hai hệ số $a$ và $b$ trái dấu nhau. Vì giả thiết cho $a < 0$, bắt buộc $b > 0$. Phẫu thuật bẫy sai lầm: Học sinh chọn B do lập luận cảm tính: 'hoành độ đỉnh dương, công thức có dấu trừ nên $b$ phải âm để bù lại dấu trừ đó', quên mất rằng chính $a$ đã âm, phép chia cho số âm làm đảo chiều dấu. Học sinh chọn C do nhầm sang trường hợp trục đối xứng trùng trục tung ($b = 0$)."
  },
  {
    id: 7,
    question_text: "Tìm tất cả các giá trị của tham số $m$ để tam thức bậc hai $f(x) = x^2 - 2mx + 4$ luôn dương với mọi $x \\in \\mathbb{R}$.",
    options: [
      "A. $-2 < m < 2$",
      "B. $m < -2$ hoặc $m > 2$",
      "C. $-2 \\le m \\le 2$",
      "D. $m \\in \\emptyset$"
    ],
    correct_answer: "A",
    explanation: "Đáp án A đúng: Tam thức bậc hai $f(x) = ax^2 + bx + c$ luôn dương với mọi $x \\in \\mathbb{R}$ khi và chỉ khi $a > 0$ và $\\Delta' < 0$ (đồ thị parabol luôn nằm phía trên trục hoành và không cắt trục hoành). Ta có $a = 1 > 0$ (luôn đúng). Biệt thức thu gọn $\\Delta' = (-m)^2 - 4 = m^2 - 4 < 0 \\Leftrightarrow -2 < m < 2$. Phẫu thuật bẫy sai lầm: Học sinh chọn B do mắc bẫy kinh điển: thấy yêu cầu $f(x) > 0$ thì ngộ nhận một cách máy móc rằng biệt thức cũng phải dương ($\\Delta' > 0$). Khi giải $m^2 - 4 > 0$ sẽ ra $m < -2$ hoặc $m > 2$. Nếu $\\Delta' > 0$, đồ thị sẽ cắt trục hoành tại hai điểm phân biệt và có phần đồ thị nằm dưới trục hoành, không thể luôn dương. Học sinh chọn C nhầm sang điều kiện không âm ($f(x) \\ge 0 \\Leftrightarrow \\Delta' \\le 0$)."
  },
  {
    id: 8,
    question_text: "Tìm tập nghiệm $S$ của bất phương trình bậc hai $-x^2 + 5x - 6 > 0$.",
    options: [
      "A. $S = (-\\infty; 2) \\cup (3; +\\infty)$",
      "B. $S = (2; 3)$",
      "C. $S = [2; 3]$",
      "D. $S = \\mathbb{R} \\setminus \\{2; 3\\}$"
    ],
    correct_answer: "B",
    explanation: "Đáp án B đúng: Xét tam thức bậc hai $f(x) = -x^2 + 5x - 6$ có $a = -1 < 0$ và hai nghiệm phân biệt là $x_1 = 2, x_2 = 3$. Theo định lý về dấu tam thức bậc hai ('trong trái, ngoài cùng'), tam thức mang dấu dương (trái dấu với $a$) ở bên trong khoảng hai nghiệm, tức là $x \\in (2; 3)$. Vậy tập nghiệm $S = (2; 3)$. Phẫu thuật bẫy sai lầm: Học sinh chọn A do áp dụng sai quy tắc xét dấu hoặc ngộ nhận $a > 0$, chọn khoảng 'ngoài cùng'. Học sinh chọn C do lấy nhầm dấu bằng tại hai đầu mút biên trong khi bất phương trình là dấu ngặt ($> 0$). Học sinh chọn D nhầm sang bài toán tìm tập xác định của phân thức chứa mẫu số."
  },
  {
    id: 9,
    question_text: "Xác định số giao điểm của đồ thị hàm số $y = x^2 - 2x + 1$ với trục hoành.",
    options: [
      "A. 0",
      "B. 1",
      "C. 2",
      "D. 3"
    ],
    correct_answer: "B",
    explanation: "Đáp án B đúng: Số giao điểm của đồ thị hàm số với trục hoành chính là số nghiệm thực của phương trình hoành độ giao điểm $x^2 - 2x + 1 = 0 \\Leftrightarrow (x - 1)^2 = 0 \\Leftrightarrow x = 1$. Phương trình có nghiệm kép duy nhất $x = 1$, chứng tỏ parabol tiếp xúc với trục hoành tại duy nhất một điểm (chính là đỉnh $I(1; 0)$). Vậy số giao điểm là 1. Phẫu thuật bẫy sai lầm: Học sinh chọn A do tính nhầm biệt thức $\\Delta = (-2)^2 - 4(1)(1) = 0$ thành số âm rồi kết luận vô nghiệm. Học sinh chọn C do suy nghĩ rập khuôn rằng hàm số bậc hai (bậc 2) thì luôn phải cắt trục hoành tại 2 điểm phân biệt, bỏ qua trường hợp tiếp xúc (nghiệm kép). Học sinh chọn D sai bản chất hình học vì parabol chỉ có thể cắt đường thẳng tối đa tại 2 điểm."
  },
  {
    id: 10,
    question_text: "Một người nông dân muốn rào một khu vườn hình chữ nhật sát một bức tường thẳng bằng $40\\text{ m}$ lưới thép (không rào phía bức tường). Diện tích lớn nhất có thể đạt được của khu vườn là bao nhiêu?",
    options: [
      "A. $400\\text{ m}^2$",
      "B. $200\\text{ m}^2$",
      "C. $100\\text{ m}^2$",
      "D. $800\\text{ m}^2$"
    ],
    correct_answer: "B",
    explanation: "Đáp án B đúng: Gọi chiều rộng cạnh vuông góc với bức tường là $x$ (mét, điều kiện biên vật lý: $0 < x < 20$). Do không cần rào phía bức tường nên chiều dài cạnh song song bức tường là $40 - 2x$ (mét). Diện tích khu vườn là hàm số bậc hai $S(x) = x(40 - 2x) = -2x^2 + 40x$ với $0 < x < 20$. Hệ số $a = -2 < 0$, parabol đạt cực đại tại hoành độ đỉnh $x_I = -\\frac{40}{2(-2)} = 10\\text{ m}$ (thỏa mãn $0 < 10 < 20$). Diện tích lớn nhất là $S(10) = -2(10)^2 + 40(10) = 200\\text{ m}^2$. Phẫu thuật bẫy sai lầm: Học sinh chọn A ngộ nhận định lý cực trị hình chữ nhật thông thường rằng 'hình chữ nhật có cùng chu vi thì hình vuông có diện tích lớn nhất', từ đó chia 40 m lưới thành hai cạnh $20\\text{ m} \\times 20\\text{ m} = 400\\text{ m}^2$. Các em quên rằng bài toán chỉ rào 3 cạnh chứ không phải 4 cạnh. Học sinh chọn C chia đều 40 m cho 4 cạnh như hình chữ nhật thông thường ($10\\text{ m} \\times 10\\text{ m} = 100\\text{ m}^2$)."
  }
];

const jsonStr = JSON.stringify(quizData, null, 2);
fs.writeFileSync("./math_quiz_bank.json", jsonStr, "utf-8");
console.log("✅ Wrote math_quiz_bank.json successfully!");

// Validate
const parsed = JSON.parse(fs.readFileSync("./math_quiz_bank.json", "utf-8"));
console.log("Validation: Array length =", parsed.length);
console.log("Keys in first item:", Object.keys(parsed[0]));
console.log("All items have required keys:", parsed.every(item => 
  item.id !== undefined && 
  item.question_text && 
  Array.isArray(item.options) && item.options.length === 4 &&
  item.correct_answer && 
  item.explanation
));
