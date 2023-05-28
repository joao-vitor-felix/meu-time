import styled from "styled-components";
import { Item } from "../SelectCountry/SelectCountry.styles";

type ItemProps = {
  season: number;
};

export const Wrapper = styled.div<ItemProps>`
  cursor: ${({ season }) =>
    season && season.toString().length === 4 ? "pointer" : "not-allowed"};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 11%;
`;

export const LeagueLogo = styled(Item)<ItemProps>`
  pointer-events: ${({ season }) =>
    season && season.toString().length === 4 ? "all" : "none"};

  @media screen and (max-width: 768px) {
    width: 20%;
  }
`;
