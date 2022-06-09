import type { NextPage } from "next";
import { client } from "./_app";
import { POKEMONS_QUERY } from "../graphql/queries/pokemons";

export const getStaticProps = async ({ locale }) => {
  const { data } = await client.query({
    query: POKEMONS_QUERY,
    variables: { locale },
  });

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
                {pokemon.types.map((type) => (
                  <Type key={type}>{type}</Type>
                ))}
              </Types>
              <Species>{pokemon.species}</Species>
              <Abilities>
                {pokemon.abilities.map((ability) => {
                  <Ability key={ability}>{ability}</Ability>;
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

import styled from "@emotion/styled";

const HomeStyled = styled.div``;

const Pokemons = styled.div``;

const Pokemon = styled.div``;

const Name = styled.span``;

const Generation = styled.span``;

const Types = styled.div``;

const Type = styled.span``;

const Species = styled.span``;

const Abilities = styled.div``;

const Ability = styled.span``;

const Index = styled.span``;

const EvolvesFrom = styled.span``;

const EvolvesInto = styled.span``;

const Weight = styled.span``;

const Height = styled.span``;

export default Home;
