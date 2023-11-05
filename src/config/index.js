const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

export const CONFIG = {
	NEXT_AUTH: {
		GOOGLE: {
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
		},
	},
};
