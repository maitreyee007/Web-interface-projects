import React from "react";
import "./Dashboard.css";

function StudentCard({ student }) {
  const nameStyle = { color: "#0f172a", fontWeight: 700 };
  const attendanceStyle = { color: student.attendance > 80 ? "#166534" : "#b91c1c", fontWeight: 700 };
  const cgpaStyle = { color: student.cgpa > 8 ? "#1d4ed8" : "#b45309", fontWeight: 700 };

  return (
    <section className="student-card">
      <img src={student.photo} alt={student.name} className="student-photo" />
      <div className="student-details">
        <h2 style={nameStyle}>{student.name}</h2>
        <p><span>Register Number:</span> {student.registerNumber}</p>
        <p><span>Department:</span> {student.department}</p>
        <p><span>Year:</span> {student.year}</p>
        <p><span>Semester:</span> {student.semester}</p>
        <p>
          <span>Attendance:</span>{" "}
          <span style={attendanceStyle}>{student.attendance}%</span>
        </p>
        <p>
          <span>CGPA:</span>{" "}
          <span style={cgpaStyle}>{student.cgpa}</span>
        </p>
      </div>
    </section>
  );
}

export default StudentCard;
