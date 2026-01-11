const teachers = [
  {
    user: "64f1a2b3c9e1234567890001",
    name: "Ramesh Sharma",
    email: "ramesh.sharma@school.com",
    subject: "Mathematics",
    assignedClasses: [
      { className: "10", section: "A" },
      { className: "9", section: "B" }
    ],
    phone: "9841234567",
    address: "Kathmandu, Nepal",
    verified: true
  },
  {
    user: "64f1a2b3c9e1234567890002",
    name: "Sita Adhikari",
    email: "sita.adhikari@school.com",
    subject: "Science",
    assignedClasses: [
      { className: "8", section: "A" },
      { className: "7", section: "C" }
    ],
    phone: "9801122334",
    address: "Pokhara, Nepal",
    verified: false
  },
  {
    user: "64f1a2b3c9e1234567890003",
    name: "Bikash Thapa",
    email: "bikash.thapa@school.com",
    subject: "English",
    assignedClasses: [
      { className: "6", section: "B" }
    ],
    phone: "9819988776",
    address: "Butwal, Nepal",
    verified: true
  },
  {
    user: "64f1a2b3c9e1234567890004",
    name: "Anita Koirala",
    email: "anita.koirala@school.com",
    subject: "Computer Science",
    assignedClasses: [
      { className: "10", section: "C" },
      { className: "9", section: "A" }
    ],
    phone: "9865432190",
    address: "Lalitpur, Nepal",
    verified: false
  }
];

export default teachers;

