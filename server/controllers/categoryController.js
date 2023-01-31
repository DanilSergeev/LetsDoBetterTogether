const ApiError = require("../error/ApiError")
const {Categorys} = require("../models/models")

class categorysController {
    async createCategorys(req, res, next) {
        try {
            const {title } = req.body
            if(!title){
                return next(ApiError.badRequest("Не все поля введины"))
            }
            const category =  await Categorys.create({title})
            return res.json({category})
        } catch (e) {
            next(ApiError.badRequest(e.messge))
        }
    }


    async getAllCategorys(req, res, next) {
        try {
            const category =  await Categorys.findAll()
            return res.json({category})
        } catch (e) {
            next(ApiError.badRequest(e.messge))
        }
    }


    async deleteCategorys(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                return next(ApiError.badRequest("id не передан"))
            }
            const category =  await Categorys.destroy({where: {id:id}})
            if(category === 0){
                return next(ApiError.badRequest("Не существует"))
            }
            return res.json({message: "Удален"})
        } catch (e) {
            next(ApiError.badRequest(e.messge))
        }
    }
}
module.exports = new categorysController()