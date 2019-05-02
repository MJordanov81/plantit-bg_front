import React from 'react';

import { FormGroup, FormControl, ControlLabel  } from 'react-bootstrap';

class FormInputField extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		const {type, step, min, max, label, name, value, required, onChange, placeholder, disabled, className} = this.props;

		return (
			<FormGroup controlId={name} className={className}>
				<ControlLabel>{label}{required && <span className="text-danger">&nbsp;*</span>}</ControlLabel>
				<FormControl
					type={type}
					step={step}
					min={min}
					max={max}
					name={name}
					value={value}
					placeholder={placeholder}
					required={required}
					disabled={disabled}
					onChange={onChange}
				/>
			</FormGroup>
		);
	}
}

export default FormInputField;
