import Button from '@src/app/common/Button/Button';
import Input from '@src/app/common/Input/Input';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RegistrationFormType } from './Registration.types';
import './Registration.scss';
import usePost from '@src/app/shared/hooks/usePost';

const Registration: React.FC = () => {
	const navigate = useNavigate();

	const [registerForm, setRegisterForm] = useState({
		name: '',
		email: '',
		password: '',
	});

	const onChangeForm = (change: RegistrationFormType) => {
		setRegisterForm({ ...registerForm, ...change });
	};

	const onRegister = async () => {
		const [endpoint, body] = ['/register', registerForm];
		const apiResponse = await usePost({ endpoint, body });
		if (apiResponse?.successful) {
			navigate('/login');
		} else {
			alert('ERROR ' + apiResponse);
		}
	};

	return (
		<section className='registration'>
			<form className='registration-form'>
				<h5>Registration</h5>
				<Input
					label='Name'
					type='text'
					className='my-3'
					onChange={(e) => {
						onChangeForm({ name: e.target.value });
					}}
				/>

				<Input
					label='Email'
					type='email'
					className='my-3'
					onChange={(e) => {
						onChangeForm({ email: e.target.value });
					}}
				/>

				<Input
					label='Password'
					type='password'
					className='my-3'
					onChange={(e) => {
						onChangeForm({ password: e.target.value });
					}}
				/>
				<Button
					text='Register'
					style='outline-dark'
					size='md'
					onClick={onRegister}
				/>

				<p className='my-5'>
					If you have an account you can <Link to='/login'>Login</Link>
				</p>
			</form>
		</section>
	);
};

export default Registration;
