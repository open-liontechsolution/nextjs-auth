'use client';
import Image from 'next/image';
import styles from './SocialButton.module.scss';

const SocialButton = ({ loginTitle, logo, provider, handleClick }) => {
	return (
		<>
			<div className={styles.socialButton} onClick={handleClick}>
				<Image alt={provider} src={logo} width={40} height={40} />
				<p>{loginTitle}</p>
			</div>
		</>
	);
};

export default SocialButton;
