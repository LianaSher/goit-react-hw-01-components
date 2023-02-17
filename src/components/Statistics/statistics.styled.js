import styled from 'styled-components';

export const Section = styled.section`
  display: inline-block;
  background-color: white;
  margin-bottom: 60px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  color: black;
  margin: 42px auto;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 120px;
  height: 120px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  background-color: ${props => {
    return getRandomHexColor();
  }};
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
