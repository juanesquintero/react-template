import Button from '@src/app/common/Button/Button';
import Input from '@src/app/common/Input/Input';
import usePost from '@src/app/shared/hooks/usePost';
import useRedirect from '@src/app/shared/hooks/useRedirect';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginFormType } from './Login.types';

const Login: React.FC = () => {
	useRedirect('/courses')();

	const navigate = useNavigate();

	const [loginForm, setLoginForm] = useState({
		email: '',
		password: '',
	});

	const onChangeForm = (change: LoginFormType) => {
		setLoginForm({ ...loginForm, ...change });
	};

	const onLogin = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		const [endpoint, body] = ['/login', loginForm];
		const apiResponse = await usePost({ endpoint, body });
		if (apiResponse?.successful) {
			console.log(apiResponse?.result);
			localStorage.setItem('token', 'apiResponse.result');
			navigate('/courses');
		} else {
			alert('ERROR ' + apiResponse);
		}
	};

	return (
		<section className='registration'>
			<form className='registration-form' onSubmit={onLogin}>
				<h5>Login</h5>
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
				<Button text='Login' style='outline-dark' size='md' type='submit' />

				<p className='mt-5'>
					If you not have an account you can{' '}
					<Link to='/registration'>Registration</Link>
				</p>
			</form>
		</section>
	);
};

export default Login;
