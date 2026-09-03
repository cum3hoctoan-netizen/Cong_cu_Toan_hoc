/**
 * Ứng dụng Luyện tập Phương trình bậc hai (SPA)
 * Tích hợp thư viện KaTeX để hiển thị chuẩn định dạng LaTeX
 */

// DOM Elements
const btnGenerate = document.getElementById('btnGenerate');
const btnToggleSolution = document.getElementById('btnToggleSolution');
const solutionBtnText = document.getElementById('solutionBtnText');
const equationDisplay = document.getElementById('equationDisplay');
const solutionCard = document.getElementById('solutionCard');
const solutionTypeBadge = document.getElementById('solutionTypeBadge');
const stepCoefficients = document.getElementById('stepCoefficients');
const stepDeltaCalculation = document.getElementById('stepDeltaCalculation');
const stepRoots = document.getElementById('stepRoots');

// Trạng thái hiện tại của bài toán
let currentProblem = null;
let isSolutionVisible = false;

/**
 * Hàm hiển thị LaTeX an toàn bằng KaTeX với cơ chế dự phòng (fallback)
 */
function renderLatex(element, latexString, displayMode = false) {
  if (!element) return;
  if (window.katex && typeof window.katex.render === 'function') {
    try {
      window.katex.render(latexString, element, {
        displayMode: displayMode,
        throwOnError: false
      });
      return;
    } catch (err) {
      console.warn('Lỗi khi render KaTeX:', err);
    }
  }
  // Dự phòng hiển thị văn bản thuần nếu KaTeX chưa tải xong hoặc offline
  element.textContent = latexString;
}

/**
 * Sinh số nguyên ngẫu nhiên trong đoạn [min, max]
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Ước chung lớn nhất (GCD)
 */
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

/**
 * Định dạng phân số tối giản chuẩn cú pháp LaTeX \frac{a}{b}
 */
function formatLatexFraction(numerator, denominator) {
  if (denominator === 0) return '\\text{Không xác định}';
  if (numerator === 0) return '0';

  let sign = '';
  if ((numerator < 0 && denominator > 0) || (numerator > 0 && denominator < 0)) {
    sign = '-';
  }

  const absNum = Math.abs(numerator);
  const absDen = Math.abs(denominator);

  if (absNum % absDen === 0) {
    const val = numerator / denominator;
    return `${val}`;
  }

  const common = gcd(absNum, absDen);
  const num = absNum / common;
  const den = absDen / common;
  return `${sign}\\frac{${num}}{${den}}`;
}

/**
 * Sinh bộ 3 hệ số a, b, c với a khác 0 trong khoảng [-10, 10]
 */
function generateCoefficients() {
  let a = 0;
  while (a === 0) {
    a = getRandomInt(-10, 10);
  }
  const b = getRandomInt(-10, 10);
  const c = getRandomInt(-10, 10);
  return { a, b, c };
}

/**
 * Tạo chuỗi LaTeX cho phương trình ax^2 + bx + c = 0
 * Xử lý chính xác logic dấu và các trường hợp ẩn hệ số (1, -1, 0)
 */
function formatEquationLatex(a, b, c) {
  let expr = '';

  // Xử lý hệ số a
  if (a === 1) {
    expr += 'x^2';
  } else if (a === -1) {
    expr += '-x^2';
  } else {
    expr += `${a}x^2`;
  }

  // Xử lý hệ số b
  if (b !== 0) {
    const sign = b > 0 ? ' + ' : ' - ';
    const absB = Math.abs(b);
    if (absB === 1) {
      expr += `${sign}x`;
    } else {
      expr += `${sign}${absB}x`;
    }
  }

  // Xử lý hệ số c
  if (c !== 0) {
    const sign = c > 0 ? ' + ' : ' - ';
    const absC = Math.abs(c);
    expr += `${sign}${absC}`;
  }

  expr += ' = 0';
  return expr;
}

/**
 * Tính toán biệt thức Delta và các bước giải chi tiết dưới dạng LaTeX
 */
function calculateSolution(a, b, c) {
  const delta = b * b - 4 * a * c;
  const fourAC = 4 * a * c;
  const negB = -b || 0;
  const denom = 2 * a;

  // Bước 1: Liệt kê hệ số
  const step1Latex = `a = ${a},\\quad b = ${b},\\quad c = ${c}`;

  // Bước 2: Tính biệt thức Delta
  const bFormatted = b < 0 ? `(${b})` : `${b}`;
  const aFormatted = a < 0 ? `(${a})` : `${a}`;
  const cFormatted = c < 0 ? `(${c})` : `${c}`;
  const subFourACText = fourAC >= 0 ? `- ${fourAC}` : `+ ${Math.abs(fourAC)}`;

  const step2Latex = `
    \\begin{aligned}
    \\Delta &= b^2 - 4ac \\\\
            &= ${bFormatted}^2 - 4 \\cdot ${aFormatted} \\cdot ${cFormatted} \\\\
            &= ${b * b} ${subFourACText} = ${delta}
    \\end{aligned}
  `;

  // Bước 3: Biện luận nghiệm
  let badgeClass = '';
  let badgeText = '';
  let step3Latex = '';

  if (delta < 0) {
    badgeClass = 'badge-no-root';
    badgeText = 'Vô nghiệm';
    step3Latex = `\\Delta = ${delta} < 0 \\implies \\text{Phương trình vô nghiệm thực } (x \\notin \\mathbb{R})`;
  } else if (delta === 0) {
    badgeClass = 'badge-double-root';
    badgeText = 'Nghiệm kép';
    const fracLatex = formatLatexFraction(negB, denom);
    const decimalValue = (-b / denom);
    const isExact = negB % denom === 0;
    const approxStr = !isExact ? `\\approx ${decimalValue.toFixed(2)}` : '';

    step3Latex = `
      \\begin{aligned}
      x_1 = x_2 &= -\\frac{b}{2a} = \\frac{${negB}}{${denom}} \\\\
                &= ${fracLatex} ${approxStr ? `\\quad (${approxStr})` : ''}
      \\end{aligned}
    `;
  } else {
    badgeClass = 'badge-two-roots';
    badgeText = '2 nghiệm phân biệt';
    const sqrtDelta = Math.sqrt(delta);
    const isSquare = Number.isInteger(sqrtDelta);

    if (isSquare) {
      // Trường hợp căn Delta là số nguyên
      const x1Num = negB + sqrtDelta;
      const x2Num = negB - sqrtDelta;
      const x1Frac = formatLatexFraction(x1Num, denom);
      const x2Frac = formatLatexFraction(x2Num, denom);
      const x1Dec = x1Num / denom;
      const x2Dec = x2Num / denom;

      const x1Approx = x1Num % denom !== 0 ? `\\approx ${x1Dec.toFixed(2)}` : '';
      const x2Approx = x2Num % denom !== 0 ? `\\approx ${x2Dec.toFixed(2)}` : '';

      step3Latex = `
        \\begin{aligned}
        \\sqrt{\\Delta} &= \\sqrt{${delta}} = ${sqrtDelta} \\\\[6pt]
        x_1 &= \\frac{-b + \\sqrt{\\Delta}}{2a} = \\frac{${negB} + ${sqrtDelta}}{${denom}} = ${x1Frac} ${x1Approx ? `\\quad (${x1Approx})` : ''} \\\\[8pt]
        x_2 &= \\frac{-b - \\sqrt{\\Delta}}{2a} = \\frac{${negB} - ${sqrtDelta}}{${denom}} = ${x2Frac} ${x2Approx ? `\\quad (${x2Approx})` : ''}
        \\end{aligned}
      `;
    } else {
      // Trường hợp căn Delta là số vô tỉ
      const x1Dec = (negB + sqrtDelta) / denom;
      const x2Dec = (negB - sqrtDelta) / denom;

      step3Latex = `
        \\begin{aligned}
        \\sqrt{\\Delta} &= \\sqrt{${delta}} \\approx ${sqrtDelta.toFixed(2)} \\\\[6pt]
        x_1 &= \\frac{-b + \\sqrt{\\Delta}}{2a} = \\frac{${negB} + \\sqrt{${delta}}}{${denom}} \\approx ${x1Dec.toFixed(2)} \\\\[8pt]
        x_2 &= \\frac{-b - \\sqrt{\\Delta}}{2a} = \\frac{${negB} - \\sqrt{${delta}}}{${denom}} \\approx ${x2Dec.toFixed(2)}
        \\end{aligned}
      `;
    }
  }

  return {
    step1Latex,
    step2Latex,
    step3Latex,
    badgeClass,
    badgeText
  };
}

/**
 * Cập nhật hiển thị bài toán hiện tại
 */
function updateEquationDisplay() {
  if (!currentProblem) return;
  const latexStr = formatEquationLatex(currentProblem.a, currentProblem.b, currentProblem.c);
  renderLatex(equationDisplay, latexStr, true);
}

/**
 * Tạo bài toán mới
 */
function createNewProblem() {
  const { a, b, c } = generateCoefficients();
  currentProblem = { a, b, c };

  // Render phương trình dưới định dạng LaTeX chuẩn
  updateEquationDisplay();

  // Bật nút xem đáp án
  btnToggleSolution.disabled = false;

  // Ẩn khung lời giải
  hideSolution();
}

/**
 * Hiển thị lời giải chi tiết
 */
function showSolution() {
  if (!currentProblem) return;

  const { step1Latex, step2Latex, step3Latex, badgeClass, badgeText } = calculateSolution(
    currentProblem.a,
    currentProblem.b,
    currentProblem.c
  );

  solutionTypeBadge.className = `status-badge ${badgeClass}`;
  solutionTypeBadge.textContent = badgeText;

  // Render các bước bằng KaTeX
  renderLatex(stepCoefficients, step1Latex, true);
  renderLatex(stepDeltaCalculation, step2Latex, true);
  renderLatex(stepRoots, step3Latex, true);

  solutionCard.classList.remove('hidden');
  isSolutionVisible = true;
  solutionBtnText.textContent = 'Ẩn đáp án';
}

/**
 * Ẩn lời giải
 */
function hideSolution() {
  solutionCard.classList.add('hidden');
  isSolutionVisible = false;
  solutionBtnText.textContent = 'Xem đáp án';
}

/**
 * Bật/tắt lời giải
 */
function toggleSolution() {
  if (isSolutionVisible) {
    hideSolution();
  } else {
    showSolution();
  }
}

// Lắng nghe sự kiện
btnGenerate.addEventListener('click', createNewProblem);
btnToggleSolution.addEventListener('click', toggleSolution);

// Khởi tạo bài toán
function initializeApp() {
  createNewProblem();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// Đảm bảo hiển thị lại chuẩn KaTeX nếu thư viện CDN tải xong sau
window.addEventListener('load', () => {
  if (currentProblem) {
    updateEquationDisplay();
    if (isSolutionVisible) {
      showSolution();
    }
  }
});
