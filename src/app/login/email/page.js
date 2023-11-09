'use client';
import { useRef, useState } from 'react';
import AuthForm from '../../../components/AuthForm/AuthForm';
import { signIn } from 'next-auth/react';

const LoginEmail = () => {
	const emailRef = useRef();
	const passwordRef = useRef();

	const [registerError, setRegisterError] = useState();

	const login = async (e) => {
		e.preventDefault();

		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		const res = await signIn('login', {
			email,
			password,
			redirect: false,
		});

		if (res.error) {
			setRegisterError(res.error);
		}
	};
	return (
		<AuthForm handleSubmit={login}>
			<h1>Login with email</h1>

			<section>
				<label>
					Email:
					<input ref={emailRef} type="email" />
				</label>
				<label>
					Password:
					<input ref={passwordRef} type="password" />
				</label>
				{registerError}
				<button type="submit">Login</button>
			</section>
		</AuthForm>
	);
};

export default LoginEmail;
