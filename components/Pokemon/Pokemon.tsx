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
          <Key>Generation {generation} </Key>
        </Generation>
        <Key>Type(s):</Key>
        <Types>
          {types.map((type) => (
            <Type key={type}>{type}</Type>
          ))}
        </Types>
        <Species>
          <Key>Species:</Key> {species}
        </Species>
        <Key>Abilities:</Key>
        <Abilities>
          {abilities.map((ability) => (
            <Ability key={ability}>{ability}</Ability>
          ))}
        </Abilities>
        <Key>Index:</Key>
        <Index>{index}</Index>
        <Key>Evolves:</Key>
        <EvolvesFrom>
          <Key>from:</Key> {evolvesFrom}
        </EvolvesFrom>
        <EvolvesInto>
          <Key>into:</Key> {evolvesInto}
        </EvolvesInto>
        <Key>Weight:</Key>
        <Weight>{weight}</Weight>
        <Key>Height:</Key>
        <Height>{height}</Height>
      </Info>
    </PokemonStyled>
  );
};

export default Pokemon;
