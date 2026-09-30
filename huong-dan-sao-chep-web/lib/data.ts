export type SupervisionType = "master" | "bachelor" | "essay" | "student-research"
export type SupervisionStatus = "in-progress" | "completed"
export type ResearchField = "topology" | "tda" | "elementary" | "edu-tech"

export type Topic = {
  id: string
  type: SupervisionType
  status: SupervisionStatus
  level: string
  title: string
  student: string
  cohort?: string
  year: number
  expected?: boolean
  field: ResearchField
  abstract: string
}

export const typeMeta: Record<SupervisionType, { order: string; vi: string; en: string }> = {
  master: { order: "01", vi: "Luận văn thạc sĩ", en: "Master's thesis" },
  bachelor: { order: "02", vi: "Khóa luận tốt nghiệp", en: "Bachelor's thesis" },
  essay: { order: "03", vi: "Tiểu luận tốt nghiệp", en: "Graduation essay" },
  "student-research": { order: "04", vi: "Nghiên cứu khoa học sinh viên", en: "Student research" },
}

export const fieldMeta: Record<ResearchField, { vi: string; en: string }> = {
  topology: { vi: "Tôpô đại số", en: "Algebraic topology" },
  tda: { vi: "Phân tích dữ liệu tôpô", en: "Topological data analysis" },
  elementary: { vi: "Toán sơ cấp và giải toán", en: "Elementary mathematics" },
  "edu-tech": { vi: "Giáo dục toán học và công nghệ giáo dục", en: "Math education & ed-tech" },
}

export const topics: Topic[] = [
  {
    id: "m1",
    type: "master",
    status: "in-progress",
    level: "THẠC SĨ",
    title: "Ứng dụng số phức trong giải toán hình học phẳng và lượng giác",
    student: "Sơn Đức Thịnh",
    year: 2027,
    expected: true,
    field: "elementary",
    abstract:
      "Nghiên cứu vận dụng số phức như một công cụ thống nhất để giải các lớp bài toán hình học phẳng và lượng giác trong chương trình chuyên toán.",
  },
  {
    id: "m2",
    type: "master",
    status: "completed",
    level: "THẠC SĨ",
    title: "Tôpô đều và tôpô Whitney trên không gian hàm",
    student: "Trương Thị Mai Phương",
    cohort: "CH-33",
    year: 2026,
    field: "topology",
    abstract:
      "Khảo sát mối quan hệ giữa tôpô đều và tôpô Whitney trên các không gian hàm, cùng các hệ quả về tính liên tục và hội tụ.",
  },
  {
    id: "m3",
    type: "master",
    status: "completed",
    level: "THẠC SĨ",
    title: "Sự tích hợp hai thuật toán Mapper và Ball Mapper trong phân tích dữ liệu tôpô",
    student: "Nguyễn Đức Thịnh",
    cohort: "CH-34",
    year: 2026,
    field: "tda",
    abstract:
      "Đề xuất một quy trình kết hợp Mapper và Ball Mapper nhằm tăng độ ổn định của biểu diễn hình học cho dữ liệu nhiều chiều.",
  },
  {
    id: "m4",
    type: "master",
    status: "completed",
    level: "THẠC SĨ",
    title: "Một số vấn đề về đồng điều đơn hình",
    student: "Nguyễn Tứ Đình Trí",
    cohort: "CH-36",
    year: 2026,
    field: "topology",
    abstract:
      "Trình bày hệ thống về đồng điều đơn hình, các tính chất bất biến và ví dụ tính toán cụ thể trên các phức đơn hình.",
  },
  {
    id: "m5",
    type: "master",
    status: "completed",
    level: "THẠC SĨ",
    title: "AlphaGeometry và ứng dụng trong dạy học hình học phẳng",
    student: "Nguyễn Minh Tân",
    cohort: "CH-34",
    year: 2025,
    field: "edu-tech",
    abstract:
      "Phân tích cách tiếp cận của AlphaGeometry với các bài toán IMO và khả năng khai thác trong dạy học hình học phẳng.",
  },
  {
    id: "m6",
    type: "master",
    status: "completed",
    level: "THẠC SĨ",
    title: "Ứng dụng của lý thuyết bó trong phân tích dữ liệu tôpô",
    student: "Nguyễn Đinh Văn Bá",
    cohort: "CH-34",
    year: 2025,
    field: "tda",
    abstract:
      "Sử dụng lý thuyết bó (sheaf theory) như một khung hình thức để mô tả và tổng hợp dữ liệu phân tán theo cấu trúc tôpô.",
  },
  {
    id: "b1",
    type: "bachelor",
    status: "in-progress",
    level: "ĐẠI HỌC",
    title: "Nhóm đồng luân đơn hình",
    student: "Nguyễn Phạm Thế Duy",
    cohort: "ĐH-49",
    year: 2027,
    expected: true,
    field: "topology",
    abstract:
      "Giới thiệu nhóm đồng luân của phức đơn hình và các phương pháp tính toán cơ bản kèm ví dụ minh họa.",
  },
  {
    id: "b2",
    type: "bachelor",
    status: "completed",
    level: "ĐẠI HỌC",
    title: "Một số ứng dụng của hình học xạ ảnh trong sáng tạo và giải toán phổ thông",
    student: "Nguyễn Thành Khoa",
    cohort: "ĐH-48",
    year: 2026,
    field: "elementary",
    abstract:
      "Khai thác các định lý hình học xạ ảnh để sáng tạo và giải quyết bài toán hình học ở bậc phổ thông.",
  },
  {
    id: "b3",
    type: "bachelor",
    status: "completed",
    level: "ĐẠI HỌC",
    title: "Một số chuyên đề bồi dưỡng học sinh giỏi giải toán trên máy tính cầm tay",
    student: "Nguyễn Hữu Chiến",
    cohort: "ĐH-48",
    year: 2026,
    field: "elementary",
    abstract:
      "Hệ thống các chuyên đề và kỹ thuật giải toán trên máy tính cầm tay phục vụ bồi dưỡng học sinh giỏi.",
  },
  {
    id: "b4",
    type: "bachelor",
    status: "completed",
    level: "ĐẠI HỌC",
    title: "Một số kiến thức mở đầu về Tôpô đại số",
    student: "Võ Anh Tuấn Duy",
    cohort: "ĐH-46",
    year: 2024,
    field: "topology",
    abstract:
      "Tổng hợp các khái niệm mở đầu của tôpô đại số: đường đi, đồng luân và nhóm cơ bản, hướng tới người mới bắt đầu.",
  },
  {
    id: "e1",
    type: "essay",
    status: "completed",
    level: "ĐẠI HỌC",
    title: "Định lý điểm bất động Brouwer và ứng dụng",
    student: "Lê Hoàng Nam",
    cohort: "ĐH-47",
    year: 2025,
    field: "topology",
    abstract:
      "Chứng minh định lý điểm bất động Brouwer bằng công cụ tôpô và trình bày một số ứng dụng tiêu biểu.",
  },
  {
    id: "e2",
    type: "essay",
    status: "completed",
    level: "ĐẠI HỌC",
    title: "Ứng dụng phần mềm GeoGebra trong dạy học hàm số",
    student: "Phạm Thị Thu Hà",
    cohort: "ĐH-47",
    year: 2024,
    field: "edu-tech",
    abstract:
      "Thiết kế các hoạt động dạy học hàm số với GeoGebra nhằm tăng tính trực quan và chủ động cho học sinh.",
  },
  {
    id: "s1",
    type: "student-research",
    status: "in-progress",
    level: "SINH VIÊN",
    title: "Trực quan hóa đồng điều persistent cho dữ liệu ảnh",
    student: "Đặng Quốc Việt",
    cohort: "ĐH-49",
    year: 2026,
    expected: true,
    field: "tda",
    abstract:
      "Xây dựng công cụ trực quan hóa barcode và persistence diagram cho tập dữ liệu ảnh cỡ vừa.",
  },
  {
    id: "s2",
    type: "student-research",
    status: "completed",
    level: "SINH VIÊN",
    title: "Khảo sát thuật toán Mapper trên dữ liệu điểm thi",
    student: "Trần Bảo Ngọc",
    cohort: "ĐH-48",
    year: 2025,
    field: "tda",
    abstract:
      "Áp dụng thuật toán Mapper để phát hiện cấu trúc nhóm ẩn trong dữ liệu điểm thi của học sinh.",
  },
]

export type QuizQuestion = {
  id: string
  prompt: string
  options: string[]
  answerIndex: number
}

export type Quiz = {
  id: string
  period: string
  title: string
  description: string
  field: ResearchField
  minutes: number
  questions: QuizQuestion[]
}

export const quizzes: Quiz[] = [
  {
    id: "q-week-1",
    period: "Tuần 1",
    title: "Nhập môn Tôpô đại cương",
    description: "Ôn tập khái niệm không gian tôpô, tập mở, tập đóng và tính liên tục.",
    field: "topology",
    minutes: 10,
    questions: [
      {
        id: "q1",
        prompt: "Một tập hợp trong không gian tôpô được gọi là 'mở' khi nào?",
        options: [
          "Khi nó chứa mọi điểm biên của mình",
          "Khi nó thuộc họ các tập mở đã cho của tôpô",
          "Khi phần bù của nó là tập mở",
          "Khi nó là tập hữu hạn",
        ],
        answerIndex: 1,
      },
      {
        id: "q2",
        prompt: "Giao của một số HỮU HẠN các tập mở là:",
        options: ["Luôn là tập đóng", "Luôn là tập mở", "Có thể không mở", "Luôn rỗng"],
        answerIndex: 1,
      },
      {
        id: "q3",
        prompt: "Một ánh xạ liên tục giữa hai không gian tôpô được đặc trưng bởi:",
        options: [
          "Ảnh ngược của mọi tập mở là tập mở",
          "Ảnh của mọi tập mở là tập mở",
          "Nó là song ánh",
          "Nó bảo toàn khoảng cách",
        ],
        answerIndex: 0,
      },
      {
        id: "q4",
        prompt: "Không gian nào sau đây là không gian Hausdorff?",
        options: [
          "Không gian với tôpô tầm thường",
          "Đường thẳng thực với tôpô thông thường",
          "Mọi không gian hữu hạn với tôpô rời rạc là không Hausdorff",
          "Không gian có đúng một tập mở",
        ],
        answerIndex: 1,
      },
    ],
  },
  {
    id: "q-week-2",
    period: "Tuần 2",
    title: "Phân tích dữ liệu tôpô (TDA)",
    description: "Kiểm tra hiểu biết về Mapper, persistence và ứng dụng thực tế.",
    field: "tda",
    minutes: 12,
    questions: [
      {
        id: "q1",
        prompt: "Thuật toán Mapper KHÔNG cần thành phần nào sau đây?",
        options: ["Hàm lọc (filter)", "Phủ (cover)", "Thuật toán phân cụm", "Mạng nơ-ron sâu"],
        answerIndex: 3,
      },
      {
        id: "q2",
        prompt: "Persistence diagram biểu diễn điều gì?",
        options: [
          "Sự sinh ra và mất đi của các đặc trưng tôpô theo tham số",
          "Tọa độ trọng tâm của dữ liệu",
          "Ma trận hiệp phương sai",
          "Trọng số của mạng nơ-ron",
        ],
        answerIndex: 0,
      },
      {
        id: "q3",
        prompt: "Đặc trưng có 'thời gian sống' dài trong barcode thường được xem là:",
        options: ["Nhiễu", "Đặc trưng tôpô đáng tin cậy", "Lỗi tính toán", "Điểm ngoại lai cần loại bỏ"],
        answerIndex: 1,
      },
    ],
  },
  {
    id: "q-week-3",
    period: "Tuần 3",
    title: "Toán sơ cấp & Giải toán",
    description: "Các câu hỏi rèn tư duy giải toán hình học và số phức.",
    field: "elementary",
    minutes: 8,
    questions: [
      {
        id: "q1",
        prompt: "Số phức nào là nghiệm của phương trình z² = -1?",
        options: ["z = 1", "z = -1", "z = i hoặc z = -i", "Không có nghiệm"],
        answerIndex: 2,
      },
      {
        id: "q2",
        prompt: "Môđun của số phức z = 3 + 4i bằng:",
        options: ["5", "7", "12", "25"],
        answerIndex: 0,
      },
      {
        id: "q3",
        prompt: "Phép nhân với số phức có môđun 1 và acgumen θ tương ứng với phép biến hình nào?",
        options: ["Phép tịnh tiến", "Phép quay góc θ", "Phép vị tự", "Phép đối xứng trục"],
        answerIndex: 1,
      },
    ],
  },
]
