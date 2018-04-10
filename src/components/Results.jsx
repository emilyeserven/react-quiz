import React from 'react';

class Results extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log("Results");
    return(
      <div>
        <h1>You got a {this.props.passedState.score}!</h1>
        <div className="row justify-content-center">
          <button onClick={this.props.resetHomeView} className="btn btn-primary btn-large">Go Home</button>&nbsp;&nbsp;
          <button to="/learn" className="btn btn-secondary btn-large">Learn</button>
        </div>
      </div>
    )
  }
}

export default Results;