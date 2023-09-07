const { Router } = require("express");
const { allPokemons, pokemonsByName, pokemonsBySpecie } = require("../controllers/pokemons.controllers");
const router = Router();

router.get("/", allPokemons);

router.get("/:name", pokemonsByName);

router.get("/pokemon-species/:specie", pokemonsBySpecie);

module.exports = router;
