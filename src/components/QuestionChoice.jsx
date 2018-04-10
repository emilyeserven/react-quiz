import React from 'react';

class QuestionChoice extends React.Component {
    constructor(props) {
      super(props);
      console.log("QuestionChoice1");
      console.log(props);
    }
    render() {
      console.log("QuestionChoice2");
      console.log(this.props);
      return(
        <div>
          <button 
            onClick={() => this.props.choiceClick(this.props.score)}
            disabled={this.props.disabled}
            className={this.props.cssClasses}>
            {this.props.content}
          </button>
        </div>
      );
    }
  }

export default QuestionChoice;