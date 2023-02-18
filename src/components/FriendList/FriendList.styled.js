import styled from 'styled-components';

export const Image = styled.img`
  width: 70px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  border: 1px solid darkgray;
  width: 400px;
  background-color: whitesmoke;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6);
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 60px;
`;

export const Status = styled.span`
  width: 17px;
  height: 17px;

  border-radius: 50%;
  background-color: ${props => {
    if (props.children) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: black;
`;
