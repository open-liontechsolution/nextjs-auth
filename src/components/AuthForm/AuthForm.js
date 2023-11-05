import googleLogo from 'src/assets/images/google-logo.svg';
import SocialButton from '../SocialButton/SocialButton';
import styles from './AuthForm.module.scss';

export const SOCIAL_METHODS = [
	{
		method: 'Login',
		provider: 'Google',
		loginTitle: 'Login with Google',
		logo: googleLogo,
	},
];
const AuthForm = ({ title }) => {
	return (
		<form className={styles.form}>
			<h1>{title}</h1>
			<section className={styles.socialContainer}>
				{SOCIAL_METHODS.map(
					({ method, loginTitle, logo, provider }, idx) => (
						<SocialButton
							key={idx}
							method={method}
							loginTitle={loginTitle}
							logo={logo}
							provider={provider}
						/>
					),
				)}
			</section>
		</form>
	);
};

export default AuthForm;
