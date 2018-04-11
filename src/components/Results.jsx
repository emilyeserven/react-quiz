import React from 'react';

class Results extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log("Results");
    console.log(this.state);
    console.log(this.props.passedState.scoreData.raw);
    return(
      <div>
        <h1>You got a {this.props.passedState.scoreData.raw}!</h1>
        <div className="row justify-content-center">
          <button onClick={this.props.resetHomeView} className="btn btn-primary btn-large">Go Home</button>&nbsp;&nbsp;
          <button to="/learn" className="btn btn-secondary btn-large">Learn</button>
        </div>
      </div>
    )
  }
}

export default Results;