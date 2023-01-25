const ApiError = require("../error/ApiError")
const { Users } = require("../models/models")
const bcrypt = require("bcrypt")
const jwtoken = require("jsonwebtoken")

const generateJWT = (id, name, email, role) => {
    return jwtoken.sign({ id, name, email, role }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' })
}

class UserController {
    async register(req, res, next) {
        try {
            const { name, email, password, role } = req.body
            if (!name || !email || !password) {
                return next(ApiError.badRequest("Не все поля введины"))
            }
            const candidate = await Users.findOne({ where: { email } })
            if (candidate) {
                return next(ApiError.badRequest("Пользователь существует"))
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const user = await Users.create({ name, email, password: hashPassword, role })



            const jwt = generateJWT( user.id, user.name, user.email, user.role )



            return res.json({ jwt })
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }





    async login(req, res, next) {
        try {
            const { email, password } = req.body
            if ( !email || !password) {
                return next(ApiError.badRequest("Не все поля введины"))
            }
            const user = await Users.findOne({ where: { email } })
            if (!user) {
                return next(ApiError.badRequest("Логин не верный"))
            }
            let comparePassword = bcrypt.compareSync(password, user.password)
            if (!comparePassword) {
                return next(ApiError.badRequest("Указан неверный пароль"))
            }
            const jwt = generateJWT( user.id, user.name, user.email, user.role )


            return res.json({ jwt })
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }



    async auth(req, res, next) {
        const token = generateJWT(req.user.id, req.user.name, req.user.email, req.user.role)
        return res.json({token})
    }
}
module.exports = new UserController()