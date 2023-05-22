import styled from "styled-components";
import { Link } from "react-router-dom";

export const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 11%;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (max-width: 768px) {
    width: 20%;
  }
`;

export const Flag = styled.img`
  width: 5rem;
`;

export const Name = styled.span`
  font-size: 1.3rem;
`;
