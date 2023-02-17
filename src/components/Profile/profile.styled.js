import styled from 'styled-components';

export const Card = styled.div`
  width: 260px;
  height: 340px;
  background-color: whitesmoke;

  border-radius: 6px;
  border: 0.1px solid #c0c0c0;
  margin-bottom: 60px;
`;

export const Description = styled.div`
  padding: 30px;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  color: black;
  margin-bottom: 15px;
`;

export const Image = styled.img`
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  margin-bottom: 15px;
`;
export const Tag = styled.p`
  font-size: 18px;
  color: dimgrey;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  font-size: 18px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: gainsboro;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: calc(100% / 3);
  border: 0.1px solid #c0c0c0;
  height: 84px;
`;
export const Label = styled.span`
  display: block;
  font-size: 15px;
  margin-bottom: 5px;
  text-align: center;
`;
