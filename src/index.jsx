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

class App extends React.Component {
  render() {
    return(
      <div className="container py-3 my-5 main-frame">
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/questions/:qNum' component={Question} />
            <Route exact path='/learn' component={Learn} />
            <Route path='/learn/:lessonNum' component={Lesson} />
            <Route exact path='/results' component={Results} />
          </Switch>
        </div>
      </div>
    );
  }
}

class HomeButtons extends React.Component {
  render() {
    return (
      <div className="row justify-content-center">
        <Link to="/questions/1" className="btn btn-primary btn-lg" role="button">Start Quiz</Link>
          &nbsp;&nbsp;
        <Link to="/learn" className="btn btn-secondary btn-lg" role="button">Learn More</Link>
      </div>
    )
  }
}

class Home extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <img src={appData.logoUrl} width={appData.logoWidth} height={appData.logoHeight} />
          </div>
          <div className="col-12 text-center">
            <h1>{appData.name}</h1>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-12">
            <p>{appData.description}</p>
          </div>
        </div>
        <HomeButtons />
      </div>
    )
  }
}

class Question extends React.Component {
  constructor(props) {
    super(props);
    let qNum = props.match.params.qNum;
    this.qNum = qNum;
    let qNumPlus = Number(qNum) + 1;
    this.qNumPlus = qNumPlus;
  }
  render() {
    const QDATA = appData.questions[this.qNum - 1];
    return(
      <div>
        <h2>Question {[this.qNum]} of {appData.questions.length}</h2>
        <p>{QDATA.questionContent}</p>
        <div className="col-10 offset-1">
          {
            QDATA.questionAnswers.map((item, index) => (
              <a href="#" key={index} className="btn btn-secondary btn-block text-left">{item.answerContent}</a>
            ))
          }
        </div>
        <div className="text-right mt-3">
          <Link to={"/questions/" + this.qNumPlus} className="btn btn-secondary" role="button">Next Question</Link>&nbsp;&nbsp;
          <Link to="/results" className="btn btn-secondary" role="button">Results</Link>
        </div>
      </div>
    );
  }
}



class Learn extends React.Component {
  render() {
    return(
      <div>
        <h1>Lessons</h1>
        {
          appData.lessons.map((item, index) => (
            <Link to={"/learn/" + [index + 1]} key={index} className="btn btn-secondary btn-block text-left">{item.lessonTitle}</Link>
          ))
        }
        <div className="row mt-3 justify-content-center">
          <Link to="/" className="btn btn-secondary btn-large">Back to Home</Link>
        </div>
      </div>
    );
  }
}

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    const lessonNum = props.match.params.lessonNum;
    this.lessonNum = lessonNum;
  }
  render() {
    return(
      <div>
        <h1>Lesson Number {this.lessonNum}</h1>
        <div className="row justify-content-center">
          <Link to="/learn" className="btn btn-secondary btn-large">Back to Lessons</Link>
        </div>
      </div>
    )
  }
}

class Results extends React.Component {
  render() {
    return(
      <div>
        <h1>Results go here.</h1>
        <div className="row justify-content-center">
          <Link to="/" className="btn btn-primary btn-large">Go Home</Link>&nbsp;&nbsp;
          <Link to="/learn" className="btn btn-secondary btn-large">Learn</Link>
        </div>
      </div>
    )
  }
}

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('container'));
