'use client';
import AuthForm from '../../components/AuthForm/AuthForm';
import Link from 'next/link';
import SocialButton from '../../components/SocialButton/SocialButton';
import { ROUTES } from '../../../constants';
import styles from './page.module.css';
import { SOCIAL_METHODS } from '../login/page';

const Register = () => {
	return (
		<AuthForm>
			<h1>Login</h1>
			<section className={styles.socialContainer}>
				<Link href={ROUTES.LOGIN_EMAIL}>
					<SocialButton {...SOCIAL_METHODS.EMAIL} />
				</Link>
			</section>
		</AuthForm>
	);
};

export default Register;
