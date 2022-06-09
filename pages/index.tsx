import type { NextPage } from "next";
import { client } from "./_app";
import { POKEMONS_QUERY } from "../graphql/queries/pokemons";

export async function getStaticProps() {
  const { data } = await client.query({ query: POKEMONS_QUERY });

  return {
    props: {
      data,
    },
  };
}

const Home: NextPage = (props) => {
  return (
    <>
      {props["data"].pokemonCollection.items.map((pokemon) => {
        return <div key={pokemon.index}>{pokemon.name}</div>;
      })}
    </>
  );
};

export default Home;
