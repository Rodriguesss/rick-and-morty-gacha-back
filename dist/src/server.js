import app from "./app.js";
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Rodando a porta: " + port);
});
