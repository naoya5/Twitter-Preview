import React from 'react'

const TweetDetail = ({ tweetData }) => {
  return (
    <div className="tweet-container">
        <div className="tweet-simple">
            <div className="tweer-header">
                <span className='tweet-user'>{tweetData.name}</span>
                <span className="tweet-date">2:50 AM - August 4, 2022 - Twitter Web App</span>
            </div>
            <div className="tweet-content">
                <p>{tweetData.content}</p>
            </div>
            <div className="tweet-status">
                <span>4K Retweets</span>
                <span>34.3K Quote Tweets</span>
                <span>1M Likes</span>
            </div>
        </div>
    </div>
  )
}

export default TweetDetail