import { useState, useEffect } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

import s from "./App.module.css";

const rating = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [currentRaiting, setCurrentRaiting] = useState(() => {
    const loadData = JSON.parse(window.localStorage.getItem("currentRaiting"));
    if (loadData !== null) {
      return loadData;
    }

    return rating;
  });

  const totalRate =
    currentRaiting.good + currentRaiting.neutral + currentRaiting.bad;

  const positiveFeedback = Math.round((currentRaiting.good / totalRate) * 100);

  useEffect(() => {
    window.localStorage.setItem(
      "currentRaiting",
      JSON.stringify(currentRaiting)
    );
  }, [currentRaiting]);

  function updateFeedback(feedbackType) {
    setCurrentRaiting((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  }

  function resetFeedback() {
    setCurrentRaiting(rating);
  }

  return (
    <div className={s.feedbackContainer}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalRate={totalRate}
      />

      {totalRate === 0 && <Notification>Not notification yet</Notification>}

      {totalRate > 0 && (
        <Feedback
          currentRaiting={currentRaiting}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
}

export default App;
