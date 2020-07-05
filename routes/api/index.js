const router = require("express").Router();
const leadsRoute = require("./leads");

router.use("/leads", leadsRoute);

module.exports = router;