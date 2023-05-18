import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 11%;
  cursor: pointer;

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
