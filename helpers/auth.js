const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const constants = require('../config/config')
exports.login = async (req, res, next) => {
	const { email, password } = req.body;
	// decrypting an encrypted password
	const foundUser = await User.findOne({ email: email, password: password });
	if (!foundUser) return res.status(400).json({ "error": "NOT found ruh roh" })
	const token = jwt.sign(
		{ userId: foundUser._id },
		constants.api.jwtSecret
	);
	res.status(200).json({ user: foundUser, token })
}

exports.authenticate = async (req, res, next) => {
	try {
		// console.log(req.headers);
		const { token } = req.headers;
		// const token = req.headers.token; same as above 
		const decoded = await jwt.verify(token, constants.api.jwtSecret);
		if (!decoded) throw new Error("ruh roh")
		req.body.userId = decoded.userId;
		next();
	} catch (e) {
		return res.status(400).json({ error: e.message })
	}
}

exports.signup = async (req, res, next) => {
	const { name, email, password } = req.body;
	const foundUser = await User.findOne(req.body); // <== User.findOne is a Promise 
	if (foundUser) return res.status(400);
	const newUser = await new User({ name, email, password }).save();
	return res.status(200).json(newUser);
}