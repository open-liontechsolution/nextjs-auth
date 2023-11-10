const getAppsMock = jest.fn();
const getAppMock = jest.fn();
const initializeAppMock = jest.fn();

export const getApps = () => getAppsMock;
export const getApp = () => getAppMock;
export const initializeApp = () => initializeAppMock;
