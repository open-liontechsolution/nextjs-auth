import { fireEvent, render, screen } from '@testing-library/react';
import Login from '../../../../src/app/login/page';
import { signIn } from 'next-auth/react';

describe('Login', () => {
	beforeEach(() => {
		signIn.mockReset();
	});
	it('should match snapshot', () => {
		const component = render(<Login title="Login" />);
		expect(component).toMatchSnapshot();
	});

	it('should trigger Google login', () => {
		const component = render(<Login title="Login" />);

		const googleButton = screen.getByText('Login with Google');
		fireEvent.click(googleButton);

		expect(signIn).toHaveBeenCalledTimes(1);
		expect(component).toMatchSnapshot();
	});

	it('should fail on signIn', (done) => {
		signIn.mockRejectedValue(new Error('signIn error'));
		const component = render(<Login />);

		const googleButton = screen.getByText('Login with Google');
		fireEvent.click(googleButton);

		setTimeout(() => {
			expect(signIn).toHaveBeenCalledTimes(1);
			expect(component).toMatchSnapshot();
			done();
		}, 300);
	});
});
