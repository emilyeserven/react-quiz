import React from 'react';

import appData from '../data.json';

import QuestionChoice from './QuestionChoice.jsx';

class Questions extends React.Component {
    constructor(props) {
      super(props);
      console.log("<Questions />");
      console.log(props);
      this.state = {
          qNum: 0,
          correct: 0,
          incorrect: 0,
          answered: false,
          correctClasses: "btn btn-secondary btn-block text-left",
          incorrectClasses: "btn btn-secondary btn-block text-left"
      }
      this.nextQuestion = this.nextQuestion.bind(this);
      this.choiceClick = this.choiceClick.bind(this);
    }
    choiceClick(qValue) {
      this.props.updateScore(qValue);
      this.setState(function() {
        return {
          answered: true
        }
      });
      this.extra -= " disabled";
    }
    nextQuestion(qNum) {
      qNum = Number(qNum) + 1;
      this.setState(function() {
        return {
          qNum: qNum,
          answered: false,
          correctClasses: "btn btn-secondary btn-block text-left",
          incorrectClasses: "btn btn-secondary btn-block text-left"
        }
      });
      this.extra -= " disabled";
    }
    render() {
      const QDATA = appData.questions[this.state.qNum];
      return(
        <div>
          <h2>Question {Number([this.state.qNum]) + 1} of {appData.questions.length}</h2>
          <p>Score: {this.props.passedState.score}</p>
          <p>{QDATA.questionContent}</p>
          <div className="col-10 offset-1">
            {
              QDATA.questionAnswers.map((item, index) => (
                <QuestionChoice
                  choiceClick={this.choiceClick}
                  score={item.answerValue}
                  key={index}
                  disabled={this.state.answered == true ? true : false}
                  cssClasses={item.answerValue == true ? this.state.correctClasses : this.state.incorrectClasses}
                  content={item.answerContent} />
              ))
            }
          </div>
          <div className="text-right mt-3">
            <button
              onClick={this.nextQuestion.bind(null, this.state.qNum)}
              disabled={this.state.answered === true && Number(appData.questions.length - 1) !== this.state.qNum ? false : true}
              className="btn btn-secondary"
              role="button">
              Next Question
            </button>
            &nbsp;&nbsp;
            <button
              onClick={this.props.setResultsView}
              disabled={this.state.answered === true && Number(appData.questions.length - 1) === this.state.qNum ? false : true}
              className="btn btn-secondary"
              role="button">
              Results
            </button>
          </div>
        </div>
      );
    }
  }

export default Questions;