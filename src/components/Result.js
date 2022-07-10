const Result = ({ feedbackText, number }) => {
  return (
    <tbody>
      <tr>
        <td>{feedbackText}</td>
        <td>{number}</td>
      </tr>
    </tbody>
  );
};

export default Result;