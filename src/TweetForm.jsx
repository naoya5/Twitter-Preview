import React, { useState } from 'react'

const TweetForm = ({ onTweetSubmit }) => {

    const [tweetData, setTweetData] = useState({
        name: '',
        id: '',
        content: '',
        icon: '',
    });

    const handleChange = (e) => {
        setTweetData({...tweetData, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onTweetSubmit(tweetData);
    }


  return (
    <form onSubmit={handleSubmit}>
        <div className="tweet-preview">
            <div className="horizontal-group">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        className='input-form' 
                        name='name'
                        value={tweetData.name}
                        onChange={handleChange}
                        placeholder='名前を入力してください'
                     />
                </div>
                <div className="form-group">
                    <label>Id</label>
                    <input
                        className='input-form' 
                        name='id'
                        value={tweetData.id}
                        onChange={handleChange}
                        placeholder='idを入力してください' 
                    />
                </div>
            </div>
                <div className="form-group">
                    <label>Textarea</label>
                    <textarea
                        className='textarea-field' 
                        name='content'
                        value={tweetData.content}
                        onChange={handleChange}
                        rows='5'
                        placeholder='ツイート内容' 
                    />
                </div>
                <div className="horizontal-group">
                    <div className="form-group">
                        <input 
                            className='input-form'
                            type='text'
                            placeholder='Icon' 
                        />
                    </div>
                
                <button type='submit' className='submit-button'>ツイート</button>
                </div>
            </div>
    </form>
  );
};

export default TweetForm;