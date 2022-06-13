import styled from '@emotion/styled';

export const PokemonStyled = styled.div`
  align-items: center;
  background-color: lightyellow;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Info = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const Name = styled.span`
  font-weight: bolder;
`;

export const Generation = styled.span``;

export const Types = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const Type = styled.span`
  background-color: yellow;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const Species = styled.span``;

export const Abilities = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const Ability = styled.span`
  background-color: purple;
  color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const Index = styled.span`
  color: red;
`;

export const EvolvesFrom = styled.span``;

export const EvolvesInto = styled.span``;

export const Weight = styled.span``;

export const Height = styled.span``;

export const Key = styled.span`
  font-weight: bolder;
`;
