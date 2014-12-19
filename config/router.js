var router = require("express").Router();

router.all("/*", App.require("app/middleware/versionSetter"));

router.get("/heartbeat", App.require("app/controllers/heartbeatController").index);

router.get("/testroute", function(req, res) {
    res.send("This is the testroute page!");
});

module.exports = router;