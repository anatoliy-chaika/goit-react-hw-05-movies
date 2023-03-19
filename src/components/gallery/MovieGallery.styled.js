import styled from '@emotion/styled';

export const MovieGalleryStyled = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const MovieLi = styled.li`
  border: 1px solid #7d99a9;
  border-radius: 5px;
  padding: 10px;
  background-color: #f7feff;
`;

export const TitleMain = styled.p`
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  color: #0d1b23;
`;

export const MoviePoster = styled.img`
  margin: 0 auto;
`;
