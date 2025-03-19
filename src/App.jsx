
import { useState } from 'react'
import './App.css'
import TweetForm from './TweetForm';
import TweetPreview from './TweetPreview';

const App = () => {
  const [tweetData, setTweetData] = useState(null);

  const handleChange = (newTweetData) => {
    setTweetData(newTweetData);
  }

  return (
    <div className='app'>
      <div className="app-container">
        <TweetForm onTweetSubmit={handleChange} />
        { tweetData && <TweetPreview tweetData={tweetData} />}
      </div>
    </div>
  )
}

export default App
