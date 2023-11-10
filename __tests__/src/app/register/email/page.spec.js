import { fireEvent, render, screen } from '@testing-library/react';
import RegisterEmail from '../../../../../src/app/register/email/page';
import React from 'react';
import { signIn } from 'next-auth/react';
import { userSessionMock } from '../../../../../__mocks__/data/userSession';

describe('RegisterEmail', () => {
	beforeEach(() => {
		signIn.mockReset();
	});
	it('should match snapshot', () => {
		const component = render(<RegisterEmail />);
		expect(component).toMatchSnapshot();
	});

	it('should login successfully', (done) => {
		signIn.mockReturnValueOnce({ user: userSessionMock });
		const component = render(<RegisterEmail />);

		const emailInput = screen.getByPlaceholderText('email@gmail.com');
		const passwordInput = screen.getByPlaceholderText('********');
		fireEvent.change(emailInput, {
			target: { value: 'newemail@gmail.com' },
		});

		fireEvent.change(passwordInput, {
			target: { value: 'newpassword' },
		});

		const submitButton = screen.getByText('Signup');
		fireEvent.click(submitButton);

		setTimeout(() => {
			console.log(signIn.mock.calls[0], 'signIn.mock.calls');

			expect(emailInput.value).toBe('newemail@gmail.com');
			expect(passwordInput.value).toBe('newpassword');

			expect(signIn.mock.calls[0][0]).toBe('signup');
			expect(signIn.mock.calls[0][1].email).toBe(emailInput.value);
			expect(signIn.mock.calls[0][1].password).toBe(passwordInput.value);
			expect(signIn).toHaveBeenCalled();
			expect(component).toMatchSnapshot();
			done();
		}, 300);
	});

	it('should NOT login successfully', (done) => {
		signIn.mockReturnValueOnce({ error: 'error' });
		const component = render(<RegisterEmail />);

		const submitButton = screen.getByText('Signup');
		fireEvent.click(submitButton);

		setTimeout(() => {
			expect(signIn).toHaveBeenCalled();
			expect(component).toMatchSnapshot();
			done();
		}, 300);
	});

	it('should fail on signIn', (done) => {
		signIn.mockRejectedValue(new Error('signIn error'));
		const component = render(<RegisterEmail />);

		const submitButton = screen.getByText('Signup');
		fireEvent.click(submitButton);

		setTimeout(() => {
			expect(signIn).toHaveBeenCalled();
			expect(component).toMatchSnapshot();
			done();
		}, 300);
	});
});
