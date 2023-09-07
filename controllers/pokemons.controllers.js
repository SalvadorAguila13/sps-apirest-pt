const { request, response } = require("express");
const apiRoute = require("../helpers/apiRoute");

const allPokemons = async (req = request, res = response) => {
  const route = "pokemon";
  apiRoute(route, res);
};

const pokemonsByName = async (req = request, res = response) => {
  const name = req.params.name;
  const route = `pokemon/${name}`;
  apiRoute(route, res);
};

const pokemonsBySpecie = async (req = request, res = response) => {
  const specie = req.params.specie;
  const route = `pokemon-species/${specie}`;
  apiRoute(route, res);
};

module.exports = {
  allPokemons,
  pokemonsByName,
  pokemonsBySpecie,
};
