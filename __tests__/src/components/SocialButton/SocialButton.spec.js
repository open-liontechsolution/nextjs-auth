import { screen, render, fireEvent } from '@testing-library/react';
import SocialButton from '../../../../src/components/SocialButton/SocialButton';
import { signIn } from 'next-auth/react';
import { SOCIAL_METHODS } from '../../../../src/app/login/page';

describe('SocialButton', () => {
	const handleClick = jest.fn();
	beforeEach(() => {
		signIn.mockReset();
		handleClick.mockReset();
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
				{...SOCIAL_METHODS.GOOGLE}
				handleClick={handleClick}
			/>,
		);
		const button = screen.getByText('Login with Google');
		fireEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
		expect(component).toMatchSnapshot();
	});

	it('should click on Google and get error', (done) => {
		signIn.mockRejectedValue(new Error('signIn with Google error'));
		const component = render(
			<SocialButton
				{...SOCIAL_METHODS.GOOGLE}
				handleClick={handleClick}
			/>,
		);

		const button = screen.getByText('Login with Google');

		fireEvent.click(button);

		setTimeout(() => {
			expect(handleClick).toHaveBeenCalledTimes(1);
			expect(component).toMatchSnapshot();
			done();
		}, 300);
	});
});
