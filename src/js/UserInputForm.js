import React, { Component } from 'react';

class UserInputForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {textInput:''};
    this.handleInputFormSubmit = this.handleInputFormSubmit.bind(this);
    this.handleChangeUserInput = this.handleChangeUserInput.bind(this);
  }

  handleChangeUserInput(e) {
    this.setState({textInput: e.target.value});
  }

  handleInputFormSubmit(e) {
    e.preventDefault();
    var userTextInput = this.state.textInput;
    this.props.handleUserSubmit(userTextInput);
    this.setState({textInput:''});
  }

  render() {
    return (
      <div>
        <div>
          <form>
            <fieldset>
              <div>
                <label class = "labelsCRUD">Simple label</label><input type="text" />

              </div>
              <div>

              </div>
            </fieldset>
          </form>
        </div>
        <div id="inputFormDiv">
          <form onSubmit={this.handleInputFormSubmit}>
            <fieldset>
              <div>
                <label id="labelInputBox">Use your imagination and place some query!</label>
                <input type="text" maxLength="100" value={this.state.textInput} onChange={this.handleChangeUserInput} />
              </div>
              <div id="submitDiv">
                <input type="submit" value="send...." />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default UserInputForm;