import React from 'react';
import { render } from '@testing-library/react';
import TweetCard from './tweetCard';

describe('TweetCard', () => {
    it("should render at Tweet Card without crashing", () => {
        const cardProps = {
            userImageUrl: 'https://pbs.twimg.com/profile_images/941877597763338242/e9nHYTh9_normal.jpg',
            userName: 'Test User',
            screenName: 'testUser',
            text: 'Here is some tweet text. Here is some more text for the tweet so it is longer.'
        };
        render(<TweetCard {...cardProps}/>);
    });
});
