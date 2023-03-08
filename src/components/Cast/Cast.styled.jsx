import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

export const CastCard = styled.li`
  border-radius: 10px;
  overflow: hidden;
  width: 150px;
  /* height: 225px; */

  p {
    padding: 5px;
    text-align: center;
    font-size: 16px;
    height: 50px;
  }
  h2 {
    padding: 5px;
    text-align: center;
    font-size: 16px;
    height: 50px;
  }
`;
