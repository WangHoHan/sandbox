import type { NextPage } from "next";
import { client } from "./_app";
import { POKEMONS_QUERY } from "../graphql/queries/pokemons";
import Pokemon, { PokemonProps } from "../components/Pokemon/Pokemon";
import styled from "@emotion/styled";

export const getStaticProps = async ({ locale }) => {
  const { data } = await client.query({
    query: POKEMONS_QUERY,
    variables: { locale },
  });

  const pokemons: PokemonProps[] = data.pokemonCollection.items;

  return {
    props: {
      pokemons,
    },
  };
};

const Home: NextPage<{ pokemons: PokemonProps[] }> = ({ pokemons }) => {
  return (
    <HomeStyled>
      <Pokemons>
        {pokemons.map(
          ({
            index,
            image,
            name,
            generation,
            types,
            species,
            abilities,
            evolvesFrom,
            evolvesInto,
            weight,
            height,
          }) => {
            return (
              <Pokemon
                key={index}
                index={index}
                image={image}
                name={name}
                generation={generation}
                types={types}
                species={species}
                abilities={abilities}
                evolvesFrom={evolvesFrom}
                evolvesInto={evolvesInto}
                weight={weight}
                height={height}
              />
            );
          }
        )}
      </Pokemons>
    </HomeStyled>
  );
};

export const HomeStyled = styled.div``;

export const Pokemons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default Home;
