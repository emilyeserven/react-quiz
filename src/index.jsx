import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import appData from './data.json';

import MainFrame from './components/MainFrame.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      qNum: 0,
      score: 0,
      qList: [],
      view: "home"
    }
    this.setHomeView = this.setHomeView.bind(this);
    this.resetHomeView = this.resetHomeView.bind(this);
    this.setQuestionsView = this.setQuestionsView.bind(this);
    this.setResultsView = this.setResultsView.bind(this);
    this.setLessonsView = this.setLessonsView.bind(this);
    this.updateScore = this.updateScore.bind(this);
  };

  updateScore(qVal) {
    const newVal = this.state.score + qVal;
    this.setState({
      score: newVal
    });
  }
  setHomeView() {
     this.setState({view: "home"});
  }
  resetHomeView() {
    console.log("reset home view");
    this.setState({
      view: "home",
      score: 0
    });
    console.log(this.state);
  }
  setQuestionsView() {
     this.setState({view: "questions"});
  }
  setResultsView() {
     this.setState({view: "results"});
  }
  setLessonsView() {
     this.setState({view: "lessons"});
  }
// https://gist.github.com/sebkouba/a5ac75153ef8d8827b98
  render() {
    console.log("In App");
    console.log(this.state);
    return(
      <div className="container py-3 my-5 main-frame">
        <div>
          <MainFrame
            view={this.state.view}
            state={this.state}
            setHomeView={this.setHomeView}
            setResultsView={this.setResultsView}
            setQuestionsView={this.setQuestionsView}
            updateScore={this.updateScore}
            resetHomeView={this.resetHomeView}
          />
        </div>
      </div>
    );
  }
}


ReactDOM.render((<App />), document.getElementById('container'));
