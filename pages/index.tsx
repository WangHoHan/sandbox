import type { NextPage } from "next";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  });

  const res = await client.getEntries({ content_type: "pokemon" });

  return {
    props: {
      pokemons: res.items,
    },
  };
}

const Home: NextPage = (props) => {
  console.log(props["pokemons"][0]);

  return (
    <>
      {props["pokemons"].map((pokemon) => {
        return <div key={pokemon.fields.index}>{pokemon.fields.name}</div>;
      })}
    </>
  );
};

export default Home;
