import Modal from 'styled-react-modal';
import theme from './theme';

const FormModalStyled = Modal.styled`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;

  .modal{
    margin: 1em auto;
    &-title{
      font-family: ${theme.titleFont};
    }
    &-comments{
      font-family: ${theme.contentFont};
    }
  }

`;

export default FormModalStyled;
