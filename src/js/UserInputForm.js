import React from "react";
import ReactDOM from "react-dom";
import ajaxHandler from "../../lib/ajaxHandler";

class UserInputForm extends React.Component {

  constructor(props) {
    super(props);
    this.cnReadOnly = true;
    this.state = {textInput:'', gnInput:'', anInput:'', unInput:'', gnReadOnly:false, anReadOnly:false, unReadOnly:false,
    fnGet:'', anPost:'', unUpdate:''};
    this.handleGNInput = this.handleGNInput.bind(this);
    this.handleANInput = this.handleANInput.bind(this);
    this.handleUNInput = this.handleUNInput.bind(this);
    this.handleCRUDFormSubmit = this.handleCRUDFormSubmit.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleInputFormSubmit = this.handleInputFormSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({gnInput:'', gnReadOnly:true, anInput:'', anReadOnly:false, fnGet:'', anPost:'', unUpdate:''});
    if (this.props.fnUpdateId !== nextProps.fnUpdateId) {
      this.setState({unInput:''});
    }
  }

  handleGNInput(e) {
    if (this.props.fnUpdate.length > 0 || this.state.anInput.length > 0) {
      this.setState({gnInput:'', gnReadOnly:true});
    } else {
      this.setState({gnInput:e.target.value, gnReadOnly:false});
    }
  }

  handleANInput(e) {
    if (this.props.fnUpdate.length > 0 || this.state.gnInput.length > 0) {
      this.setState({anInput:'', anReadOnly:true});
    } else {
      this.setState({anInput:e.target.value, anReadOnly:false});
    }
  }

  handleUNInput(e) {
    if (this.props.fnUpdate.length === 0) {
      this.setState({unInput:'', unReadOnly:true});
    } else {
      this.setState({unInput:e.target.value, unReadOnly:false});
    }
  }

  handleCRUDFormSubmit(e) {
    e.preventDefault();
    //this.setState({fnGet:'', anPost:'', unUpdate:''});
    var gn = this.state.gnInput;
    var an = this.state.anInput;
    var un = this.state.unInput;
    this.gn = gn;
    this.an = an;
    this.un = un;
    var that = this;
    if (gn.length > 0) {
      ajaxHandler.getFirstName(gn, function(data){
        that.setState({fnGet:data.firstName, anPost:'', unUpdate:''});
      });
    } else if (an.length > 0) {
      ajaxHandler.addFirstName(an, function(data){
        that.setState({anPost:data.newUser, fnGet:'', unUpdate:''});
      });
    } else if (un.length > 0 && un !== this.props.fnUpdate) {
      ajaxHandler.updateFisrtName(this.props.fnUpdateId, un, function(data){
        console.log(data);
        that.setState({unUpdate:data.update, fnGet:'', anPost:''});
      });
    }
  }

  handleUserInput(e) {
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
          <form onSubmit={this.handleCRUDFormSubmit}>
            <fieldset id="crudFieldset">
              <legend id="crudLegend">Welcome to CRUD Random Generator!</legend>
              <div class="crudDivs">
                <label class = "labelsCRUD">Get Name</label>
                <input type="text" class="crudInputs" value={this.state.gnInput} onChange={this.handleGNInput} readOnly={this.gnReadOnly}/>
              </div>
              <div class="crudDivs">
                <label class = "labelsCRUD">Current Name</label>
                <input id="crudCNInputBox" type="text" class="crudInputs" readOnly={this.cnReadOnly} value={this.props.fnUpdate} />
              </div>
              <div class="crudDivs">
                <label class = "labelsCRUD">Add Name</label>
                <input type="text" class="crudInputs" value={this.state.anInput} onChange={this.handleANInput} readOnly={this.anReadOnly}/>
              </div>
              <div class="crudDivs">
                <label class = "labelsCRUD">Update Name</label>
                <input type="text" class="crudInputs" value={this.state.unInput} onChange={this.handleUNInput} readOnly={this.unReadOnly}/>
              </div>
              <div class="submitDiv">
                <input type="submit" value="CRUD..." class="userButtonSubmit"/>
              </div>
            </fieldset>
          </form>
        </div>
        <div>
          {this.state.fnGet.length > 0 &&
          <div class="showCRUDDivs">
            {this.state.fnGet.length > 0 && this.state.fnGet !== 'not found' && <span>Thanks for GET. Name {this.gn} is in the DB!</span>}
            {this.state.fnGet === 'not found' && <span>Thanks for GET. Name {this.gn} is NOT in the DB. Try to add it!</span>}
          </div>
          }
          {this.state.anPost.length > 0 &&
          <div class="showCRUDDivs">
            {this.state.anPost === 'added' && <span>Thanks for ADD. The name {this.an} was sucessfully added to the DB!</span>}
            {this.state.anPost === 'exists' && <span>Nice try ADD but the name {this.an} already exists!</span>}
          </div>
          }
          {this.state.unUpdate.length > 0 &&
          <div class="showCRUDDivs">
            {this.state.unUpdate === 'completed' && <span>Thanks for UPDATE. The name {this.un} was sucessfully updated to the DB!</span>}
          </div>
          }
        </div>
        <div id="inputFormDiv">
          <form onSubmit={this.handleInputFormSubmit}>
            <fieldset id="userInputFieldset">
              <legend>Place some query...</legend>
              <div>
                <input type="text" maxLength="100" value={this.state.textInput} onChange={this.handleUserInput} id="userInputBox"/>
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