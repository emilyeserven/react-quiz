import React from 'react';

import { Button, animate } from 'arwes';

class HomeButtons extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="row justify-content-center">
          <Button
            onClick={this.props.setQuestionsView}
            layer='primary'
            animate>
            Start Quiz
          </Button>
          &nbsp;&nbsp;
          <Button
            onClick={this.props.setLessonsView}
            layer='secondary'
            animate>
            Learn More
          </Button>
        </div>
      )
    }
  }

export default HomeButtons;