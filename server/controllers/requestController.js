const { Request, Categorys, Status } = require("../models/models")
const uuid = require("uuid")
const path = require("path");
const ApiError = require("../error/ApiError")

class requestController {
    async createRequest(req, res, next) {
        try {
            let { title, description, CategorysId, StatusId, userId } = req.body
            let { file } = req.files
            if (!file) {
                return next(ApiError.badRequest("Изображение не передано"))
            }
            let fileName = uuid.v4() + ".jpg"
            file.mv(path.resolve(__dirname, "..", "static", fileName))
            if (!title || !description || !CategorysId || !StatusId || !userId) {
                return next(ApiError.badRequest("Не все поля введины"))
            }
            
            const reque = await Request.create({ title, description, CategorysId, StatusId, file: fileName, userId })


            return res.json({ reque })
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
            const reque = await Request.findOne({ where: { id: id } })
            return res.json({ reque })
        } catch (e) {
            next(ApiError.badRequest(e.messge))
        }
    }



    async getAllRequest(req, res, next) {
        try {
            const reque = await Request.findAll()
            return res.json({ reque })
        } catch (e) {
            next(ApiError.badRequest(e.messge))
        }
    }


    async updateRequest(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                return next(ApiError.badRequest("id не передан"))
            }
            let {  StatusId } = req.body
            if(!StatusId ){
                return next(ApiError.badRequest("Не все поля переданы"))
            }
            
            if(req.files){
                var { fileAftar } = req.files
            }
            if(!fileAftar){
                await Request.update({ StatusId:StatusId }, { where: { id: id } })
            }else{
                let fileName = uuid.v4() + ".jpg"
                fileAftar.mv(path.resolve(__dirname, "..", "static", fileName))
                await Request.update({ StatusId:StatusId, fileAftar: fileName }, { where: { id: id } })
            }
            // if (!fileAftar) {
            //     return next(ApiError.badRequest("Изображение не передано"))
            // }
            return res.json({ message: "Поля обновлены" })
        } catch (e) {
            next(ApiError.badRequest(e))
        }
    }


    async deleteRequest(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                return next(ApiError.badRequest("id не передан"))
            }
            const reque = await Request.destroy({ where: { id: id } })
            if (reque === 0) {
                return next(ApiError.badRequest("Не существует"))
            }
            return res.json({ message: "Удален" })
        } catch (e) {
            next(ApiError.badRequest(e.messge))
        }
    }
}
module.exports = new requestController()