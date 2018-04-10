import React from 'react';

class Results extends React.Component {
  render() {
    return(
      <div>
        <h1>Results go here.</h1>
        <div className="row justify-content-center">
          <Link to="/" className="btn btn-primary btn-large">Go Home</Link>&nbsp;&nbsp;
          <Link to="/learn" className="btn btn-secondary btn-large">Learn</Link>
        </div>
      </div>
    )
  }
}

export default Results;