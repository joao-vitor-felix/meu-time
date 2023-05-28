import styled from "styled-components";

export const HeadingContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  flex-direction: column;
  margin-top: 5rem;
`;

export const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NameSeasonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 10rem;
  height: 10rem;
`;

export const Name = styled.h1`
  font-size: 3rem;
`;

export const Season = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;
