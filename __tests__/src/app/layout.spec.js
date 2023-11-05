import { render } from '@testing-library/react';
import RootLayout from '../../../src/app/layout';
import { getServerSession } from 'next-auth';
import { userSessionMock } from '../../../__mocks__/data/userSession';
import { Inter } from 'next/font/google';

describe('App Layout', () => {
	beforeEach(() => {
		Inter.mockReset();
	});
	it('should render layout for logged user', async () => {
		getServerSession.mockReturnValue(userSessionMock);
		const component = render(
			await RootLayout({ children: 'childrenMock' }),
		);
		expect(component).toMatchSnapshot();
	});

	it('should render layout for NOT logged user', async () => {
		getServerSession.mockReturnValue(null);
		const component = render(
			await RootLayout({ children: 'childrenMock' }),
		);
		expect(component).toMatchSnapshot();
	});

	it('should fail on getServerSession', async () => {
		getServerSession.mockRejectedValue(new Error('getServerSession error'));

		const component = render(
			await RootLayout({ children: 'childrenMock' }),
		);
		expect(component).toMatchSnapshot();
	});

	it('should render layout without children', async () => {
		getServerSession.mockReturnValue(userSessionMock);
		const component = render(await RootLayout({ children: null }));
		expect(component).toMatchSnapshot();
	});
});
