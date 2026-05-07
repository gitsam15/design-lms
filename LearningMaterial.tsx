// Mock data for Telkom University LMS

export interface Course {
  id: string;
  name: string;
  instructor: string;
  progress: number;
  modules: {
    completed: number;
    total: number;
  };
  lastAccess: string;
}

export interface Assignment {
  id: string;
  courseId: string;
  courseName: string;
  title: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'late';
  progress?: number;
  description?: string;
}

export interface Module {
  id: string;
  title: string;
  status: 'Selesai' | 'In Progress' | 'Belum Dimulai';
  duration?: string;
}

export interface Material {
  id: string;
  title: string;
  type: 'video' | 'pdf' | 'quiz' | 'assignment';
  duration?: string;
  completed: boolean;
}

export interface Week {
  id: string;
  weekNumber: number;
  title: string;
  materials: Material[];
  isUnlocked: boolean;
}

export const studentName = "Budi Santoso";

export const courses: Course[] = [
  {
    id: "1",
    name: "Pemrograman Web",
    instructor: "Dr. Ahmad Hidayat, M.Kom",
    progress: 75,
    modules: { completed: 7, total: 10 },
    lastAccess: "Akses hari ini"
  },
  {
    id: "2",
    name: "Basis Data",
    instructor: "Dr. Siti Rahmawati, M.T",
    progress: 60,
    modules: { completed: 6, total: 10 },
    lastAccess: "Akses kemarin"
  },
  {
    id: "3",
    name: "Jaringan Komputer",
    instructor: "Ir. Bambang Sudarsono, M.Sc",
    progress: 45,
    modules: { completed: 5, total: 12 },
    lastAccess: "Akses 2 hari lalu"
  },
  {
    id: "4",
    name: "Rekayasa Perangkat Lunak",
    instructor: "Dr. Indah Permatasari, M.Kom",
    progress: 90,
    modules: { completed: 9, total: 10 },
    lastAccess: "Akses hari ini"
  },
  {
    id: "5",
    name: "Algoritma dan Struktur Data",
    instructor: "Dr. Eko Prasetyo, M.Kom",
    progress: 100,
    modules: { completed: 10, total: 10 },
    lastAccess: "Akses 1 minggu lalu"
  },
  {
    id: "6",
    name: "Matematika Diskrit",
    instructor: "Dr. Ani Widiastuti, M.Si",
    progress: 100,
    modules: { completed: 8, total: 8 },
    lastAccess: "Akses 2 minggu lalu"
  }
];

export const assignments: Assignment[] = [
  {
    id: "1",
    courseId: "1",
    courseName: "Pemrograman Web",
    title: "Tugas 3: Membuat Website Responsif",
    dueDate: "2026-04-05",
    status: 'pending',
    progress: 60,
    description: "Buatlah website responsif menggunakan HTML, CSS, dan JavaScript dengan kriteria berikut:\n\n1. Responsive design untuk mobile, tablet, dan desktop\n2. Navigasi menu yang interaktif\n3. Minimal 3 halaman (Home, About, Contact)\n4. Form kontak yang fungsional\n5. Gunakan CSS Grid atau Flexbox untuk layout\n\nFormat pengumpulan: ZIP file yang berisi semua file HTML, CSS, JS, dan assets"
  },
  {
    id: "2",
    courseId: "2",
    courseName: "Basis Data",
    title: "Tugas 2: Normalisasi Database",
    dueDate: "2026-04-08",
    status: 'pending',
    progress: 30,
    description: "Lakukan normalisasi database untuk sistem informasi perpustakaan sampai dengan Bentuk Normal ke-3 (3NF).\n\nYang harus dikerjakan:\n1. Identifikasi entitas dan atribut\n2. Buat ERD (Entity Relationship Diagram)\n3. Normalisasi dari 1NF hingga 3NF\n4. Buat skema database final\n\nFormat pengumpulan: PDF dokumen dengan penjelasan dan diagram"
  },
  {
    id: "3",
    courseId: "4",
    courseName: "Rekayasa Perangkat Lunak",
    title: "Tugas 1: Use Case Diagram",
    dueDate: "2026-04-03",
    status: 'submitted',
    description: "Buat Use Case Diagram untuk aplikasi mobile e-commerce dengan fitur:\n\n1. Login/Register user\n2. Browse produk\n3. Keranjang belanja\n4. Checkout dan pembayaran\n5. Tracking pesanan\n\nFormat pengumpulan: PDF atau gambar Use Case Diagram dengan penjelasan"
  }
];

export const courseWeeks: { [courseId: string]: Week[] } = {
  "1": [
    {
      id: "w1",
      weekNumber: 1,
      title: "Pengenalan Web Development",
      isUnlocked: true,
      materials: [
        { id: "m1-1", title: "Pengenalan HTML", type: "video", duration: "45 menit", completed: true },
        { id: "m1-2", title: "Struktur Dasar HTML", type: "pdf", duration: "30 menit", completed: true },
        { id: "m1-3", title: "Latihan HTML", type: "quiz", duration: "20 menit", completed: true }
      ]
    },
    {
      id: "w2",
      weekNumber: 2,
      title: "CSS & Styling",
      isUnlocked: true,
      materials: [
        { id: "m2-1", title: "Pengenalan CSS", type: "video", duration: "50 menit", completed: true },
        { id: "m2-2", title: "CSS Selectors & Properties", type: "pdf", duration: "35 menit", completed: true },
        { id: "m2-3", title: "Praktikum CSS", type: "assignment", duration: "2 jam", completed: true }
      ]
    },
    {
      id: "w3",
      weekNumber: 3,
      title: "JavaScript Fundamentals",
      isUnlocked: true,
      materials: [
        { id: "m3-1", title: "Pengenalan JavaScript", type: "video", duration: "1 jam", completed: true },
        { id: "m3-2", title: "Variables & Data Types", type: "pdf", duration: "40 menit", completed: true },
        { id: "m3-3", title: "Functions & Objects", type: "video", duration: "55 menit", completed: true },
        { id: "m3-4", title: "Quiz JavaScript Dasar", type: "quiz", duration: "30 menit", completed: true }
      ]
    },
    {
      id: "w4",
      weekNumber: 4,
      title: "DOM Manipulation",
      isUnlocked: true,
      materials: [
        { id: "m4-1", title: "Memahami DOM", type: "video", duration: "45 menit", completed: true },
        { id: "m4-2", title: "Event Handling", type: "video", duration: "50 menit", completed: false },
        { id: "m4-3", title: "Tugas DOM Manipulation", type: "assignment", duration: "3 jam", completed: false }
      ]
    },
    {
      id: "w5",
      weekNumber: 5,
      title: "Responsive Web Design",
      isUnlocked: true,
      materials: [
        { id: "m5-1", title: "Mobile First Design", type: "video", duration: "40 menit", completed: false },
        { id: "m5-2", title: "CSS Grid & Flexbox", type: "pdf", duration: "45 menit", completed: false },
        { id: "m5-3", title: "Media Queries", type: "video", duration: "35 menit", completed: false }
      ]
    },
    {
      id: "w6",
      weekNumber: 6,
      title: "CSS Frameworks",
      isUnlocked: false,
      materials: [
        { id: "m6-1", title: "Introduction to Bootstrap", type: "video", duration: "50 menit", completed: false },
        { id: "m6-2", title: "Tailwind CSS Basics", type: "pdf", duration: "40 menit", completed: false }
      ]
    }
  ],
  "2": [
    {
      id: "w1",
      weekNumber: 1,
      title: "Konsep Database",
      isUnlocked: true,
      materials: [
        { id: "m1-1", title: "Pengenalan Database", type: "video", duration: "40 menit", completed: true },
        { id: "m1-2", title: "Sistem Database", type: "pdf", duration: "30 menit", completed: true }
      ]
    },
    {
      id: "w2",
      weekNumber: 2,
      title: "Relational Database",
      isUnlocked: true,
      materials: [
        { id: "m2-1", title: "Relational Model", type: "video", duration: "45 menit", completed: true },
        { id: "m2-2", title: "Keys & Relationships", type: "pdf", duration: "35 menit", completed: true }
      ]
    },
    {
      id: "w3",
      weekNumber: 3,
      title: "SQL Dasar",
      isUnlocked: true,
      materials: [
        { id: "m3-1", title: "SELECT Statement", type: "video", duration: "50 menit", completed: true },
        { id: "m3-2", title: "WHERE & Operators", type: "video", duration: "40 menit", completed: true },
        { id: "m3-3", title: "Quiz SQL Dasar", type: "quiz", duration: "25 menit", completed: true }
      ]
    },
    {
      id: "w4",
      weekNumber: 4,
      title: "SQL Lanjutan",
      isUnlocked: true,
      materials: [
        { id: "m4-1", title: "JOIN Operations", type: "video", duration: "55 menit", completed: false },
        { id: "m4-2", title: "Aggregate Functions", type: "pdf", duration: "30 menit", completed: false }
      ]
    },
    {
      id: "w5",
      weekNumber: 5,
      title: "Normalisasi Database",
      isUnlocked: true,
      materials: [
        { id: "m5-1", title: "Normalisasi 1NF - 3NF", type: "video", duration: "1 jam", completed: false },
        { id: "m5-2", title: "Tugas Normalisasi", type: "assignment", duration: "3 jam", completed: false }
      ]
    },
    {
      id: "w6",
      weekNumber: 6,
      title: "Entity Relationship Diagram",
      isUnlocked: false,
      materials: [
        { id: "m6-1", title: "Pengenalan ERD", type: "video", duration: "45 menit", completed: false },
        { id: "m6-2", title: "Praktikum ERD", type: "assignment", duration: "2 jam", completed: false }
      ]
    }
  ],
  "3": [
    {
      id: "w1",
      weekNumber: 1,
      title: "Pengenalan Jaringan Komputer",
      isUnlocked: true,
      materials: [
        { id: "m1-1", title: "Konsep Dasar Jaringan", type: "video", duration: "40 menit", completed: true },
        { id: "m1-2", title: "Jenis-jenis Jaringan", type: "pdf", duration: "30 menit", completed: true },
        { id: "m1-3", title: "Quiz Pengenalan Jaringan", type: "quiz", duration: "20 menit", completed: true }
      ]
    },
    {
      id: "w2",
      weekNumber: 2,
      title: "OSI Model",
      isUnlocked: true,
      materials: [
        { id: "m2-1", title: "7 Layer OSI Model", type: "video", duration: "1 jam", completed: true },
        { id: "m2-2", title: "Fungsi Setiap Layer", type: "pdf", duration: "35 menit", completed: true },
        { id: "m2-3", title: "Latihan OSI Model", type: "quiz", duration: "25 menit", completed: true }
      ]
    },
    {
      id: "w3",
      weekNumber: 3,
      title: "TCP/IP Protocol",
      isUnlocked: true,
      materials: [
        { id: "m3-1", title: "Pengenalan TCP/IP", type: "video", duration: "50 menit", completed: true },
        { id: "m3-2", title: "TCP vs UDP", type: "pdf", duration: "30 menit", completed: true },
        { id: "m3-3", title: "IP Protocol", type: "video", duration: "45 menit", completed: true }
      ]
    },
    {
      id: "w4",
      weekNumber: 4,
      title: "IP Addressing",
      isUnlocked: true,
      materials: [
        { id: "m4-1", title: "IPv4 Addressing", type: "video", duration: "55 menit", completed: true },
        { id: "m4-2", title: "IPv6 Basics", type: "pdf", duration: "40 menit", completed: true },
        { id: "m4-3", title: "Quiz IP Addressing", type: "quiz", duration: "30 menit", completed: true }
      ]
    },
    {
      id: "w5",
      weekNumber: 5,
      title: "Subnetting",
      isUnlocked: true,
      materials: [
        { id: "m5-1", title: "Konsep Subnetting", type: "video", duration: "1 jam", completed: true },
        { id: "m5-2", title: "Praktikum Subnetting", type: "assignment", duration: "2 jam", completed: false }
      ]
    },
    {
      id: "w6",
      weekNumber: 6,
      title: "Routing",
      isUnlocked: true,
      materials: [
        { id: "m6-1", title: "Static Routing", type: "video", duration: "50 menit", completed: false },
        { id: "m6-2", title: "Dynamic Routing", type: "video", duration: "55 menit", completed: false },
        { id: "m6-3", title: "Konfigurasi Router", type: "pdf", duration: "40 menit", completed: false }
      ]
    },
    {
      id: "w7",
      weekNumber: 7,
      title: "Switching",
      isUnlocked: false,
      materials: [
        { id: "m7-1", title: "Pengenalan Switch", type: "video", duration: "45 menit", completed: false },
        { id: "m7-2", title: "VLAN Configuration", type: "pdf", duration: "35 menit", completed: false }
      ]
    }
  ],
  "4": [
    {
      id: "w1",
      weekNumber: 1,
      title: "Pengenalan Rekayasa Perangkat Lunak",
      isUnlocked: true,
      materials: [
        { id: "m1-1", title: "Konsep RPL", type: "video", duration: "40 menit", completed: true },
        { id: "m1-2", title: "Software Engineering", type: "pdf", duration: "30 menit", completed: true },
        { id: "m1-3", title: "Quiz Pengenalan RPL", type: "quiz", duration: "20 menit", completed: true }
      ]
    },
    {
      id: "w2",
      weekNumber: 2,
      title: "Software Development Life Cycle",
      isUnlocked: true,
      materials: [
        { id: "m2-1", title: "SDLC Models", type: "video", duration: "1 jam", completed: true },
        { id: "m2-2", title: "Waterfall vs Agile", type: "pdf", duration: "35 menit", completed: true },
        { id: "m2-3", title: "Quiz SDLC", type: "quiz", duration: "25 menit", completed: true }
      ]
    },
    {
      id: "w3",
      weekNumber: 3,
      title: "Requirements Engineering",
      isUnlocked: true,
      materials: [
        { id: "m3-1", title: "Functional Requirements", type: "video", duration: "45 menit", completed: true },
        { id: "m3-2", title: "Non-Functional Requirements", type: "pdf", duration: "30 menit", completed: true },
        { id: "m3-3", title: "Requirements Gathering", type: "video", duration: "50 menit", completed: true }
      ]
    },
    {
      id: "w4",
      weekNumber: 4,
      title: "Use Case Diagram",
      isUnlocked: true,
      materials: [
        { id: "m4-1", title: "Pengenalan Use Case", type: "video", duration: "45 menit", completed: true },
        { id: "m4-2", title: "Use Case Notation", type: "pdf", duration: "30 menit", completed: true },
        { id: "m4-3", title: "Tugas Use Case Diagram", type: "assignment", duration: "3 jam", completed: true }
      ]
    },
    {
      id: "w5",
      weekNumber: 5,
      title: "Class Diagram",
      isUnlocked: true,
      materials: [
        { id: "m5-1", title: "OOP Concepts", type: "video", duration: "1 jam", completed: true },
        { id: "m5-2", title: "Class Diagram Elements", type: "pdf", duration: "40 menit", completed: true },
        { id: "m5-3", title: "Praktikum Class Diagram", type: "assignment", duration: "2 jam", completed: true }
      ]
    },
    {
      id: "w6",
      weekNumber: 6,
      title: "Sequence Diagram",
      isUnlocked: true,
      materials: [
        { id: "m6-1", title: "Pengenalan Sequence Diagram", type: "video", duration: "50 menit", completed: true },
        { id: "m6-2", title: "Message Types", type: "pdf", duration: "30 menit", completed: true },
        { id: "m6-3", title: "Latihan Sequence Diagram", type: "quiz", duration: "25 menit", completed: true }
      ]
    },
    {
      id: "w7",
      weekNumber: 7,
      title: "Activity Diagram",
      isUnlocked: true,
      materials: [
        { id: "m7-1", title: "Activity Diagram Basics", type: "video", duration: "45 menit", completed: true },
        { id: "m7-2", title: "Swimlane & Decision", type: "pdf", duration: "35 menit", completed: true }
      ]
    },
    {
      id: "w8",
      weekNumber: 8,
      title: "Software Design Patterns",
      isUnlocked: true,
      materials: [
        { id: "m8-1", title: "Design Patterns Overview", type: "video", duration: "1 jam", completed: true },
        { id: "m8-2", title: "Creational Patterns", type: "video", duration: "55 menit", completed: true },
        { id: "m8-3", title: "Structural Patterns", type: "pdf", duration: "40 menit", completed: true }
      ]
    },
    {
      id: "w9",
      weekNumber: 9,
      title: "Testing & Quality Assurance",
      isUnlocked: true,
      materials: [
        { id: "m9-1", title: "Software Testing Fundamentals", type: "video", duration: "50 menit", completed: true },
        { id: "m9-2", title: "Unit Testing", type: "pdf", duration: "35 menit", completed: true },
        { id: "m9-3", title: "Integration Testing", type: "video", duration: "45 menit", completed: true }
      ]
    },
    {
      id: "w10",
      weekNumber: 10,
      title: "Project Management",
      isUnlocked: true,
      materials: [
        { id: "m10-1", title: "Agile Methodology", type: "video", duration: "55 menit", completed: false },
        { id: "m10-2", title: "Scrum Framework", type: "pdf", duration: "40 menit", completed: false },
        { id: "m10-3", title: "Project Planning", type: "video", duration: "50 menit", completed: false }
      ]
    },
    {
      id: "w11",
      weekNumber: 11,
      title: "Final Project",
      isUnlocked: false,
      materials: [
        { id: "m11-1", title: "Project Guidelines", type: "pdf", duration: "30 menit", completed: false },
        { id: "m11-2", title: "Final Project Submission", type: "assignment", duration: "40 jam", completed: false }
      ]
    }
  ]
};

export const courseModules: { [courseId: string]: Module[] } = {
  "1": [
    { id: "m1", title: "Pengenalan HTML & CSS", status: "Selesai", duration: "2 jam" },
    { id: "m2", title: "JavaScript Dasar", status: "Selesai", duration: "3 jam" },
    { id: "m3", title: "DOM Manipulation", status: "Selesai", duration: "2.5 jam" },
    { id: "m4", title: "Responsive Design", status: "Selesai", duration: "3 jam" },
    { id: "m5", title: "CSS Frameworks", status: "Selesai", duration: "2 jam" },
    { id: "m6", title: "JavaScript ES6+", status: "Selesai", duration: "3 jam" },
    { id: "m7", title: "API & AJAX", status: "Selesai", duration: "3 jam" },
    { id: "m8", title: "React Basics", status: "In Progress", duration: "4 jam" },
    { id: "m9", title: "State Management", status: "Belum Dimulai", duration: "3 jam" },
    { id: "m10", title: "Final Project", status: "Belum Dimulai", duration: "8 jam" }
  ],
  "2": [
    { id: "m1", title: "Konsep Database", status: "Selesai", duration: "2 jam" },
    { id: "m2", title: "Relational Model", status: "Selesai", duration: "2.5 jam" },
    { id: "m3", title: "SQL Dasar", status: "Selesai", duration: "3 jam" },
    { id: "m4", title: "SQL Lanjutan", status: "Selesai", duration: "3 jam" },
    { id: "m5", title: "Normalisasi", status: "Selesai", duration: "2 jam" },
    { id: "m6", title: "ERD", status: "Selesai", duration: "2 jam" },
    { id: "m7", title: "Indexing", status: "In Progress", duration: "2.5 jam" },
    { id: "m8", title: "Transaction", status: "Belum Dimulai", duration: "3 jam" },
    { id: "m9", title: "Stored Procedure", status: "Belum Dimulai", duration: "2 jam" },
    { id: "m10", title: "Database Optimization", status: "Belum Dimulai", duration: "3 jam" }
  ],
  "3": [
    { id: "m1", title: "Pengenalan Jaringan", status: "Selesai", duration: "2 jam" },
    { id: "m2", title: "OSI Model", status: "Selesai", duration: "3 jam" },
    { id: "m3", title: "TCP/IP Protocol", status: "Selesai", duration: "3 jam" },
    { id: "m4", title: "IP Addressing", status: "Selesai", duration: "2.5 jam" },
    { id: "m5", title: "Subnetting", status: "Selesai", duration: "3 jam" },
    { id: "m6", title: "Routing", status: "In Progress", duration: "3 jam" },
    { id: "m7", title: "Switching", status: "Belum Dimulai", duration: "2.5 jam" },
    { id: "m8", title: "VLAN", status: "Belum Dimulai", duration: "2 jam" },
    { id: "m9", title: "Network Security", status: "Belum Dimulai", duration: "3 jam" },
    { id: "m10", title: "Wireless Network", status: "Belum Dimulai", duration: "2.5 jam" },
    { id: "m11", title: "Network Troubleshooting", status: "Belum Dimulai", duration: "3 jam" },
    { id: "m12", title: "Final Project", status: "Belum Dimulai", duration: "6 jam" }
  ],
  "4": [
    { id: "m1", title: "Pengenalan RPL", status: "Selesai", duration: "2 jam" },
    { id: "m2", title: "Software Development Life Cycle", status: "Selesai", duration: "3 jam" },
    { id: "m3", title: "Requirements Engineering", status: "Selesai", duration: "3 jam" },
    { id: "m4", title: "Use Case Diagram", status: "Selesai", duration: "2.5 jam" },
    { id: "m5", title: "Class Diagram", status: "Selesai", duration: "3 jam" },
    { id: "m6", title: "Sequence Diagram", status: "Selesai", duration: "2.5 jam" },
    { id: "m7", title: "Activity Diagram", status: "Selesai", duration: "2 jam" },
    { id: "m8", title: "Software Design Patterns", status: "Selesai", duration: "4 jam" },
    { id: "m9", title: "Testing & Quality Assurance", status: "Selesai", duration: "3 jam" },
    { id: "m10", title: "Project Management", status: "In Progress", duration: "3 jam" }
  ],
  "5": [
    { id: "m1", title: "Pengenalan Algoritma", status: "Selesai", duration: "2 jam" },
    { id: "m2", title: "Kompleksitas Algoritma", status: "Selesai", duration: "3 jam" },
    { id: "m3", title: "Array & Linked List", status: "Selesai", duration: "3 jam" },
    { id: "m4", title: "Stack & Queue", status: "Selesai", duration: "2.5 jam" },
    { id: "m5", title: "Tree & Graph", status: "Selesai", duration: "4 jam" },
    { id: "m6", title: "Sorting Algorithms", status: "Selesai", duration: "3 jam" },
    { id: "m7", title: "Searching Algorithms", status: "Selesai", duration: "2.5 jam" },
    { id: "m8", title: "Dynamic Programming", status: "Selesai", duration: "4 jam" },
    { id: "m9", title: "Greedy Algorithms", status: "Selesai", duration: "3 jam" },
    { id: "m10", title: "Final Project", status: "Selesai", duration: "8 jam" }
  ],
  "6": [
    { id: "m1", title: "Logika Matematika", status: "Selesai", duration: "2 jam" },
    { id: "m2", title: "Himpunan", status: "Selesai", duration: "2.5 jam" },
    { id: "m3", title: "Relasi dan Fungsi", status: "Selesai", duration: "3 jam" },
    { id: "m4", title: "Graf", status: "Selesai", duration: "3 jam" },
    { id: "m5", title: "Tree", status: "Selesai", duration: "2.5 jam" },
    { id: "m6", title: "Kombinatorik", status: "Selesai", duration: "3 jam" },
    { id: "m7", title: "Teori Bilangan", status: "Selesai", duration: "2 jam" },
    { id: "m8", title: "Aljabar Boolean", status: "Selesai", duration: "2.5 jam" }
  ]
};

export const notifications = [
  {
    id: "1",
    title: "Tugas Baru: Website Responsif",
    message: "Dr. Ahmad Hidayat telah menambahkan tugas baru di Pemrograman Web",
    time: "2 jam yang lalu",
    read: false
  },
  {
    id: "2",
    title: "Pengingat: Deadline Tugas",
    message: "Tugas Use Case Diagram akan berakhir besok (3 April 2026)",
    time: "5 jam yang lalu",
    read: false
  },
  {
    id: "3",
    title: "Nilai Sudah Keluar",
    message: "Nilai untuk Tugas 1 - Basis Data sudah tersedia",
    time: "1 hari yang lalu",
    read: true
  },
  {
    id: "4",
    title: "Materi Baru Ditambahkan",
    message: "Modul React Basics telah ditambahkan di Pemrograman Web",
    time: "2 hari yang lalu",
    read: true
  }
];