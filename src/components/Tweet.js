import ProfileImage from "./ProfileImage"
import Timestamp from "./Timestamp";
import User from "./User"


function Tweet(props) {
 
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}
      />
 
      <div className="body">
        <div className="top">
          
          
          <User userData={props.tweet.user}/>

          <Timestamp timeStampData={props.tweet.timestamp}/>
        </div>

        <p className="message">
          {props.tweet.message}
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
