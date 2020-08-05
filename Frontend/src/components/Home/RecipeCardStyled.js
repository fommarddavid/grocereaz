import styled from 'styled-components';
import theme from '../../styles/theme';

const RecipeCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  transition: 0.6s;
  border: 1px solid lightgrey;
  background-color: white;

  &:hover {
    transform: scale(1.1);
    transition: 0.6s;
  }
  .card-section-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    position: absolute;
    bottom: 5em;
  }
  .recipe-title {
    font-family: ${theme.titleFont};
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 2em;
    background-color: rgba(255, 255, 255, 0.8);
    color: ${theme.secondaryColor};
    padding: 0.5em;
    width: 100%;
  }
  .recipe-image {
    width: 100%;
    height: 17em;
  }
  .recipe-servings {
    font-family: ${theme.contentFont};
    color: ${theme.alternativeColor};
    font-weight: bold;
    margin-top: 0.6em;
  }
  .card-description {
    display: block;
    font-family: ${theme.contentFont};
    padding: 0.2em;
  }
`;

export default RecipeCardStyled;
