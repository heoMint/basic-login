import { useState } from 'react';
import { styled } from 'styled-components';
import Button from './Button';
import Input from './Input';

export default function AuthInputs() {
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredPassword, setEnteredPassword] = useState('');
	const [submitted, setSubmitted] = useState(false);

	function handleInputChange(identifier, value) {
		if (identifier === 'email') {
			setEnteredEmail(value);
		} else {
			setEnteredPassword(value);
		}
	}

	function handleLogin() {
		setSubmitted(true);
	}

	const emailNotValid = submitted && !enteredEmail.includes('@');
	const passwordNotValid = submitted && enteredPassword.trim().length < 6;

	return (
		<div id='auth-inputs'>
			<ControlDiv>
				<Input
          label='Email'
					type='email'
					invalid={emailNotValid}
					// inline style 사용 방법
					// style={{ background: emailNotValid ? '#fed2d2' : '#d1d5db' }}
					onChange={(event) => handleInputChange('email', event.target.value)}
				/>
				<Input
          label='Password'
					type='password'
					invalid={passwordNotValid}
					onChange={(event) => handleInputChange('password', event.target.value)}
				/>
			</ControlDiv>
			<div className='actions'>
				<button
					type='button'
					className='text-button'
				>
					Create a new account
				</button>
				<Button
					className='button'
					onClick={handleLogin}
				>
					Sign In
				</Button>
			</div>
		</div>
	);
}

const ControlDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 1.5rem;
`;
