import React from 'react';
import { render } from '@testing-library/react';
import HashtagFeed from './hashtagFeed';

describe('HashtagFeed', () => {
    it("should render without crashing", () => {
        render(<HashtagFeed />);
    });
});
