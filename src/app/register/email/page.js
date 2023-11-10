'use client';
import { useRef, useState } from 'react';
import { signIn } from 'next-auth/react';
import AuthForm from '../../../components/AuthForm/AuthForm';

const RegisterEmail = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const [registerError, setRegisterError] = useState();

	const register = async (e) => {
		e.preventDefault();

		try {
			const email = emailRef.current.value;
			const password = passwordRef.current.value;

			const res = await signIn('signup', {
				email,
				password,
				redirect: false,
			});

			if (res?.error) {
				setRegisterError(res.error);
			}
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<AuthForm handleSubmit={register}>
			<h1>Signup with email</h1>

			<section>
				<label>
					Email:
					<input
						name="email"
						ref={emailRef}
						placeholder="email@gmail.com"
						type="email"
					/>
				</label>
				<label>
					Password:
					<input
						name="password"
						ref={passwordRef}
						placeholder="********"
						type="password"
					/>
				</label>
				{registerError}
				<button type="submit">Signup</button>
			</section>
		</AuthForm>
	);
};

export default RegisterEmail;
