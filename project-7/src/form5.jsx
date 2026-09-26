import { useState } from 'react';
import './form.css';

function FormValidationSingleHandler() {
	const [data, setData] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: '',
	});

	function changeData(event) {
		setData({...data,[event.target.name]:event.target.value,});
	}

	return (
		<form className="preview-form">
			<label>
				Name:
				<input type="text" name="name" value={data.name} onChange={changeData} />
			</label>

			<label>
				Email:
				<input type="email" name="email" value={data.email} onChange={changeData} />
			</label>

			<label>
				Phone:
				<input type="tel" name="phone" value={data.phone} onChange={changeData} />
			</label>

			<label>
				Subject:
				<input type="text" name="subject" value={data.subject} onChange={changeData} />
			</label>

			<label>
				Message:
				<textarea name="message" value={data.message} onChange={changeData} rows={4} />
			</label>
		</form>
	);
}

export default FormValidationSingleHandler;
