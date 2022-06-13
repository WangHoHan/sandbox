import { FC } from 'react';
import Image from 'next/image';
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
} from './Pokemon.styled';
import { useTranslation } from 'next-i18next';

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
  species = '',
  abilities = [],
  evolvesFrom = '',
  evolvesInto = '',
  weight = '?',
  height = '?',
}) => {
  const { t } = useTranslation();

  return (
    <PokemonStyled key={index}>
      <Image alt={image.title} src={image.url} width={image.width} height={image.height} />
      <Info>
        <Name>{name}</Name>
        <Generation>
          <Key>{t('pokemon.generation')}</Key> {generation}
        </Generation>
        <Key>{t('pokemon.types')}:</Key>
        <Types>
          {types.map((type) => (
            <Type key={type}>{type}</Type>
          ))}
        </Types>
        <Species>
          <Key>{t('pokemon.species')}:</Key> {species}
        </Species>
        <Key>{t('pokemon.abilities')}:</Key>
        <Abilities>
          {abilities.map((ability) => (
            <Ability key={ability}>{ability}</Ability>
          ))}
        </Abilities>
        <Key>{t('pokemon.index')}:</Key>
        <Index>{index}</Index>
        <Key>{t('pokemon.evolves')}:</Key>
        <EvolvesFrom>
          <Key>{t('pokemon.from')}:</Key> {evolvesFrom}
        </EvolvesFrom>
        <EvolvesInto>
          <Key>{t('pokemon.index')}:</Key> {evolvesInto}
        </EvolvesInto>
        <Key>{t('pokemon.weight')}:</Key>
        <Weight>{weight}</Weight>
        <Key>{t('pokemon.height')}:</Key>
        <Height>{height}</Height>
      </Info>
    </PokemonStyled>
  );
};

export default Pokemon;
