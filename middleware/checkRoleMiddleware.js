const jwt = require("jsonwebtoken");

module.exports = function (role) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[0]// Bearer
            if (!token) {
                return res.status(401).json({ message: "Не авторизован" })
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
            req.user = decoded

            if(decoded.role !== role){
                return res.status(403).json({ message: "Нет доступа" })
            }
            next();
        } catch (e) {
            return res.status(401).json({ message: "Не авторизован" })
        }
    }
}