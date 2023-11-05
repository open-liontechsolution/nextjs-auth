import { render } from '@testing-library/react';
import Header from '../../../../src/components/Header/Header';
import { getServerSession } from 'next-auth';
import { userSessionMock } from '../../../../__mocks__/data/userSession';

describe('Header', () => {
	it('should match snapshot when user is logged in', async () => {
		getServerSession.mockReturnValue(userSessionMock);

		const component = render(await Header());
		expect(component).toMatchSnapshot();
	});

	it('should match snapshot when user is NOT logged in', async () => {
		getServerSession.mockReturnValue(null);

		const component = render(await Header());
		expect(component).toMatchSnapshot();
	});

	it('should fail on getServerSession', async () => {
		getServerSession.mockRejectedValue(new Error('getServerSession error'));

		const component = render(await Header());
		expect(component).toMatchSnapshot();
	});
});
