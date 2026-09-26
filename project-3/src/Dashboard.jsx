import "./Dashboard.css";
import mai3 from "./mai3.png";
import Header from "./Header";
import StudentCard from "./StudentCard";
import SubjectList from "./SubjectList";
import Footer from "./Footer";

function Dashboard() {
  const student = {
    name: "Maitreyee J",
    registerNumber: "411625104040",
    department: "Computer Science",
    year: "2nd Year",
    semester: "3rd Semester",
    attendance: 90,
    cgpa: 8.9,
    photo: mai3,
  };

  const subjects = [
    "Web Interface",
    "DBMS",
    "Data Science",
    "Discrete Mathematics",
    "Data Structures",
  ];

  const attendanceStatus =
    student.attendance > 80 ? "Eligible for Semester" : "Not Eligible";

  const placementStatus =
    student.cgpa > 8 ? "Eligible for Placement" : "Not Eligible";

  return (
    <div className="dashboard-page">
      <Header collegeName="Prince Dr. K Vasudevan College of Engineering" />

      <main className="dashboard-main">
        <StudentCard student={student} />

        <section className="status-section">
          <div className="status-card">
            <h3>Attendance Status</h3>
            <p>{attendanceStatus}</p>
          </div>

          <div className="status-card">
            <h3>Placement Status</h3>
            <p>{placementStatus}</p>
          </div>
        </section>

        <SubjectList
          subjects={subjects}
          currentYear={student.year}
          currentSemester={student.semester}
        />
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;