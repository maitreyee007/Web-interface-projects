import {useState} from 'react';
import './form.css';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function nameChange(event) {
    setName(event.target.value);
  }

  function emailChange(event) {
    setEmail(event.target.value);
  }

  function messageChange(event) {
    setMessage(event.target.value);
  }

  return (
    <div className="form-container">
      <div className="form-section">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={nameChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={emailChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea
            value={message}
            onChange={messageChange}
            placeholder="Enter your message"
            rows="5"
          />
        </div>
      </div>

      <div className="preview-box">
        <h3>Preview</h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Message:</strong> {message}</p>
      </div>
    </div>
  );
}

export default Form;