const ApiError = require("../error/ApiError")
const {Status} = require("../models/models")

class statusController {
    async createStatus(req, res, next) {
        try {
            const { titleStatus } = req.body
            if(!titleStatus){
                return next(ApiError.badRequest("Не все поля введины"))
            }
            const status =  await Status.create({titleStatus})
            return res.json({status})
        } catch (e) {
            next(ApiError.badRequest(e.messge))
        }
    }

    async getAllCategorys(req, res, next) {
        try {
            const status =  await Status.findAll()
            console.log(123)
            return res.json({status})
        } catch (e) {
            next(ApiError.badRequest(e.messge))
        }
    }

    async getOneStatus(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                return next(ApiError.badRequest("id не передан"))
            }
            const status = await Status.findOne({ where: { id: id } })
            return res.json({ status })
        } catch (e) {
            next(ApiError.badRequest(e.messge))
        }
    }



}
module.exports = new statusController()