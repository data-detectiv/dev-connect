const User = require('../models/user');
const jwt = require('jsonwebtoken');

const handleRefresh = async (req, res) => {
    const cookies = res.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    
    const foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser) return res.sendStatus(403);

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || foundUser.username !== decoded.username) return res.sendStatus(403);
            const roles = Object.values(foundUser.roles)
            const accessToken = jwt.sign(
                {
                    UserInfo: {
                        username: decoded.username,
                        roles: roles
                    }
                },
                process.env.ACCESS_TOKEN_SRCRET,
                { expiresIn: '1d'}
            );
            res.json({accessToken});
        }
    )

};

module.exports = {handleRefresh};