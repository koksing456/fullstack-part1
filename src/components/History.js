const History = (props) => {
  console.log(props);
  if (props.allClick.length === 0) return <div>click any buttons to start</div>;

  return <div>All CLick - {props.allClick}</div>;
};

export default History;
