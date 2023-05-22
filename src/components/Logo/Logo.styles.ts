import styled from "styled-components";
import { GiSoccerBall } from "react-icons/gi";

export const Icon = styled(GiSoccerBall)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 4rem;
`;

export const Container = styled.div`
  display: flex;
  gap: 0.4rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;
