function MarksTable({ subjects }) {
  return (
    <div className="marks-table-wrap">
      <table className="marks-table">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Credits</th>
            <th>Internal</th>
            <th>External</th>
            <th>Total</th>
            <th>Grade</th>
            <th>Grade Point</th>
            <th>Result</th>
          </tr>
        </thead>

        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.code}>
              <td>{subject.code}</td>
              <td>{subject.name}</td>
              <td>{subject.credits}</td>
              <td>{subject.internal}</td>
              <td>{subject.external}</td>
              <td>{subject.total}</td>
              <td>{subject.grade}</td>
              <td>{subject.gradePoint}</td>
              <td className={subject.result === 'RA' ? 'result-ra' : 'result-pass'}>
                {subject.result}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MarksTable
