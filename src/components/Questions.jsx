import React from 'react';
import { Button } from 'arwes';
import appData from '../data.json';

import EButton from './EButton.jsx';

import QuestionChoice from './QuestionChoice.jsx';

class Questions extends React.Component {
    constructor(props) {
      super(props);
      console.log("<Questions />");
      console.log(props);
      this.state = {
          qNum: 0,
          qLayers: 'control',
          nextLayer: 'disabled',
          scoresRaw: 0,
          catGeneral: 0,
          catFacebook: 0,
          answered: false,
          correctClasses: "btn btn-secondary btn-block text-left",
          incorrectClasses: "btn btn-secondary btn-block text-left"
      }
      this.nextQuestion = this.nextQuestion.bind(this);
      this.choiceClick = this.choiceClick.bind(this);
    }
    choiceClick(qValue, catValue) {
      console.log("Hello");
      console.log("this.state.scoresRaw");
      console.log(this.state.scoresRaw);
      console.log("qValue");
      console.log(qValue);
      const scoreAdded = this.state.scoresRaw + qValue;
      const catScore = this.state[catValue] + qValue;
      console.log(scoreAdded);
      console.log(scoreAdded);
      this.setState(function() {
        return {
          answered: true,
          qLayers: 'disabled',
          nextLayer: 'control',
          scoresRaw: scoreAdded,
          [catValue]: catScore
        }
      });
      console.log("new state");
      console.log(this.state);
    }
    nextQuestion(qNum) {
      qNum = Number(qNum) + 1;
      this.setState(function() {
        return {
          qNum: qNum,
          qLayers: 'control',
          nextLayer: 'disabled',
          answered: false,
          correctClasses: "btn btn-secondary btn-block text-left",
          incorrectClasses: "btn btn-secondary btn-block text-left"
        }
      });
    }
    render() {
      const QDATA = appData.questions[this.state.qNum];
      return(
        <div>
          <h2>Question {Number([this.state.qNum]) + 1} of {appData.questions.length}</h2>
          <p>Score: {this.state.scoresRaw}</p>
          <p>General: {this.state.catGeneral} | Facebook: {this.state.catFacebook}</p>
          <p>{QDATA.questionContent}</p>
          <div className="col-10 offset-1">
            {
              QDATA.questionAnswers.map((item, index) => (
                <QuestionChoice
                  choiceClick={this.choiceClick}
                  score={item.answerValue}
                  category={QDATA.questionCategory}
                  key={index}
                  layersVal={this.state.qLayers}
                  answered={this.state.answered == true ? true : false}
                  cssClasses={item.answerValue == true ? this.state.correctClasses : this.state.incorrectClasses}
                  content={item.answerContent} />
              ))
            }
          </div>
          <div className="text-right mt-3">
            <Button
              onClick={this.nextQuestion.bind(null, this.state.qNum)}
              layer={this.state.answered === true && Number(appData.questions.length - 1) !== this.state.qNum ? 'primary' : 'disabled'}
              disabled={this.state.answered === true && Number(appData.questions.length - 1) !== this.state.qNum ? false : true}>
              Next Question
            </Button>
            &nbsp;&nbsp;
            <Button
              onClick={() => this.props.setResultsView(this.state)}
              layer={this.state.answered === true && Number(appData.questions.length - 1) === this.state.qNum ? 'primary' : 'disabled'}
              disabled={this.state.answered === true && Number(appData.questions.length - 1) === this.state.qNum ? false : true}>
              Results
            </Button>
          </div>
        </div>
      );
    }
  }

export default Questions;