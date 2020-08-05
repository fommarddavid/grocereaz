import styled from 'styled-components';
import theme from '../../styles/theme';

const FieldStyled = styled.div`
  display: flex;
  margin-bottom: 0.5em;

  .field-input{
    display: flex;
  }

  .field-instruction{
    font-family: ${theme.contentFont};
    font-weight: bold;
    color: ${theme.grocereazColor};
  }
`;

export default FieldStyled;
