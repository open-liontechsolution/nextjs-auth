import { screen, render, fireEvent } from '@testing-library/react';
import SocialButton from '../../../../src/components/SocialButton/SocialButton';
import { signIn } from 'next-auth/react';
import { SOCIAL_METHODS } from '../../../../src/components/AuthForm/AuthForm';

describe('SocialButton', () => {
	beforeEach(() => {
		signIn.mockReset();
	});
	it('should render Google', () => {
		const component = render(
			<SocialButton
				loginTitle="Login with Google"
				logo="src/assets/images/google-logo.svg"
				provider="Google"
			/>,
		);

		expect(component).toMatchSnapshot();
	});

	it('should click on Google', () => {
		const component = render(
			<SocialButton
				loginTitle="Login with Google"
				logo="src/assets/images/google-logo.svg"
				provider="Google"
			/>,
		);
		const button = screen.getByText('Login with Google');
		fireEvent.click(button);
		expect(signIn).toHaveBeenCalledTimes(1);
		expect(component).toMatchSnapshot();
	});

	it('should click on Google and get error', () => {
		signIn.mockRejectedValue(new Error('signIn with Google error'));
		const component = render(<SocialButton {...SOCIAL_METHODS[0]} />);

		const button = screen.getByText('Login with Google');

		fireEvent.click(button);
		expect(signIn).toHaveBeenCalledTimes(1);
		expect(component).toMatchSnapshot();
	});
});
