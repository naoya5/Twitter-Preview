import TweetDetail from "./TweetDetail";
import TweetSimple from "./TweetSimple";


const TweetPreview = ({ tweetData }) => {
    return (
        <div>
        <TweetSimple tweetData={tweetData} />
        <TweetDetail tweetData={tweetData} />
        </div>
    )
}

export default TweetPreview;