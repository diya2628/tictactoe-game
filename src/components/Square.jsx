const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      type="button"
      className={`square ${value == 'X' ? `text-green` : `text-orange`} 
      ${isWinningSquare ? `winning` : ''}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
/* eslint-disable react/prop-types */
// const Square = ({ value, children }) => {
//   console.log(children);
//   return (
//     <div>
//       {value}
//       <h1>children will be displayed below</h1>
//       <div>{children}</div>
//     </div>
//   );
// };
