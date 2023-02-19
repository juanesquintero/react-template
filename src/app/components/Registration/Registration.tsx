import Button from '@src/app/common/Button/Button';
import Input from '@src/app/common/Input/Input';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration: React.FC = () => {
	const [registerForm, setRegisterForm] = useState({
		name: '',
		email: '',
		password: '',
	});

	const onChangeForm = ({ filed, value }: { filed: string; value: any }) => {
		const newForm = registerForm;
		newForm[filed] = value;
		setRegisterForm(newForm);
	};
	const onRegister = () => {
		axios.post('/api/', registerForm);
	};

	return (
		<div
			className='container bg-white rounded my-5 p-5'
			style={{ display: 'grid', placeItems: 'center' }}
		>
			<h5>Registration</h5>
			<form action='' className='form my-3'>
				<Input
					label='Name'
					type='text'
					className='my-2'
					onChange={(e) => {
						onChangeForm(e.target.value);
					}}
				/>

				<Input
					label='Email'
					type='email'
					className='my-2'
					onChange={(e) => {
						onChangeForm(e.target.value);
					}}
				/>

				<Input
					label='Password'
					type='password'
					className='my-2'
					onChange={(e) => {
						onChangeForm(e.target.value);
					}}
				/>
			</form>
			<Button
				text='Register'
				style='outline-dark'
				size='md'
				onClick={onRegister}
			/>

			<p className='my-5'>
				If you have an account you can <Link to='login'>Login</Link>
			</p>
		</div>
	);
};

export default Registration;
