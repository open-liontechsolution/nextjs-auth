import { render } from '@testing-library/react';
import AuthForm from '../../../../src/components/AuthForm/AuthForm';

describe('AuthForm', () => {
	it('should match snapshot for login', () => {
		const component = render(<AuthForm title="Login" />);
		expect(component).toMatchSnapshot();
	});
});
