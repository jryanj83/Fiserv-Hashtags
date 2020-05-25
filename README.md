# Twitter Hashtag Feed
A Feed of Twitter Tweets results from a search on a specific hashtag. Also allows for aditional searches on a new hashtag based upon user input.  

Overall this was a fun excercise and I learned a good bit along the way as well.

Enjoy!
<br><br><br>

## Usage
**Before Starting**<br>
Due to secrets being needed to make calls to the Twitter API. I will send an encrypted zip file containing the necessary file to place at the root of this project so the sever will run. Please make sure to have this file placed at the root level or the app will not function.

Use/install correct Node version:
```
nvm use
```

Install dependencies: 
```
yarn
```
Start server.js in 1st terminal window:<br>
<small>(Server needs to be running so application will recieve data.)</small>
```
node server.js
```
In (seperate) 2nd terminal window start application:<br>
<small>(Seperate terminal windows are necessary as server and app run on different ports)</small>
```
yarn start
```
You should be taken to your browser. If not go to [localhost:3000](localhost:3000).


## Implementation: 
There are no external dependencies

```js
<HashtagFeed /> 
```

## Tests:
To run tests with watching enabled

```
yarn test
```

Tests are located:

- App: `/src/App.test.js`

- HashtagFeed: `/src/components/hashtagFeed/hashtagFeed.test.js`

- TweetCard: `/src/components/tweetCard/tweetCard.test.js`

## Caveats / Remaining Work:
I hadn't used the Twitter API in quite a few years so I wasn't quite expecting to need to set up a server to make a call to it. So, I didn't get quite as deep as I would have liked with the final styling or testing. I also know there are much better OpSec methods to sharing secrets, although currently I do not have a good pipeline set up to facilatate.


## Contributers:
Ryan Jackson - <a href="mailto:jryanj83@gmail.com"> jryanj83@gmail.com </a>