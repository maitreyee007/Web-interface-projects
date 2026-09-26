function SemesterSummary({ summary }) {
  if (!summary) return null

  return (
    <div className="summary-block">
      <div className="summary-row">
        <span>Total Credits</span>
        <strong>{summary.totalCredits}</strong>
      </div>
      <div className="summary-row">
        <span>Credits Earned</span>
        <strong>{summary.earnedCredits}</strong>
      </div>
      <div className="summary-row">
        <span>SGPA</span>
        <strong>{summary.sgpa}</strong>
      </div>
      <div className="summary-row">
        <span>Result</span>
        <strong>{summary.result}</strong>
      </div>
      <div className="summary-row">
        <span>Passed Subjects</span>
        <strong>{summary.passedSubjects}</strong>
      </div>
      <div className="summary-row">
        <span>Failed Subjects</span>
        <strong>{summary.failedSubjects}</strong>
      </div>
    </div>
  )
}

export default SemesterSummary
