const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;
module.exports.secret = secret;
module.exports = {
    authenticate: async (req, res, next) => {
        const token = req.header("auth-token");
        if (!token) {
            res.status(401).send({ errors: "Please authenticate using a valid token" });
        }
        try {
            const data = jwt.verify(token, secret);
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({ errors: "Please authenticate using a valid token" });
        }
    }
}