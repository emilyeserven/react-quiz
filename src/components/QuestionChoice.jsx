import React from 'react';

import EButton from './EButton.jsx';

import { Button } from 'arwes';

class QuestionChoice extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      console.log("QuestionChoice");
      console.log(this.props);
      const layerValue = this.props.answered == false ? 'control' : 'disabled';
      console.log(layerValue);
      const disabledValue = this.props.answered == false ? false : true;
      console.log(disabledValue);
      console.log(this);
      return(
        <div className="mb-2">
          <Button
            onClick={() => this.props.choiceClick(this.props.score, this.props.category)}
            layer={layerValue}
            //layer={this.props.layersVal}
            //level={this.props.answered == false ? 3 : 0}
            disabled={disabledValue}
            style={{width: '100%'}}>
            {this.props.content}
          </Button>
        </div>
      );
    }
  }

export default QuestionChoice;