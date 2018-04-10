import React from 'react';

class QuestionChoice extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
        <div className="mb-2">
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