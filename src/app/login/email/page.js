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

		try {
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
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<AuthForm handleSubmit={login}>
			<h1>Login with email</h1>

			<section>
				<label>
					Email:
					<input
						name="email"
						ref={emailRef}
						type="email"
						placeholder="email@gmail.com"
					/>
				</label>
				<label>
					Password:
					<input
						name="password"
						ref={passwordRef}
						type="password"
						placeholder="********"
					/>
				</label>
				{registerError}
				<button type="submit">Login</button>
			</section>
		</AuthForm>
	);
};

export default LoginEmail;
