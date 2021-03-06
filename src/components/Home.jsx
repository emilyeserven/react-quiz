import React from 'react';
import { Heading, Words} from 'arwes';
import appData from '../data.json';

import HomeButtons from './HomeButtons.jsx';

class Home extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
        <div className="container home-screen">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h1><Words animate>{appData.name}</Words></h1>
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-12">
              <p><Words animate>{appData.description}</Words></p>
            </div>
          </div>
          <HomeButtons
            setQuestionsView={this.props.setQuestionsView}
            setLessonsView={this.props.setLessonsView} />
        </div>
      )
    }
  }
export default Home;