const router = require("express").Router();
const leadController = require("../../controllers/leadController");

router
    .route("/")
    .post(leadController.create)
    .get(leadController.findAll);

router
    .route("/:email")
    .delete(leadController.deleteOne);

module.exports = router;