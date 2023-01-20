const Router = require("express")
const router = new Router
const categoryController = require("../controllers/categoryController")
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware")


router.post("/", checkRoleMiddleware("ADMIN"), categoryController.createCategorys)
router.get("/", categoryController.getAllCategorys)
router.delete("/:id", checkRoleMiddleware("ADMIN"), categoryController.deleteCategorys)

module.exports = router