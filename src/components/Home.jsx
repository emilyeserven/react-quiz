import React from 'react';

import appData from '../data.json';

import HomeButtons from './HomeButtons.jsx';

class Home extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <img
                src={appData.logoUrl}
                width={appData.logoWidth}
                height={appData.logoHeight}
                />
            </div>
            <div className="col-12 text-center">
              <h1>{appData.name}</h1>
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-12">
              <p>{appData.description}</p>
            </div>
          </div>
          <HomeButtons setQuestionsView={this.props.setQuestionsView} />
        </div>
      )
    }
  }
export default Home;