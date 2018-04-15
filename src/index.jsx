import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import { ThemeProvider, Arwes, Puffs, Button, createTheme, Frame } from 'arwes';

import appData from './data.json';

import MainFrame from './components/MainFrame.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      qNum: 0,
      lNum: 0,
      scoresRaw: 0,
      catFacebook: 0,
      catGeneral: 0,
      qList: [],
      view: "home"
    }
    this.setHomeView = this.setHomeView.bind(this);
    this.resetHomeView = this.resetHomeView.bind(this);
    this.setQuestionsView = this.setQuestionsView.bind(this);
    this.setResultsView = this.setResultsView.bind(this);
    this.setLessonsView = this.setLessonsView.bind(this);
    this.setLessonView = this.setLessonView.bind(this);
    //this.updateScore = this.updateScore.bind(this);
  };

  updateScore(qVal) {
    this.setState({
      scoreData: qVal
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
  setResultsView(scoreData) {
     this.setState({
      view: "results",
      scoresRaw: scoreData.scoresRaw,
      catFacebook: scoreData.catFacebook,
      catGeneral: scoreData.catGeneral
     });
  }
  setLessonsView() {
     this.setState({view: "lessons"});
  }
  setLessonView(lessonNum) {
     this.setState({
       view: "lesson",
       lNum: lessonNum
     });
  }

  render() {
    console.log("In App");
    console.log(this.state);
    return(
      <ThemeProvider theme={createTheme()}>
        <Arwes>
          <Puffs>
            <div style={{ width: '100%', height: '90vh'}}>
            <div className="container py-3 px-3 px-md-0 my-md-5 main-frame">
              <Frame level={3} corners={5} animate={false}>
                <div className="py-md-5 px-md-5 px-3 py-3 frame-container">
                  <MainFrame
                  view={this.state.view}
                  state={this.state}
                  setHomeView={this.setHomeView}
                  setResultsView={this.setResultsView}
                  setQuestionsView={this.setQuestionsView}
                  setLessonsView={this.setLessonsView}
                  setLessonView={this.setLessonView}
                  lNum={this.state.lNum}
                  //updateScore={this.updateScore}
                  resetHomeView={this.resetHomeView}
                  />
                </div>
              </Frame>
              </div>
            </div>
          </Puffs>
        </Arwes>
      </ThemeProvider>
    );
  }
}


ReactDOM.render((<App />), document.getElementById('container'));
