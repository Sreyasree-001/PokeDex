import React, { useState, useEffect } from "react";
import { colorArr } from "../../colors";
import Card from "./Card";
export const Content = ({ item }) => {
  const url = "https://raw.githubusercontent.com/reezayn/pokemon-data.json/master/pokedex.json?"
  const [pokemonData, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const recordsPerPage = 20;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  /*let records = pokemonData.slice(firstIndex, lastIndex)*/
  const npage = Math.ceil(pokemonData.length / recordsPerPage)
  /*const numbers = [...Array(npage + 1).keys()].slice(1)*/

  const prePage = () => {
    if (currentPage !== 1) {
      return setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      return setCurrentPage(currentPage + 1)
    }
  }


  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" >
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
      
        {
          pokemonData.filter((pokemon) => {
            if (item == "") {
              return pokemon;
            }
            else if (pokemon.name.english.toLowerCase().includes(item)) {
              return pokemon;
            }
          }).slice(firstIndex, lastIndex)
            .map((pokemon, index) => {
              return (
                <Card
                  key={index}
                  id={pokemon.id}
                  type={pokemon.type[0]}
                  name={pokemon.name.english}
                  jname={pokemon.name.japanese}
                  image={pokemon.image.hires}
                  description={pokemon.description}
                  height={pokemon.profile.height}
                  weight={pokemon.profile.weight}
                  style={{
                    backgroundImage: `linear-gradient(${colorArr[pokemon.type[0].toLowerCase().toString() + "-light"]
                      }, ${colorArr[pokemon.type[0].toLowerCase()]})`,
                  }}
                />
              )
            })
        }
        
      </div>
      <div className="px-2 w-32 h-8 flex flex-row m-auto mr-24 font-serif text-red-950 font-medium">
        <button className="mr-5 bg-red-200 px-2 rounded-md  hover:bg-red-900" id="btn">
          <a href="#" onClick={prePage} >Prev</a>
        </button>
        <div className="flex flex-row mr-5 mt-1 font-sans">
          <div>{currentPage} </div>
          <p className="mx-2">of</p>
          <div>{npage}</div>
        </div>
        <button className="bg-red-200 px-2 rounded-md hover:bg-red-900">
          <a href="#" onClick={nextPage} >
            Next</a>
        </button>
      </div>
    </div>
  );
};
