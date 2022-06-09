import type { NextPage } from "next";
import { client } from "./_app";
import { POKEMONS_QUERY } from "../graphql/queries/pokemons";
import {
  HomeStyled,
  Pokemons,
  Pokemon,
  Name,
  Generation,
  Types,
  Type,
  Species,
  Abilities,
  Ability,
  Index,
  EvolvesFrom,
  EvolvesInto,
  Weight,
  Height,
} from "./index.styled";

export const getStaticProps = async () => {
  const { data } = await client.query({ query: POKEMONS_QUERY });

  return {
    props: {
      data,
    },
  };
};

const Home: NextPage = (props) => {

  return (
    <HomeStyled>
      <Pokemons>
        {props["data"].pokemonCollection.items.map((pokemon) => {
          return (
            <Pokemon key={pokemon.index}>
              <Name>{pokemon.name}</Name>
              <Generation></Generation>
              <Types>
                {pokemon.types.map(type => (
                  <Type key={type}>{type}</Type>
                ))}
              </Types>
              <Species>{pokemon.species}</Species>
              <Abilities>
                {pokemon.abilities.map(ability => {
                  <Ability key={ability}>{ability}</Ability>
                })}
              </Abilities>
              <Index>{pokemon.index}</Index>
              <EvolvesFrom>{pokemon.evolvesFrom}</EvolvesFrom>
              <EvolvesInto>{pokemon.evolvesInto}</EvolvesInto>
              <Weight>{pokemon.weight}</Weight>
              <Height>{pokemon.height}</Height>
            </Pokemon>
          );
        })}
      </Pokemons>
    </HomeStyled>
  );
};

export default Home;
