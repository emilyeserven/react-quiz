import React from 'react';

import Home from './Home.jsx';
import Questions from './Questions.jsx';
import Results from './Results.jsx';
import Lessons from './Lessons.jsx';

function MainFrame(props) {
    const view = props.view;
    if (view == "home") {
      return <Home
        passedState={props.state}
        setQuestionsView={props.setQuestionsView}
        setLessonsView={props.setLessonsView}
      />;
    } else if (view == "questions") {
      return <Questions
        passedState={props.state}
        setHomeView={props.setHomeView}
        setResultsView={props.setResultsView}
        updateScore={props.updateScore}
      />;
    } else if (view == "results") {
      return <Results
        passedState={props.state}
        resetHomeView={props.resetHomeView}
      />;
    } else if (view == "lessons") {
      return <Lessons
        passedState={props.state}
        setHomeView={props.setHomeView}
      />;
    }
  }

export default MainFrame;