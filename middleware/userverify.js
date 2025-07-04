const jwt = require('jsonwebtoken')
function userverify(req, res, next) {
    const token = req.headers['authorization']
    if (!token) {
        return res.status(401).send('Access denied. No token provided.')
    }
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verified
        next()
    } catch (err) {
        res.status(400).json({ message : 'invalid token'})
    }}
    module.exports = userverify
