import React from 'react';

import { Button } from 'arwes';
import appData from '../data.json';

class Lesson extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Lesson");
    console.log(this.props);
    const LDATA = appData.lessons[this.props.lNum];
    console.log("LDATA");
    console.log(LDATA);
    return(
      <div>
        <h1>{LDATA.title}</h1>
        <h2>What is it?</h2>
        <p>{LDATA.content.what}</p>
        <h2>Why should you care?</h2>
        <p>{LDATA.content.why}</p>
        <h2>What can you do?</h2>
        <p>{LDATA.content.action}</p>
        <h3>More Information</h3>
        {
          LDATA.content.more.map((item, index) => (
            <p><a href={item.url} key={index}>{item.name}</a>, {item.description}</p>
          ))
        }
        <div className="row justify-content-center">
          <Button onClick={this.props.setLessonsView}>Back to Lessons</Button>
        </div>
      </div>
    )
  }
}

export default Lesson;