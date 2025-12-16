import './ChatEntry.css';
import TimeStamp from './TimeStamp.jsx';
import PropTypes from 'prop-types';

const ChatEntry = ({ id, sender, body, timeStamp, liked, toggleLike }) => {
  const heartColor = liked ? '❤️' : '🤍';
  return (
    <article className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time = {timeStamp}></TimeStamp></p>
        <button className="like" onClick={()=>toggleLike(id)}>{heartColor}</button>
      </section>
    </article>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  toggleLike: PropTypes.func,
};

export default ChatEntry;
