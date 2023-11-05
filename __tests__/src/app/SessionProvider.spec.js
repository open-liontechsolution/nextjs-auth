import { render } from '@testing-library/react';
import { userSessionMock } from '../../../__mocks__/data/userSession';
import SessionProvider from '../../../src/app/SessionProvider';

describe('SessionProvider', () => {
	it('should match snapshot', () => {
		const component = render(
			<SessionProvider session={userSessionMock}>
				Session children mock
			</SessionProvider>,
		);
		expect(component).toMatchSnapshot();
	});
});
