import React, { Component } from 'react';

class UserInputForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {input:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({input: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.input);

  }

  render() {
    return (
      <div id="formDiv">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Welcome to names and places Generator!</legend>
            <div>
              <label class="labels" id="labelRandom">Use your imagination and place some query!</label>
              <input type="text" maxLength="100" onChange = {this.handleChange}/>
            </div>
            <div id="submitDiv">
              <input type="submit" value="send...." />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default UserInputForm;