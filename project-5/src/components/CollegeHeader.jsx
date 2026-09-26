import mai3 from '../assets/mai3.png'

function CollegeHeader({ title = 'STATEMENT OF MARKS', sealSrc = mai3 }) {
  return (
    <header className="college-header">
      <div className="college-brand-block">
        <img src={sealSrc} alt="College emblem" className="seal-image" />
        <div>
          <h1>PRINCE DR. K VASUDEVAN</h1>
          <h2>COLLEGE OF ENGINEERING</h2>
        </div>
      </div>

      <div className="report-title">{title}</div>
    </header>
  )
}

export default CollegeHeader
