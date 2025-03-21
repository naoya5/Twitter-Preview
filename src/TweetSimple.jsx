import React from 'react'

const TweetSimple = ({ tweetData }) => {
  return (
    <div className="tweet-container">
        <div className="tweet-simple">
            <div className="tweet-header">
                <span className='tweet-user'>{tweetData.name}</span>
                <span className="tweet-date">August 4</span>
            </div>
            <div className="tweet-content">
                <p>{tweetData.content}</p>
            </div>
            <div className="tweet-stats">
                <span>4K Retweets</span>
                <span>34.3K Quote Tweets</span>
                <span>1M Likes</span>
            </div>
        </div>
    </div>
  )
}

export default TweetSimple