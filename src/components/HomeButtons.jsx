import React from 'react';

import { Button } from 'arwes';

class HomeButtons extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="row justify-content-center">
          <Button
            onClick={this.props.setQuestionsView}
            layer='primary'>
            Start Quiz
          </Button>
          &nbsp;&nbsp;
          <Button
            onClick={this.props.setLessonsView}
            layer='secondary'
            role="button">
            Learn More
          </Button>
        </div>
      )
    }
  }

export default HomeButtons;