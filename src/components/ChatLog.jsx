import ChatEntry from './ChatEntry.jsx';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = ({ entries }) => {
  const chatComponents = entries.map(entry => {
    return (<ChatEntry
      key={entry.id}
      id={entry.id}
      sender={entry.sender}
      body={entry.body}
      timeStamp={entry.timeStamp}>
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
  })).isRequired,

};


export default ChatLog;