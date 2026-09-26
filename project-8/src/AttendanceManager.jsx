import React, { useState } from "react";
import "./attendance.css";

const studentsData = [
  { id: 1, name: "Ava Johnson", status: "" },
  { id: 2, name: "Liam Chen", status: "" },
  { id: 3, name: "Mia Williams", status: "" },
  { id: 4, name: "Noah Smith", status: "" },
  { id: 5, name: "Sophia Patel", status: "" }
];

function AttendanceManager() {
  const [students, setStudents] = useState(studentsData);
  const [searchText, setSearchText] = useState("");

  const markAttendance = (id, status) => {
    const updatedStudents = students.map((student) =>
      student.id === id
        ? { ...student, status: status }
        : student
    );

    setStudents(updatedStudents);
  };

  const resetAttendance = () => {
    const resetStudents = students.map((student) => ({
      ...student,
      status: ""
    }));

    setStudents(resetStudents);
  };

  const presentStudents = students.filter(
    (student) => student.status === "Present"
  ).length;

  const absentStudents = students.filter(
    (student) => student.status === "Absent"
  ).length;

  const markedStudents = presentStudents + absentStudents;

  const filteredStudents = students.filter((student) =>
    student.name
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <main className="attendance-app">

      <header className="page-header">
        <h1>Attendance Management</h1>
        <p>React JS Class · Today</p>
      </header>

      <section className="summary">

        <div className="summary-card">
          <strong>
            {markedStudents}/{students.length}
          </strong>
          <span>Marked</span>
        </div>

        <div className="summary-card">
          <strong>{presentStudents}</strong>
          <span>Present</span>
        </div>

        <div className="summary-card">
          <strong>{absentStudents}</strong>
          <span>Absent</span>
        </div>

        <button
          className="reset-button"
          onClick={resetAttendance}
        >
          Reset
        </button>

      </section>

      <section className="student-box">

        <div className="student-heading">
          <h2>Students</h2>

          <input
            type="text"
            value={searchText}
            onChange={(event) =>
              setSearchText(event.target.value)
            }
            placeholder="Search students"
          />
        </div>

        {filteredStudents.map((student) => (
          <div
            className="student-row"
            key={student.id}
          >

            <div className="student-info">

              <strong>{student.name}</strong>

              <span
                className={student.status.toLowerCase()}
              >
                {student.status || "Not marked"}
              </span>

            </div>

            <div className="actions">

              <button
                className="present-button"
                onClick={() =>
                  markAttendance(student.id, "Present")
                }
              >
                Present
              </button>

              <button
                className="absent-button"
                onClick={() =>
                  markAttendance(student.id, "Absent")
                }
              >
                Absent
              </button>

            </div>

          </div>
        ))}

      </section>

    </main>
  );
}

export default AttendanceManager;