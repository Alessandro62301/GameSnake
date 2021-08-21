const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/Teste").then(() => {
    console.log("MongoDb conectado")
}).catch((err) => {
    console.log("Houve um erro ao se conectar"+ err);
})