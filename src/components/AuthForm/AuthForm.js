import styles from './AuthForm.module.scss';

const AuthForm = ({ children, handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			{children}
		</form>
	);
};

export default AuthForm;
