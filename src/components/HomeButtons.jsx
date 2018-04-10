import React from 'react';

class HomeButtons extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="row justify-content-center">
          <a
            className="btn btn-primary btn-lg"
            role="button"
            onClick={this.props.setQuestionsView}>
            Start Quiz
          </a>
          &nbsp;&nbsp;
          <button
            to="/learn"
            className="btn btn-secondary btn-lg"
            role="button">
            Learn More
          </button>
        </div>
      )
    }
  }

export default HomeButtons;