import { render } from '@testing-library/react';
import Home from '../../../src/app/page';

describe('App Page', () => {
	it('should match snapshot', () => {
		const component = render(<Home />);
		expect(component).toMatchSnapshot();
	});
});
