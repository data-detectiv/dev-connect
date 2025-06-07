const User = require('../models/user');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required'});
    const duplicate = await User.findOne({ username: user}).exec();
    if (duplicate) return res.sendStatus(409);
    try {
        const hashedPwd = await bcrypt.hash(pwd, 10)
        const roles = await User.roles;
        const newUser = await User.create({
            username: user,
            password: hashedPwd,
            roles: roles,
        });
        res.status(201).json(newUser);

    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

module.exports = { handleNewUser };