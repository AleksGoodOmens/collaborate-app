import jsonWebToken from 'jsonwebtoken';

export const checkAuth = (req, res, next) => {
	console.log(req.headers);
	const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

	if (token) {
		try {
			const decoded = jsonWebToken.verify(token, process.env.JWT_SECRET);

			req.userId = decoded.id;
			next();
		} catch (error) {
			res.json({ message: 'no access' });
		}
	} else return res.json({ message: 'no access' });
};
