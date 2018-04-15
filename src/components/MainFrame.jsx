import React from 'react';

import Home from './Home.jsx';
import Questions from './Questions.jsx';
import Results from './Results.jsx';
import Lessons from './Lessons.jsx';
import Lesson from './Lesson.jsx';

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
        setLessonsView={props.setLessonsView}
      />;
    } else if (view == "lessons") {
      return <Lessons
        passedState={props.state}
        setHomeView={props.setHomeView}
        setLessonView={props.setLessonView}
      />;
    } else if (view == "lesson") {
      return <Lesson
        lNum={props.lNum}
        setHomeView={props.setHomeView}
        setLessonsView={props.setLessonsView}
      />;
    }
  }

export default MainFrame;