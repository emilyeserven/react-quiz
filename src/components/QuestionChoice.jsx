import React from 'react';

import EButton from './EButton.jsx';

import { Button } from 'arwes';

class QuestionChoice extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      const layerValue = this.props.answered == false ? 'control' : 'disabled';
      const disabledValue = this.props.answered == false ? false : true;
      return(
        <div className="mb-2">
          <Button
            onClick={() => this.props.choiceClick(this.props.score, this.props.category)}
            layer={layerValue}
            disabled={disabledValue}
            className="button-left"
            style={{width: '100%'}}>
            {this.props.content}
          </Button>
        </div>
      );
    }
  }

export default QuestionChoice;