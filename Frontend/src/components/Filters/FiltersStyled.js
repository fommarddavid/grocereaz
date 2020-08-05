import styled from 'styled-components';
import theme, { lighten } from 'src/styles/theme';

const FiltersStyled = styled.div`
  .filters-mobile {
    width: 100%;
    position: fixed;
    bottom: 3.7em;
    display: flex;
    justify-content: center;
    background-color: ${lighten(theme.alternativeColor, 60)};
    padding: 0.3em;
    ul {
      margin: 0.2em 0.4em;
      font-family: ${theme.contentFont};
      .filter {
        margin: 0.5em 0;
        input {
          margin-right: 0.3em;
        }
      }
    }
  }
  .filters-desktop {
    display: none;
  }
  @media only screen and (min-width: 650px) {
    .filters-mobile {
      display: none;
    }
    .filters-desktop {
      width: 100%;
      display: flex;
      position: static;
      height: 10em;
      padding: 0.3em;
      ul {
        margin: 0.5em 1em;
        .filter {
          margin-bottom: 0.4em;
          display: flex;
          flex-direction: row;
          align-items: center;
          input {
            width: 15px;
            height: 15px;
          }
          span {
            margin-left: 0.3em;
          }
        }
      }
    }
  }
`;

export default FiltersStyled;
