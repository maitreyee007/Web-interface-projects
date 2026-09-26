import './App.css'
import CollegeHeader from './components/CollegeHeader'
import StudentInfo from './components/StudentInfo'
import MarksTable from './components/MarksTable'
import SemesterSummary from './components/SemesterSummary'
import SignatureSection from './components/SignatureSection'
import PrintButton from './components/PrintButton'

const student = {
  name: 'Maitreyee J',
  registerNumber: '21CS145',
  department: 'Computer Science and Engineering',
  year: '3rd Year',
  academicYear: '2024-2025',
}

const subjects = [
  { code: 'CS301', name: 'Data Structures', credits: 4, internal: 22, external: 58, total: 80, grade: 'A', gradePoint: 9, result: 'Pass' },
  { code: 'CS302', name: 'Operating Systems', credits: 4, internal: 19, external: 49, total: 68, grade: 'B+', gradePoint: 8, result: 'Pass' },
  { code: 'CS303', name: 'Database Management', credits: 3, internal: 18, external: 52, total: 70, grade: 'A', gradePoint: 9, result: 'Pass' },
  { code: 'CS304', name: 'Computer Networks', credits: 3, internal: 16, external: 41, total: 57, grade: 'C', gradePoint: 6, result: 'Pass' },
  { code: 'CS305', name: 'Software Engineering', credits: 3, internal: 20, external: 60, total: 80, grade: 'A', gradePoint: 9, result: 'Pass' },
  { code: 'CS306', name: 'Microprocessors', credits: 4, internal: 15, external: 39, total: 54, grade: 'C+', gradePoint: 5, result: 'Pass' },
]

const summary = {
  totalCredits: 21,
  earnedCredits: 21,
  sgpa: '8.62',
  result: 'Pass',
  passedSubjects: 6,
  failedSubjects: 0,
}

function App() {
  return (
    <main className="report-card">
      <CollegeHeader title="STATEMENT OF MARKS" />

      <div className="report-topbar">
        <div className="report-badge">Semester 5</div>
        <PrintButton label="Print Report Card" />
      </div>

      <StudentInfo
        student={student}
        semesterName="Semester 5"
        academicYear="2024-2025"
      />

      <div className="content-grid">
        <MarksTable subjects={subjects} />
        <SemesterSummary summary={summary} />
      </div>

      <SignatureSection />
    </main>
  )
}

export default App
