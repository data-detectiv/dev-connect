const User = require('../models/user');
const jwt = require('jsonwebtoken');


const handleLogout = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);

    const refreshToken = cookies.jwt;

    const foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true});
        return res.sendStatus(204);
    };

    foundUser.refreshToken = "";
    await foundUser.save();
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true});
    res.sendStatus(204);
};

module.exports = { handleLogout };