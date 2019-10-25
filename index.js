const express = require("express");

// Init App
var app = express();

const router = express.Router();

router.get("/", (req, res) => {
	res.send("Rinckus");
});

app.use("/", router);

app.set("port", process.env.PORT || 80);

app.listen(app.get("port"), function() {
	console.log("Server started on port " + app.get("port"));
});
