function PrintButton({ label = 'Print Report Card' }) {
  const handlePrint = () => {
    window.print()
  }

  return (
    <button type="button" className="print-button no-print" onClick={handlePrint}>
      {label}
    </button>
  )
}

export default PrintButton
