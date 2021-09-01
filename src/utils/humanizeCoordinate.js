const humanizeCoordinate = ({ rowIndex, columnIndex }) =>
  `${String.fromCharCode(rowIndex + 65)}${columnIndex + 1}`;

export default humanizeCoordinate;
