import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
  StyledImage,
  StyledScreenName,
  StyledUserData,
  StyledUserName,
  useStyles
} from './styles';

const TweetCard = ({ userImageUrl, userName, screenName, text }) => {
  const cardClasses = useStyles();

  return (
    <Card className={ cardClasses.root }>
      <CardContent>
        <StyledUserData>
          <StyledImage src={ userImageUrl } alt="profile" />
          <StyledUserName>{ userName }</StyledUserName>
          {screenName && <StyledScreenName href={ `https://www.twitter.com/${screenName}` }>@{ screenName }</StyledScreenName>}
        </StyledUserData>
        <Typography>{ text }</Typography>
      </CardContent>
    </Card>
  );
};

TweetCard.propTypes = {
  userImageUrl: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  screenName: PropTypes.string,
  text: PropTypes.string.isRequired
}

TweetCard.defaultProps = {
  screenName: ''
}

export default TweetCard;