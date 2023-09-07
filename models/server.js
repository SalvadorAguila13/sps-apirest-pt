const express = require("express");
require("dotenv").config();
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Directorio publico
    this.app.use(express.static("public"));
    // cors
    this.app.use(cors());
    // Req
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/api/pokemons", require("../routes/pokemons.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`ejecutando en http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
