const getAuthMock = jest.fn();
const GoogleAuthProviderMock = jest.fn();
export const getAuth = () => getAuthMock();
export const GoogleAuthProvider = GoogleAuthProviderMock;
