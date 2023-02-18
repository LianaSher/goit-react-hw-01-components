import styled from 'styled-components';

export const Table = styled.table`
  width: 600px;
  border: 0.5px solid whitesmoke;
  border-collapse: collapse;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  background-color: whitesmoke;
`;

export const TableHead = styled.thead`
  height: 40px;
  background-color: blueviolet;

  font-size: 15px;
`;

export const HeadCell = styled.th`
  border: 0.5px solid lightgray;
`;

export const Row = styled.tr`
  color: white;
  height: 40px;
  border: 0.5px solid lightgray;
  font-weight: 600px;
  &:nth-child(even) {
    background-color: gainsboro;
  }
`;

export const Cell = styled.td`
  color: #212121;
  padding: 10px 70px;
  width: 200px;
  border: 0.5px solid lightgray;
  font-weight: 500;
`;

export const TableBody = styled.tbody``;
