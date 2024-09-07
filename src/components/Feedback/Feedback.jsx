function Feedback({ currentRaiting, positiveFeedback }) {
  return (
    <>
      <ul>
        <li>Good: {currentRaiting["good"]}</li>
        <li>Neutral: {currentRaiting["neutral"]}</li>
        <li> Bad: {currentRaiting["bad"]}</li>
        <li> total: {positiveFeedback}%</li>
      </ul>
    </>
  );
}

export default Feedback;
