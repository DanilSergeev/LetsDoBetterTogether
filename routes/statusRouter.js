const Router = require("express")
const router = new Router
const statusController = require("../controllers/statusController")
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware")


router.post("/", checkRoleMiddleware("ADMIN"), statusController.createStatus)
router.get("/", statusController.getAllCategorys)
router.get("/:id", statusController.getOneStatus)

module.exports = router