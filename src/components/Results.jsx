import React from 'react';

import { Button } from 'arwes';

class Results extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log("Results");
    console.log(this.props.passedState);
    console.log(this.props.passedState.scoresRaw);
    return(
      <div>
        <h1>You got a {this.props.passedState.scoresRaw}!</h1>
        <div className="row justify-content-center">
          <div className="mb-5">
            <h3>Facebook Score</h3>
            <p>{this.props.passedState.catFacebook}</p>
            <h3>General Score</h3>
            <p>{this.props.passedState.catGeneral}</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <Button onClick={this.props.resetHomeView} layer='primary'>Go Home</Button>&nbsp;&nbsp;
          <Button layer='secondary'>Learn</Button>
        </div>
      </div>
    )
  }
}

export default Results;