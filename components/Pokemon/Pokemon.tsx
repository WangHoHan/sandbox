import { FC } from "react";
import Image from "next/image";
import {
  Abilities,
  Ability,
  EvolvesFrom,
  EvolvesInto,
  Generation,
  Height,
  Index,
  Info,
  Key,
  Name,
  PokemonStyled,
  Species,
  Type,
  Types,
  Weight,
} from "./Pokemon.styled";
import { FormattedMessage } from "react-intl";

export interface ImageProps {
  title: string;
  url: string;
  width: string;
  height: string;
}

export interface PokemonProps {
  image: ImageProps;
  index: string;
  name: string;
  generation: string;
  types?: string[];
  species?: string;
  abilities?: string[];
  evolvesFrom?: string;
  evolvesInto?: string;
  weight?: string;
  height?: string;
}

const Pokemon: FC<PokemonProps> = ({
  image,
  index,
  name,
  generation,
  types = [],
  species = "",
  abilities = [],
  evolvesFrom = "",
  evolvesInto = "",
  weight = "?",
  height = "?",
}) => {
  return (
    <PokemonStyled key={index}>
      <Image
        alt={image.title}
        src={image.url}
        width={image.width}
        height={image.height}
      />
      <Info>
        <Name>{name}</Name>
        <Generation>
          <Key>
            <FormattedMessage id="pokemon.generation" /> {generation}{" "}
          </Key>
        </Generation>
        <Key>
          <FormattedMessage id="pokemon.types" />:
        </Key>
        <Types>
          {types.map((type) => (
            <Type key={type}>{type}</Type>
          ))}
        </Types>
        <Species>
          <Key>
            <FormattedMessage id="pokemon.species" />:
          </Key>{" "}
          {species}
        </Species>
        <Key>
          <FormattedMessage id="pokemon.abilities" />:
        </Key>
        <Abilities>
          {abilities.map((ability) => (
            <Ability key={ability}>{ability}</Ability>
          ))}
        </Abilities>
        <Key>
          <FormattedMessage id="pokemon.index" />:
        </Key>
        <Index>{index}</Index>
        <Key>
          <FormattedMessage id="pokemon.evolves" />:
        </Key>
        <EvolvesFrom>
          <Key>
            <FormattedMessage id="pokemon.from" />:
          </Key>{" "}
          {evolvesFrom}
        </EvolvesFrom>
        <EvolvesInto>
          <Key>
            <FormattedMessage id="pokemon.into" />:
          </Key>{" "}
          {evolvesInto}
        </EvolvesInto>
        <Key>
          <FormattedMessage id="pokemon.weight" />:
        </Key>
        <Weight>{weight}</Weight>
        <Key>
          <FormattedMessage id="pokemon.height" />:
        </Key>
        <Height>{height}</Height>
      </Info>
    </PokemonStyled>
  );
};

export default Pokemon;
