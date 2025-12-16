import ChatEntry from './ChatEntry.jsx';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, toggleLike }) => {
  const chatComponents = entries.map(entry => {
    return (<ChatEntry
      key={entry.id}
      id={entry.id}
      sender={entry.sender}
      body={entry.body}
      timeStamp={entry.timeStamp}
      liked={entry.liked}
      toggleLike={toggleLike}>
    </ChatEntry>
    );
  });
  return (
    <>
      {chatComponents}
    </>

  );
};
ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
  })).isRequired,
  toggleLike: PropTypes.func,

};


export default ChatLog;