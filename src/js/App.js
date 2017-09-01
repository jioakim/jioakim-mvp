import React from "react";
import ReactDOM from "react-dom";
import UserInputForm from "./UserInputForm";
import ResultsList from "./ResultsList";
import ajaxHandler from "../../lib/ajaxHandler";
//import axios from "axios";


class App extends React.Component {
  constructor() {
    super();
    this.state = {data:[], random:false, inputForm:false, num:0, fnUpdate:'', fnUpdateId:''};
    this.getInitialData = this.getInitialData.bind(this);
    this.getInitialDataHandle = this.getInitialDataHandle.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
    this.handleFirstNameDelete = this.handleFirstNameDelete.bind(this);
    this.handleFirstNameUpdate = this.handleFirstNameUpdate.bind(this);
  }

  getInitialData(callback) {
    ajaxHandler.getInit(function(result){
      callback(result);
    });
  }

  getInitialDataHandle(e) {
    e.preventDefault();
    this.getInitialData(function(result){
      this.setState({data: result, random:false, inputForm:false, num:0});
    }.bind(this));
  }

  handleUserSubmit(userTextInput) {
    ajaxHandler.postUserInputSubmit(userTextInput, function(data){
      this.setState({data: data.results, inputForm:true, random: data.random, num:data.num});
    }.bind(this));
  }

  handleFirstNameDelete(id) {
    var arr = this.state.data;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        arr = arr.slice(0, i).concat(arr.slice(i+1, arr.length));
        break;
      }
    }
    var that = this;
    ajaxHandler.deleteFirstName(id, function(){
      that.setState({data:arr, fnUpdate:'', fnUpdateId:''});
    });
  }

  handleFirstNameUpdate(fnUpdateId, fnUpdate) {
    this.setState({fnUpdate:fnUpdate, fnUpdateId:fnUpdateId});
  }

  componentDidMount() {
    this.getInitialData(function(result){
      this.setState({data: result});
    }.bind(this));
  }

  render() {
    return (
      <div className='wrapper cf'>
        <UserInputForm handleUserSubmit = {this.handleUserSubmit} fnUpdate={this.state.fnUpdate} fnUpdateId={this.state.fnUpdateId}/>
        <ResultsList data = {this.state.data} random = {this.state.random} inputForm = {this.state.inputForm} num = {this.state.num} getInitialDataHandle={this.getInitialDataHandle} handleFirstNameDelete = {this.handleFirstNameDelete} handleFirstNameUpdate = {this.handleFirstNameUpdate}/>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App/>, app);