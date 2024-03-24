// eslint-disable-next-line react/prop-types
const Historyy = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, index) => (
          <li key={index}>
            <button
              type="button"
              className={`btn-move ${currentMove === index ? `active` : ''}`}
              onClick={() => moveTo(index)}
            >
              {' '}
              {index == '0' ? `go to game start` : `move is ${index}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Historyy;
