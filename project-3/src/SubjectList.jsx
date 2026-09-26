import React from "react";
import "./Dashboard.css";
import Subject from "./Subject";

function SubjectList({ subjects, currentYear, currentSemester }) {
  return (
    <section className="subject-section">
      <h3>Subjects</h3>
      <p>Current Year: <strong>{currentYear}</strong> | Current Semester: <strong>{currentSemester}</strong> | Total Subjects: <strong>{subjects.length}</strong></p>
      <ul className="subject-list">
        {subjects.map((subj, idx) => (
          <Subject key={`${subj}-${idx}`} name={subj} />
        ))}
      </ul>
    </section>
  );
}

export default SubjectList;
