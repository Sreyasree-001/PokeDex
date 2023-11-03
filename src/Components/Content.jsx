import React, { useState, useEffect } from "react";
import { colorArr } from "../../colors";
import Card from "./Card";
export const Content = () => {
  const url = `https://raw.githubusercontent.com/reezayn/pokemon-data.json/master/pokedex.json`;
  const [pokemonData, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  

  // const styles = {
  //   backgroundImage: `linear-gradient(${
  //     colorArr[pokemon.type[0].toLowerCase().toString() + "-light"]
  //   }, ${colorArr[pokemon.type[0].toLowerCase()]})`,
  // };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        {pokemonData.map((pokemon, index) => (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            type={pokemon.type[0]}
            name={pokemon.name.english}
            jname={pokemon.name.japanese}
            image={pokemon.image.sprite}
            description={pokemon.description}
            height={pokemon.profile.height}
            weight={pokemon.profile.weight}
            style={{
              backgroundImage: `linear-gradient(${
                colorArr[pokemon.type[0].toLowerCase().toString() + "-light"]
              }, ${colorArr[pokemon.type[0].toLowerCase()]})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
