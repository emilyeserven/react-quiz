import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {
  HashRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';

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
    this.setQuestionsView = this.setQuestionsView.bind(this);
    this.setResultsView = this.setResultsView.bind(this);
    this.setLessonsView = this.setLessonsView.bind(this);
    this.updateScore = this.updateScore.bind(this);
  };

  updateScore(qVal) {
    console.log("updateScore");
    console.log("The old score is");
    console.log(this.state.score);
    console.log("qVal is " + qVal);
    const newVal = this.state.score + qVal;
    console.log("newVal is " + newVal);
    this.setState({
      score: newVal
    });
    console.log("the score is now");
    console.log(this.state.score);
  }
  setHomeView() {
     this.setState({view: "home"});
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
          />
        </div>
      </div>
    );
  }
}


ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('container'));
