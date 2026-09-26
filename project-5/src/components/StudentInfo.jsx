function StudentInfo({ student, semesterName, academicYear }) {
  return (
    <div className="student-info-box">
      <div className="student-identity-grid">
        <div>
          <p><span>Student Name:</span> {student.name}</p>
          <p><span>Register No:</span> {student.registerNumber}</p>
          <p><span>Department:</span> {student.department}</p>
        </div>

        <div>
          <p><span>Semester:</span> {semesterName}</p>
          <p><span>Academic Year:</span> {academicYear || student.academicYear}</p>
          <p><span>Year:</span> {student.year}</p>
        </div>
      </div>
    </div>
  )
}

export default StudentInfo
