import React, {Component} from 'react';

import './App.css';
import Course from './components/Course';


class App extends Component {


  constructor(props){
    super(props);
    this.state={
      courses: [
        {
          id:1,
          name:'React',
          category:'JavaScript',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
        },
        {
          id:2,
          name:'Node',
          category:'JavaScript',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
        },
        {
          id:3,
          name:'PHP',
          category:'PHP',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
        },
        {
          id:4,
          name:'Laravel',
          category:'PHP',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
        },
        {
          id:5,
          name:'React',
          category:'JavaScript',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
        },
        {
          id:6,
          name:'Node',
          category:'JavaScript',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
        },
        {
          id:7,
          name:'PHP',
          category:'PHP',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
        },
        {
          id:8,
          name:'Laravel',
          category:'PHP',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
        },
        {
          id:9,
          name:'Laravel',
          category:'PHP',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
        },
      ]
    }
    this.remove = this.remove.bind(this);
  }

  remove(courseId){
    const {courses} = this.state,
      courseIndex = courses.findIndex(course => course.id == courseId);
    courses.splice(courseIndex, 1);
    this.setState({courses});
  }
  render(){
    const {state} = this;
    return(
      <div className="App">
        <h1>List of courses</h1>
        <ul className="courses-list">
          {
            state.courses.map(course => <Course course={course} onRemove={this.remove}/>)
          }
        </ul>

      </div>
    );

  }
}

export default App;
