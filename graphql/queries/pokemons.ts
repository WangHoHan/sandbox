import { gql } from "@apollo/client";

export const POKEMONS_QUERY = gql`
  query Pokemons($locale: String!) {
    pokemonCollection(locale: $locale) {
      items {
        image {
          title
          url
          width
          height
        }
        name
        generation
        types
        species
        abilities
        index
        evolvesFrom
        evolvesInto
        weight
        height
      }
    }
  }
`;
