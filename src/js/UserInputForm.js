import React, { Component } from 'react';

class UserInputForm extends React.Component {

  constructor(props) {
    super(props);
    this.cnReadOnly = true;
    this.state = {textInput:'', gnInput:'', anInput:'', unInput:'', gnReadOnly:false, anReadOnly:false, unReadOnly:false};
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
        <div id="inputCRUDDiv">
          <form>
            <fieldset id="crudFieldset">
              <legend id="crudLegend">Welcome to CRUD Random Generator!</legend>
              <div class="crudDivs">
                <label class = "labelsCRUD">Get Name</label><input type="text" class="crudInputs"/>
              </div>
              <div class="crudDivs">
                <label class = "labelsCRUD">Current Name</label><input id="crudCNInputBox" type="text" class="crudInputs" readOnly={this.cnReadOnly} value={this.props.fnUpdate}/>
              </div>
              <div class="crudDivs">
                <label class = "labelsCRUD">Add Name</label><input type="text" class="crudInputs"/>
              </div>
              <div class="crudDivs">
                <label class = "labelsCRUD">Update Name</label><input type="text" class="crudInputs"/>
              </div>
              <div class="submitDiv">
                <input type="submit" value="CRUD..." class="userButtonSubmit"/>
              </div>
            </fieldset>
          </form>
        </div>
        <div id="inputFormDiv">
          <form onSubmit={this.handleInputFormSubmit}>
            <fieldset id="userInputFieldset">
              <legend>Place some query...</legend>
              <div>
                <input type="text" maxLength="100" value={this.state.textInput} onChange={this.handleChangeUserInput} id="userInputBox"/>
              </div>
              <div class="submitDiv">
                <input type="submit" value="send...." class="userButtonSubmit"/>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default UserInputForm;