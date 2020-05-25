import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import TweetCard from '../tweetCard';
import { StyledInput, StyledPaper, StyledWaitingPlaceholder, Wrapper } from './styles';

const HashtagFeed = () => {
    const [tweets, setTweets] = useState(null);
    const [hashtag, setHashtag] = useState('');
    
    const getTweets = useCallback(async () => {
        if (tweets) return;

        await fetch(`/tweets?hashtag=${hashtag ? hashtag : 'fiserv'}`)
            .then(response => response.json())
            .then(data => {
                setTweets(data);
            })
            .catch(error => console.error(error));
    }, [hashtag, tweets]);

    useEffect(() => {
        if (hashtag) getTweets()
    }, [hashtag, getTweets]);

    if (!tweets) {
        getTweets();

        return (
            <StyledWaitingPlaceholder>Please Wait While Your Tweets Load</StyledWaitingPlaceholder>
        )
    }

    const delayGetTweets = debounce(() => setTweets(null), 2000);
    const changeHashtag = (e) => {
        setHashtag(e.target.value);
        delayGetTweets();
    };

    return (
        <Wrapper>
            <StyledPaper elevation={ 3 }>
                <StyledInput
                    id="standard-basic"
                    label="Search for a new hashtag:"
                    value={ hashtag }
                    onChange={ changeHashtag }
                />

                {tweets.statuses.map(tweet => {
                    const text = tweet.text;
                    const userName = tweet.user.name;
                    const screenName = tweet.user.screen_name;
                    const userImageUrl = tweet.user.profile_image_url_https;
                    const tweetProps = { userImageUrl, screenName, userName, text };

                    return (
                        <TweetCard { ...tweetProps } key={ tweet.id }/>
                    );
                })}
            </StyledPaper>
        </Wrapper>
    );
};

export default HashtagFeed;