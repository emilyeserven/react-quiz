import React from 'react';

import Lesson from './Lesson.jsx';

class Lessons extends React.Component {
    render() {
      return(
        <div>
          <h1>Lessons</h1>
          {
            appData.lessons.map((item, index) => (
              <Link to={"/learn/" + [index + 1]} key={index} className="btn btn-secondary btn-block text-left">{item.lessonTitle}</Link>
            ))
          }
          <div className="row mt-3 justify-content-center">
            <Link to="/" className="btn btn-secondary btn-large">Back to Home</Link>
          </div>
        </div>
      );
    }
  }

export default Lessons;