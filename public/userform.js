import React, { Component } from "react";
import SeeProps from "./SeeProps";
import ListRendering from "./ListRendering";

class userForm extends Component {
  state = [
    {
      userName: "",
      course: "",
      year: ""
    }
  ];

  students;

  userNameHandler = (event) => {
    this.setState({userName: event.target.value});
  };

  courseHandler = event => {
    this.setState({ course: event.target.value });
  };

  yearHandler = event => {
    this.setState({ year: event.target.value });
  };

  submitHandler = event => {
    console.log(this.state);
    this.students = this.state;
    event.preventDefault();
  };

  render() {
    return (
      <>
        {/*<form onSubmit={this.submitHandler}>
          <label>UserName: </label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.userNameHandler}
          />
          <label>Course: </label>
          <input
            type="text"
            value={this.state.course}
            onChange={this.courseHandler}
          />

          <label>Year: </label>
          <select value={this.state.year} onChange={this.yearHandler}>
            <option value="2010">2010</option>
            <option value="2010">2011</option>
            <option value="2010">2012</option>
          </select>

    <button type="submit">Submit</button>*/}

          <frstprop roll="10" />
          <scndprop name="Tom" />

          { //<ListRendering />// }
        { //</form> //}
      </>
    );
  }
}

export default UserForm;
