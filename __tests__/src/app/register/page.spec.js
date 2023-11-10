import { render } from '@testing-library/react';
import Register from '../../../../src/app/register/page';

describe('Register', () => {
	it('should match snapshot', () => {
		const component = render(<Register />);
		expect(component).toMatchSnapshot();
	});
});
