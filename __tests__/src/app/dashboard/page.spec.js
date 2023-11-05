import { render } from '@testing-library/react';
import Dashboard from '../../../../src/app/dashboard/page';
import { getServerSession } from 'next-auth';
import { userSessionMock } from '../../../../__mocks__/data/userSession';
import { redirect } from 'next/navigation';

describe('Dashboard', () => {
	beforeEach(() => {
		redirect.mockReset();
	});
	it('should render page when user is logged in', async () => {
		getServerSession.mockReturnValueOnce(userSessionMock);
		const component = render(await Dashboard());
		expect(component).toMatchSnapshot();
	});

	it('should redirect to home when user is NOT logged in', async () => {
		getServerSession.mockReturnValueOnce(null);
		const component = render(await Dashboard());
		expect(redirect).toHaveBeenCalledTimes(1);
		expect(component).toMatchSnapshot();
	});

	it('should fail on getServerSession', async () => {
		getServerSession.mockRejectedValue(new Error('getServerSession error'));

		const component = render(await Dashboard());
		expect(component).toMatchSnapshot();
	});
});
