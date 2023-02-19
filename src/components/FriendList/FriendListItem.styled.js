import styled from 'styled-components';

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

export const Image = styled.img`
  width: 70px;
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: black;
`;
