import React from 'react';

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    const lessonNum = props.match.params.lessonNum;
    this.lessonNum = lessonNum;
  }
  render() {
    return(
      <div>
        <h1>Lesson Number {this.lessonNum}</h1>
        <div className="row justify-content-center">
          <Link to="/learn" className="btn btn-secondary btn-large">Back to Lessons</Link>
        </div>
      </div>
    )
  }
}

export default Lesson;