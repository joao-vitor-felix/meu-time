import styled from "styled-components";
import { GiSoccerBall } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Icon = styled(GiSoccerBall)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 4rem;
`;

export const Container = styled(Link)`
  display: flex;
  gap: 0.4rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;
