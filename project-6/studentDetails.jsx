import {useState} from 'react';
import './StudentDetails.css';

function StudentDetails(){
    const [showDetails, setShowDetails] = useState(false);
    return(
        <div className="student-details">
            <h2>Student Details</h2>
            {showDetails && (
                <div className="details">
                    <p><strong>Name:</strong> Maitreyee</p>
                    <p><strong>Roll No:</strong> 4040</p>
                    <p><strong>Department:</strong> Computer Science</p>
                    <p><strong>Year:</strong> 2nd Year</p>
                </div>
            )}
            <button type="button" onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
        </div>
    );
}
export default StudentDetails;