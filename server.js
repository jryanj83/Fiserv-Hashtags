const Express = require('express');
const Twitter = require('twitter');
const Config = require('./config');
const app = Express();


const client = new Twitter({
    consumer_key: Config.TWITTER_CONSUMER_KEY,
    consumer_secret: Config.TWITTER_CONSUMER_SECRET,
    access_token_key: Config.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: Config.TWITTER_ACCESS_TOKEN_SECRET
});

app.get('/tweets', function (req, res) {
    const params = {
        q: "%23" + req.query.hashtag,
        result_type: 'recent'
    };

    console.log('req.query.hashtag :: ', req.query.hashtag);

    client.get('search/tweets', params, function (error, tweets, response) {
        if (!error) {
            console.log(tweets);
        }
        res.json(tweets)
    });
})

app.listen(4000, function () {
    console.log('Example app listening on port 4000!')
})