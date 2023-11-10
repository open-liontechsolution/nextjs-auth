import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { signIn } from 'next-auth/react';
import LoginEmail from '../../../../../src/app/login/email/page';
import { userSessionMock } from '../../../../../__mocks__/data/userSession';

describe('Register', () => {
	beforeEach(() => {
		signIn.mockReset();
	});
	it('should match snapshot', () => {
		const component = render(<LoginEmail />);
		expect(component).toMatchSnapshot();
	});

	it('should login successfully', (done) => {
		signIn.mockReturnValueOnce({ user: userSessionMock });
		const component = render(<LoginEmail />);

		const emailInput = screen.getByPlaceholderText('email@gmail.com');
		const passwordInput = screen.getByPlaceholderText('********');
		fireEvent.change(emailInput, {
			target: { value: 'newemail@gmail.com' },
		});

		fireEvent.change(passwordInput, {
			target: { value: 'newpassword' },
		});

		const submitButton = screen.getByText('Login');
		fireEvent.click(submitButton);

		setTimeout(() => {
			expect(emailInput.value).toBe('newemail@gmail.com');
			expect(passwordInput.value).toBe('newpassword');

			expect(signIn.mock.calls[0][0]).toBe('login');
			expect(signIn.mock.calls[0][1].email).toBe(emailInput.value);
			expect(signIn.mock.calls[0][1].password).toBe(passwordInput.value);
			expect(signIn).toHaveBeenCalled();
			expect(component).toMatchSnapshot();
			done();
		}, 300);
	});

	it('should NOT login successfully', (done) => {
		signIn.mockReturnValueOnce({ error: 'error' });
		const component = render(<LoginEmail />);

		const submitButton = screen.getByText('Login');
		fireEvent.click(submitButton);

		setTimeout(() => {
			expect(signIn).toHaveBeenCalled();
			expect(component).toMatchSnapshot();
			done();
		}, 300);
	});

	it('should fail on signIn', (done) => {
		signIn.mockRejectedValue(new Error('signIn error'));
		const component = render(<LoginEmail />);

		const submitButton = screen.getByText('Login');
		fireEvent.click(submitButton);

		setTimeout(() => {
			expect(signIn).toHaveBeenCalled();
			expect(component).toMatchSnapshot();
			done();
		}, 300);
	});
});
