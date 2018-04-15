import React from 'react';

import Lesson from './Lesson.jsx';
import { Button } from 'arwes';

import appData from '../data.json';

class Lessons extends React.Component {
  constructor(props) {
    super(props);
    }
    render() {
      return(
        <div>
          <h1>Lessons</h1>
          {
            appData.lessons.map((item, index) => (
              <Button
              onClick={() => this.props.setLessonView(index)}
              key={index}
              className="text-left fullwidth mb-2">
                {item.title}
              </Button>
            ))
          }
          <div className="row mt-3 justify-content-center">
            <Button onClick={this.props.setHomeView} layer='secondary'>Back to Home</Button>
          </div>
        </div>
      );
    }
  }

export default Lessons;