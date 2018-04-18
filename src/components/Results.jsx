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
    const maxAccounts = maxQuestions("catAccounts");
    const maxHardware = maxQuestions("catHardware");
    const maxBrowser = maxQuestions("catBrowser");
    const maxAuth = maxQuestions("catAuth");
    const maxSocial = maxQuestions("catSocial");
    const maxScore = maxAccounts + maxHardware + maxBrowser + maxAuth + maxSocial;
    return(
      <div className="results-screen">
        <h1>You got a {this.props.passedState.scoresRaw} out of {maxScore}!</h1>
        <div className="row justify-content-center">
          <div className="mb-5">
            <h3>Accounts Score</h3>
            <p>{this.props.passedState.catAccounts} of {maxAccounts}</p>
            <h3>Hardware Score</h3>
            <p>{this.props.passedState.catHardware} of {maxHardware}</p>
            <h3>Browser Score</h3>
            <p>{this.props.passedState.catBrowser} of {maxBrowser}</p>
            <h3>Authentication Score</h3>
            <p>{this.props.passedState.catAuth} of {maxAuth}</p>
            <h3>Social Score</h3>
            <p>{this.props.passedState.catSocial} of {maxSocial}</p>
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