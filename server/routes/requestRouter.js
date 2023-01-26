const Router = require("express")
const router = new Router
const requestController = require("../controllers/requestController")
const authMiddleware = require("../middleware/authMiddleware")
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware")


router.post("/", authMiddleware, requestController.createRequest)
router.get("/", requestController.getAllRequest)
router.get("/:id", requestController.getOneRequest)
router.put("/:id", checkRoleMiddleware("ADMIN"),  requestController.updateRequest)
router.delete("/:id", authMiddleware, requestController.deleteRequest)

module.exports = router