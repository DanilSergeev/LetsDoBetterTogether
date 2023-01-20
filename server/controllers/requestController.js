const ApiError = require("../error/ApiError")
const {Request} = require("../models/models")
const uuid = require("uuid")
const path = require("path");

class requestController {
    async createRequest(req, res, next) {
        try {
            const {title, description, category } = req.body
            const {file} = req.files
            if(!file){
                return next(ApiError.badRequest("Изображение не передано"))
            }
            const fileName = uuid.v4() + ".jpg"
            file.mv(path.resolve(__dirname, "..", "static", fileName))
            if(!title|| !description || !category){
                return next(ApiError.badRequest("Не все поля введины"))
            }
            const reque =  await Request.create({title, description, category, file: fileName})
            return res.json({reque})
        } catch (e) {
            next(ApiError.badRequest(e.messge))
        }
    }


    async getOneRequest(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                return next(ApiError.badRequest("id не передан"))
            }
            const reque =  await Request.findOne({where: {id: id}})
            return res.json({reque})
        } catch (e) {
            next(ApiError.badRequest(e.messge))
        }
    }



    async getAllRequest(req, res, next) {
        try {
            const reque =  await Request.findAll({where:id})
            return res.json({reque})
        } catch (e) {
            next(ApiError.badRequest(e.messge))
        }
    }


    async updateRequest(req, res, next) {
        try {
            const {title} = req.body
            if(!title){
                return next(ApiError.badRequest("Поле title не введено"))
            }
            const { id } = req.params;
            if (!id) {
                return next(ApiError.badRequest("id не передан"))
            }
            const reque =  await Request.update({title: title},{where:{id: id}})
            return res.json({message:"Поля обновлены"})
        } catch (e) {
            next(ApiError.badRequest(e.messge))
        }
    }


    async deleteRequest(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                return next(ApiError.badRequest("id не передан"))
            }
            const reque =  await Request.destroy({where: {id:id}})
            if(reque === 0){
                return next(ApiError.badRequest("Не существует"))
            }
            return res.json({message: "Удален"})
        } catch (e) {
            next(ApiError.badRequest(e.messge))
        }
    }
}
module.exports = new requestController()