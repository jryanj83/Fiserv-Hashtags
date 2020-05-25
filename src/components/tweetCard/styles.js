import styled from 'styled-components';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { makeStyles } from '@material-ui/core/styles';

const StyledImage = styled.img`
  border-radius: 50%;
  margin-right: 20px;
`;
const StyledUserData = styled.p`
  && {
    margin-bottom: 20px;
  }
`;
const StyledUserName = styled.span`
  font-size: 16px;
  margin-right: 20px;
`;
const StyledScreenName = styled.a`
  font-size: 10px
  underline: none;
`;

const cardBgColor = blueGrey[200];
const useStyles = makeStyles({
    root: {
        marginBottom: 25,
        padding: 10,
        background: cardBgColor
    }
});

export {
    StyledImage,
    StyledScreenName,
    StyledUserData,
    StyledUserName,
    useStyles
}