const { Request, Categorys, Status } = require("../models/models")
const uuid = require("uuid")
const path = require("path");
const ApiError = require("../error/ApiError")

class requestController {
    async createRequest(req, res, next) {
        try {
            let { title, description, CategorysId, StatusId } = req.body
            let { file } = req.files
            if (!file) {
                return next(ApiError.badRequest("Изображение не передано"))
            }
            let fileName = uuid.v4() + ".jpg"
            file.mv(path.resolve(__dirname, "..", "static", fileName))
            if (!title || !description || !CategorysId || !StatusId) {
                return next(ApiError.badRequest("Не все поля введины"))
            }
            
            const reque = await Request.create({ title, description, CategorysId, StatusId, file: fileName })


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
            let { CategorysId, StatusId } = req.body
            if(!CategorysId || !StatusId){
                return next(ApiError.badRequest("Не все поля переданы"))
            }

            let { fileAftar } = req.files
            if (!fileAftar) {
                return next(ApiError.badRequest("Изображение не передано"))
            }
            let fileName = uuid.v4() + ".jpg"
            fileAftar.mv(path.resolve(__dirname, "..", "static", fileName))
        
            await Request.update({ CategorysId:CategorysId, StatusId:StatusId, fileAftar: fileName }, { where: { id: id } })
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