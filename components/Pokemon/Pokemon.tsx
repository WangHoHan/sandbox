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
import Link from 'next/link';
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
  const { t } = useTranslation(['common', 'hello']);

  return (
    <PokemonStyled key={index}>
      <Link href="/hello/1">{t('hello:hello')}</Link>
      <Image alt={image.title} src={image.url} width={320} height={320} />
      <Info>
        <Name>{name}</Name>
        <Generation>
          <Key>{t('common:pokemon.generation')}</Key> {generation}
        </Generation>
        <Key>{t('common:pokemon.types')}:</Key>
        <Types>
          {types.map((type) => (
            <Type key={type}>{type}</Type>
          ))}
        </Types>
        <Species>
          <Key>{t('common:pokemon.species')}:</Key> {species}
        </Species>
        <Key>{t('common:pokemon.abilities')}:</Key>
        <Abilities>
          {abilities.map((ability) => (
            <Ability key={ability}>{ability}</Ability>
          ))}
        </Abilities>
        <Key>{t('common:pokemon.index')}:</Key>
        <Index>{index}</Index>
        <Key>{t('common:pokemon.evolves')}:</Key>
        <EvolvesFrom>
          <Key>{t('common:pokemon.from')}:</Key> {evolvesFrom}
        </EvolvesFrom>
        <EvolvesInto>
          <Key>{t('common:pokemon.into')}:</Key> {evolvesInto}
        </EvolvesInto>
        <Key>{t('common:pokemon.weight')}:</Key>
        <Weight>{weight}</Weight>
        <Key>{t('common:pokemon.height')}:</Key>
        <Height>{height}</Height>
      </Info>
    </PokemonStyled>
  );
};

export default Pokemon;
