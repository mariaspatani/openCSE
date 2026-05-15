// lib/quizData.ts
// Add more subjects and questions here, or swap with AI generation later

export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number; // index of correct option
  explanation?: string;
}

export interface Quiz {
  subject: string;
  slug: string;
  description: string;
  questions: Question[];
}

export const quizzes: Quiz[] = [
  {
    subject: "Data Structures & Algorithms",
    slug: "dsa",
    description: "Test your knowledge of arrays, linked lists, trees, sorting and more.",
    questions: [
      {
        id: 1,
        question: "What is the time complexity of binary search on a sorted array?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        answer: 1,
        explanation: "Binary search halves the search space each step, giving O(log n).",
      },
      {
        id: 2,
        question: "Which data structure uses LIFO (Last In, First Out)?",
        options: ["Queue", "Stack", "Deque", "Heap"],
        answer: 1,
        explanation: "A Stack follows LIFO — the last element pushed is the first popped.",
      },
      {
        id: 3,
        question: "What is the worst-case time complexity of QuickSort?",
        options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
        answer: 1,
        explanation: "QuickSort degrades to O(n²) when the pivot is always the smallest or largest element.",
      },
      {
        id: 4,
        question: "In a min-heap, which element is always at the root?",
        options: ["The largest element", "The median element", "The smallest element", "A random element"],
        answer: 2,
        explanation: "A min-heap guarantees the smallest element is at the root.",
      },
      {
        id: 5,
        question: "Which traversal of a BST gives elements in sorted order?",
        options: ["Pre-order", "Post-order", "In-order", "Level-order"],
        answer: 2,
        explanation: "In-order traversal (left → root → right) of a BST visits nodes in ascending order.",
      },
      {
        id: 6,
        question: "What is the space complexity of Merge Sort?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: 2,
        explanation: "Merge Sort requires O(n) extra space for the temporary arrays during merging.",
      },
      {
        id: 7,
        question: "A graph with V vertices and E edges is stored as an adjacency matrix. What is its space complexity?",
        options: ["O(V)", "O(E)", "O(V + E)", "O(V²)"],
        answer: 3,
        explanation: "An adjacency matrix allocates a V×V grid, requiring O(V²) space.",
      },
      {
        id: 8,
        question: "Which algorithm finds the shortest path in an unweighted graph?",
        options: ["Dijkstra's", "BFS", "DFS", "Bellman-Ford"],
        answer: 1,
        explanation: "BFS explores level by level, guaranteeing the shortest path (fewest edges) in an unweighted graph.",
      },
      {
        id: 9,
        question: "What is the height of a complete binary tree with n nodes?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(√n)"],
        answer: 1,
        explanation: "A complete binary tree has height ⌊log₂n⌋, i.e., O(log n).",
      },
      {
        id: 10,
        question: "Which sorting algorithm is stable and has O(n log n) worst-case time?",
        options: ["QuickSort", "HeapSort", "MergeSort", "SelectionSort"],
        answer: 2,
        explanation: "MergeSort is stable and always O(n log n) in the worst case.",
      },
    ],
  },
  {
    subject: "Operating Systems",
    slug: "os",
    description: "Test your understanding of processes, memory, scheduling, and more.",
    questions: [
      {
        id: 1,
        question: "Which scheduling algorithm can cause starvation?",
        options: ["Round Robin", "FCFS", "Priority Scheduling", "Shortest Job First (non-preemptive)"],
        answer: 2,
        explanation: "Priority Scheduling can starve low-priority processes if high-priority processes keep arriving.",
      },
      {
        id: 2,
        question: "What is a deadlock?",
        options: [
          "A process that runs forever",
          "A set of processes waiting for each other indefinitely",
          "A memory leak in the kernel",
          "An infinite loop in user space",
        ],
        answer: 1,
        explanation: "Deadlock occurs when processes are stuck waiting for resources held by each other.",
      },
      {
        id: 3,
        question: "Which memory management technique eliminates external fragmentation?",
        options: ["Paging", "Segmentation", "Contiguous allocation", "Swapping"],
        answer: 0,
        explanation: "Paging divides memory into fixed-size frames, eliminating external fragmentation.",
      },
      {
        id: 4,
        question: "In a page table, what does a page fault indicate?",
        options: [
          "The page is corrupted",
          "The requested page is not in physical memory",
          "The process has no pages",
          "The TLB is full",
        ],
        answer: 1,
        explanation: "A page fault means the required page is not currently in RAM and must be loaded from disk.",
      },
      {
        id: 5,
        question: "What is the purpose of a semaphore?",
        options: [
          "To manage file I/O",
          "To synchronize access to shared resources",
          "To schedule CPU time",
          "To handle hardware interrupts",
        ],
        answer: 1,
        explanation: "Semaphores are used for process synchronization and mutual exclusion.",
      },
      {
        id: 6,
        question: "Which of the four Coffman conditions is NOT necessary for deadlock?",
        options: ["Mutual Exclusion", "Hold and Wait", "CPU Preemption", "Circular Wait"],
        answer: 2,
        explanation: "The four necessary conditions are Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait.",
      },
      {
        id: 7,
        question: "What is thrashing in virtual memory?",
        options: [
          "A process consuming 100% CPU",
          "Excessive paging causing very low CPU utilization",
          "Memory leaks filling up RAM",
          "Cache misses in the L1 cache",
        ],
        answer: 1,
        explanation: "Thrashing occurs when the OS spends more time swapping pages than executing processes.",
      },
      {
        id: 8,
        question: "A context switch saves and restores which data structure?",
        options: ["Page table", "File descriptor table", "Process Control Block (PCB)", "Heap"],
        answer: 2,
        explanation: "The PCB stores all process state (registers, program counter, etc.) needed for a context switch.",
      },
      {
        id: 9,
        question: "Which disk scheduling algorithm services requests in the order they arrive?",
        options: ["SCAN", "C-SCAN", "SSTF", "FCFS"],
        answer: 3,
        explanation: "FCFS (First-Come, First-Served) processes disk requests in arrival order.",
      },
      {
        id: 10,
        question: "Banker's Algorithm is used to avoid:",
        options: ["Race conditions", "Deadlock", "Memory leaks", "Starvation"],
        answer: 1,
        explanation: "Banker's Algorithm checks if a resource allocation is safe, preventing deadlock.",
      },
    ],
  },
  {
    subject: "Computer Networks",
    slug: "cn",
    description: "Test your knowledge of networking protocols, layers, and concepts.",
    questions: [
      {
        id: 1,
        question: "Which layer of the OSI model is responsible for end-to-end communication?",
        options: ["Network layer", "Data Link layer", "Transport layer", "Session layer"],
        answer: 2,
        explanation: "The Transport layer (Layer 4) handles end-to-end communication and error recovery.",
      },
      {
        id: 2,
        question: "What does TCP use to ensure reliable delivery?",
        options: ["Checksums only", "Acknowledgements and retransmissions", "IP headers", "MAC addresses"],
        answer: 1,
        explanation: "TCP uses sequence numbers, ACKs, and retransmissions to guarantee reliable delivery.",
      },
      {
        id: 3,
        question: "What is the size of an IPv4 address?",
        options: ["16 bits", "32 bits", "64 bits", "128 bits"],
        answer: 1,
        explanation: "IPv4 addresses are 32 bits long, written as four 8-bit octets (e.g., 192.168.1.1).",
      },
      {
        id: 4,
        question: "Which protocol resolves IP addresses to MAC addresses?",
        options: ["DNS", "DHCP", "ARP", "ICMP"],
        answer: 2,
        explanation: "ARP (Address Resolution Protocol) maps an IP address to its corresponding MAC address.",
      },
      {
        id: 5,
        question: "What is the default port for HTTPS?",
        options: ["80", "21", "443", "8080"],
        answer: 2,
        explanation: "HTTPS uses port 443 by default.",
      },
      {
        id: 6,
        question: "In TCP's three-way handshake, what is the correct sequence?",
        options: ["SYN → ACK → SYN-ACK", "SYN → SYN-ACK → ACK", "ACK → SYN → SYN-ACK", "SYN-ACK → SYN → ACK"],
        answer: 1,
        explanation: "TCP handshake: client sends SYN, server replies SYN-ACK, client replies ACK.",
      },
      {
        id: 7,
        question: "Which routing protocol uses the Bellman-Ford algorithm?",
        options: ["OSPF", "BGP", "RIP", "IS-IS"],
        answer: 2,
        explanation: "RIP (Routing Information Protocol) uses the Bellman-Ford algorithm for distance-vector routing.",
      },
      {
        id: 8,
        question: "What is the maximum segment size that can travel over Ethernet without fragmentation?",
        options: ["512 bytes", "1024 bytes", "1500 bytes", "9000 bytes"],
        answer: 2,
        explanation: "Standard Ethernet MTU is 1500 bytes.",
      },
      {
        id: 9,
        question: "Which class of IP addresses has the range 192.0.0.0 to 223.255.255.255?",
        options: ["Class A", "Class B", "Class C", "Class D"],
        answer: 2,
        explanation: "Class C addresses start with 110 in binary and span 192.x.x.x to 223.x.x.x.",
      },
      {
        id: 10,
        question: "DNS primarily uses which transport protocol?",
        options: ["TCP", "UDP", "ICMP", "SCTP"],
        answer: 1,
        explanation: "DNS uses UDP port 53 for most queries (TCP is used for zone transfers and large responses).",
      },
    ],
  },
  {
    subject: "DBMS",
    slug: "dbms",
    description: "Test your understanding of databases, SQL, normalization, and transactions.",
    questions: [
      {
        id: 1,
        question: "Which normal form eliminates transitive dependencies?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        answer: 2,
        explanation: "3NF removes transitive dependencies (non-key attributes depending on other non-key attributes).",
      },
      {
        id: 2,
        question: "Which SQL command is used to remove all rows from a table without deleting the table?",
        options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
        answer: 2,
        explanation: "TRUNCATE removes all rows quickly and cannot be rolled back (in most databases).",
      },
      {
        id: 3,
        question: "What does ACID stand for in database transactions?",
        options: [
          "Atomicity, Consistency, Isolation, Durability",
          "Access, Control, Integrity, Data",
          "Atomicity, Concurrency, Indexing, Durability",
          "Availability, Consistency, Isolation, Distribution",
        ],
        answer: 0,
        explanation: "ACID properties ensure reliable transaction processing.",
      },
      {
        id: 4,
        question: "A foreign key constraint enforces:",
        options: [
          "Uniqueness within a column",
          "Referential integrity between two tables",
          "That a column cannot be NULL",
          "Index creation on the column",
        ],
        answer: 1,
        explanation: "A foreign key ensures values in one table match values in a referenced table.",
      },
      {
        id: 5,
        question: "Which join returns rows only when there is a match in both tables?",
        options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL OUTER JOIN"],
        answer: 2,
        explanation: "INNER JOIN returns only the rows where the join condition is met in both tables.",
      },
      {
        id: 6,
        question: "What is a view in SQL?",
        options: [
          "A stored copy of a table",
          "A virtual table based on a SELECT query",
          "An index on a table",
          "A trigger function",
        ],
        answer: 1,
        explanation: "A view is a named query stored in the database, presenting data as a virtual table.",
      },
      {
        id: 7,
        question: "Which concurrency problem occurs when a transaction reads data that another uncommitted transaction has modified?",
        options: ["Phantom read", "Non-repeatable read", "Dirty read", "Lost update"],
        answer: 2,
        explanation: "A dirty read occurs when a transaction reads uncommitted changes from another transaction.",
      },
      {
        id: 8,
        question: "Which isolation level prevents dirty reads but allows non-repeatable reads?",
        options: ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"],
        answer: 1,
        explanation: "READ COMMITTED prevents dirty reads but doesn't prevent non-repeatable reads.",
      },
      {
        id: 9,
        question: "What does the GROUP BY clause do in SQL?",
        options: [
          "Sorts results alphabetically",
          "Groups rows sharing a column value for aggregate functions",
          "Filters rows after aggregation",
          "Joins two tables",
        ],
        answer: 1,
        explanation: "GROUP BY groups rows with the same value so aggregate functions (SUM, COUNT, etc.) can be applied.",
      },
      {
        id: 10,
        question: "Which index type is most efficient for range queries on a column?",
        options: ["Hash index", "B-tree index", "Bitmap index", "Full-text index"],
        answer: 1,
        explanation: "B-tree indexes maintain sorted order, making range queries (BETWEEN, <, >) very efficient.",
      },
    ],
  },
  {
    subject: "Programming in C",
    slug: "c-programming",
    description: "Test your knowledge of C fundamentals — from data types and pointers to file I/O and dynamic memory.",
    questions: [
      {
        id: 1,
        question: "Who created the C programming language?",
        options: ["Bjarne Stroustrup", "Dennis Ritchie", "Linus Torvalds", "Brian Kernighan"],
        answer: 1,
        explanation: "C was created by Dennis Ritchie at Bell Labs in the early 1970s.",
      },
      {
        id: 2,
        question: "Which flowchart symbol is used to represent a decision?",
        options: ["Rectangle", "Oval", "Parallelogram", "Diamond"],
        answer: 3,
        explanation: "A diamond shape represents a decision (conditional branch) in a flowchart.",
      },
      {
        id: 3,
        question: "What is the size of a `float` on a typical 32-bit system in C?",
        options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
        answer: 2,
        explanation: "`float` is a 4-byte single-precision type; `double` is 8 bytes.",
      },
      {
        id: 4,
        question: "Which storage class retains a local variable's value between function calls?",
        options: ["auto", "extern", "register", "static"],
        answer: 3,
        explanation: "`static` local variables are initialized once and retain their value across calls.",
      },
      {
        id: 5,
        question: "What does `scanf(\"%d\", x)` have wrong compared to correct usage?",
        options: [
          "Wrong format specifier for int",
          "Missing & before x",
          "scanf cannot read integers",
          "Missing semicolon",
        ],
        answer: 1,
        explanation: "`scanf` needs the address of the variable: `scanf(\"%d\", &x)`. Without `&`, behavior is undefined.",
      },
      {
        id: 6,
        question: "In C, arrays are passed to functions as:",
        options: [
          "A full copy of the array",
          "A pointer to the first element",
          "A reference using the & operator",
          "A struct wrapper",
        ],
        answer: 1,
        explanation: "Array names decay to a pointer to their first element when passed to a function.",
      },
      {
        id: 7,
        question: "Which operator is used to access a structure member through a pointer?",
        options: [".", "->", "*", "&"],
        answer: 1,
        explanation: "The `->` operator dereferences a struct pointer and accesses a member: `ptr->field`.",
      },
      {
        id: 8,
        question: "What is the size of a `union` in C?",
        options: [
          "Sum of sizes of all members",
          "Size of the smallest member",
          "Size of the largest member",
          "Fixed 8 bytes",
        ],
        answer: 2,
        explanation: "All union members share the same memory, so the union is sized to fit its largest member.",
      },
      {
        id: 9,
        question: "Which dynamic memory function allocates memory AND zero-initializes it?",
        options: ["malloc", "realloc", "calloc", "alloc"],
        answer: 2,
        explanation: "`calloc(n, size)` allocates n elements of the given size and sets all bytes to zero.",
      },
      {
        id: 10,
        question: "What is the correct way to define a macro that squares a number safely?",
        options: [
          "#define SQR(x) x*x",
          "#define SQR(x) (x*x)",
          "#define SQR(x) ((x)*(x))",
          "#define SQR(x) {x*x}",
        ],
        answer: 2,
        explanation: "Parentheses around each argument and the whole expression prevent operator precedence bugs when the macro is used in complex expressions.",
      },
    ],
  },
];

export function getQuizBySlug(slug: string): Quiz | undefined {
  return quizzes.find((q) => q.slug === slug);
}