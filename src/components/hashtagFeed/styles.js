import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import blueGrey from '@material-ui/core/colors/blueGrey';
import teal from '@material-ui/core/colors/teal';

const wrapperBgColor = blueGrey[900];
const inputBgColor = blueGrey[50];
const waitingTextColor = teal[700];

const Wrapper = styled.div`
  max-width: 650px;
  margin: 50px auto 0px;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;
const StyledPaper = styled(Paper)`
  && {
    background: ${wrapperBgColor};
    padding: 25px 20px;
    height: 80vh;
    overflow: scroll;

    @media (max-width: 768px) {
      height: auto;
    }
  }
  
`;
const StyledInput = styled(TextField)`
  && {
    background: ${inputBgColor};
    width: 40%;
    padding: 10px;
    margin-bottom: 25px;
    border-radius: 5px;
  }
`;
const StyledWaitingPlaceholder = styled.h1`
  text-align: center;
  margin: 100px auto;
  color: ${waitingTextColor}
`;

export {
    StyledInput,
    StyledPaper,
    StyledWaitingPlaceholder,
    Wrapper
}