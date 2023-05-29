import styled from "styled-components";

export const Table = styled.table`
  width: 50%;
  border-collapse: collapse;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const TeamTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 0.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const TableCell = styled.td`
  padding: 1.2rem;
  font-size: 1.4rem;
  text-align: center;
`;
