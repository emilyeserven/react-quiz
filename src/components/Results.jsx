import React from 'react';

import appData from '../data.json';

import { Button } from 'arwes';

class Results extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    function maxQuestions(category){
      let qArray = [];
      let tempArray = [];
      for (let n = 0; n < appData.questions.length; n++){
        if (appData.questions[n].questionCategory == category) {
          const answerHolder = appData.questions[n].questionAnswers;
          tempArray.push(Math.max.apply(Math,answerHolder.map(function(o){return o.answerValue;})));
        }
      }
      const add = (a, b) => a + b;
      const sum = tempArray.reduce(add);
      return sum
    }
    const maxFacebook = maxQuestions("catFacebook");
    const maxGeneral = maxQuestions("catGeneral");
    const maxScore = maxFacebook + maxGeneral;
    return(
      <div>
        <h1>You got a {this.props.passedState.scoresRaw} out of {maxScore}!</h1>
        <div className="row justify-content-center">
          <div className="mb-5">
            <h3>Facebook Score</h3>
            <p>{this.props.passedState.catFacebook} of {maxFacebook}</p>
            <h3>General Score</h3>
            <p>{this.props.passedState.catGeneral} of {maxGeneral}</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <Button onClick={this.props.resetHomeView} layer='primary'>Go Home</Button>&nbsp;&nbsp;
          <Button onClick={this.props.setLessonsView} layer='secondary'>Learn</Button>
        </div>
      </div>
    )
  }
}

export default Results;