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
            <Route path='/quiz' component={Question} />
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
        <Link to="/quiz" className="btn btn-primary btn-lg" role="button">Start Quiz</Link>
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
    this.state = {
        qNum: 0,
        correct: 0,
        incorrect: 0,
        answered: false,
        correctClasses: "btn btn-secondary btn-block text-left",
        incorrectClasses: "btn btn-secondary btn-block text-left"
    }
    this.nextQuestion = this.nextQuestion.bind(this);
    this.correctAnswer = this.correctAnswer.bind(this);
    this.badAnswer = this.badAnswer.bind(this);
    //console.log(this.state.qNum);
    //console.log(appData.questions[this.state.qNum]);
  }
  nextQuestion(qNum) {
    qNum = Number(qNum) + 1;
    //console.log("New qNum: ", qNum);
    this.setState(function() {
      return {
        qNum: qNum,
        answered: false,
        correctClasses: "btn btn-secondary btn-block text-left",
        incorrectClasses: "btn btn-secondary btn-block text-left"
      }
    });
    this.extra -= " disabled";
    console.log("this.state.answered ", this.state.answered);
    console.log("Number(appData.questions.length - 1)", Number(appData.questions.length - 1));
    console.log("this.state.qNum", this.state.qNum);
    console.log("Number(appData.questions.length - 1) !== this.state.qNum", Number(appData.questions.length - 1) - 1 !== this.state.qNum)
    console.log("this.state.answered === false && Number(appData.questions.length) - 1 !== this.state.qNum", this.state.answered === false && Number(appData.questions.length) - 1 !== this.state.qNum)
    //console.log("state is now " + this.state.qNum);
  }
  correctAnswer() {
    console.log("Old state:");
    console.log(this.state);
    console.log(this);
    const correct = this.state.correct + 1;
    this.setState({
      correct: correct,
      answered: true,
      correctClasses: "btn btn-success btn-block text-left",
      incorrectClasses: "btn btn-light btn-block text-left"
    });
    console.log("New state:");
    console.log(this.state);
    this.extra += " disabled";
    console.log(this.extra);
  }
  badAnswer() {
    console.log("Old state:");
    console.log(this.state);
    const incorrect = this.state.incorrect + 1;
    this.setState({
      incorrect: incorrect,
      answered: true,
      correctClasses: "btn btn-danger btn-block text-left",
      incorrectClasses: "btn btn-danger btn-block text-left"
    });
    console.log("New state:");
    console.log(this.state);
  }
  render() {
    const QDATA = appData.questions[this.state.qNum];
    console.log(appData.questions.length);
    return(
      <div>
        <h2>Question {Number([this.state.qNum]) + 1} of {appData.questions.length}</h2>
        <p>Correct: {this.state.correct} | Incorrect: {this.state.incorrect}</p>
        <p>{QDATA.questionContent}</p>
        <div className="col-10 offset-1">
          {
            QDATA.questionAnswers.map((item, index) => (
              <button onClick={item.answerValue == true ? this.correctAnswer : this.badAnswer} key={index} disabled={this.state.answered == true ? true : false} className={item.answerValue == true ? this.state.correctClasses : this.state.incorrectClasses} >{item.answerContent}</button>
            ))
          }
        </div>
        <div className="text-right mt-3">
          <button onClick={this.nextQuestion.bind(null, this.state.qNum)} disabled={this.state.answered === true && Number(appData.questions.length - 1) !== this.state.qNum ? false : true} className="btn btn-secondary" role="button">Next Question</button>&nbsp;&nbsp;
          <Link to="/results" className={this.state.answered === true && Number(appData.questions.length - 1) === this.state.qNum ? "btn btn-secondary" : "btn btn-secondary disabled"} role="button">Results</Link>
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
