import React from "react";
import ReactDOM from "react-dom";
import UserInputForm from "./UserInputForm";
import ResultsList from "./ResultsList";
import ajaxHandler from "../../lib/ajaxHandler";
//import axios from "axios";


class App extends React.Component {
  constructor() {
    super();
    this.state = {data:[], random:false, inputForm:false, num:0};
    this.getInitialData = this.getInitialData.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
    this.handleFirstNameDelete = this.handleFirstNameDelete.bind(this);
    this.getInitialDataHandle = this.getInitialDataHandle.bind(this);
  }

  getInitialData(callback) {
    // axios.get('http://127.0.0.1:3123/api/result')
    //   .then(res => {
    //     this.setState({data: res.data});
    //   })
    ajaxHandler.getInit(function(result){
      callback(result);
    });
  }

  getInitialDataHandle() {
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
    this.setState({data:arr});
    ajaxHandler.deleteFirstName(id);
  }

  componentDidMount() {
    this.getInitialData(function(result){
      this.setState({data: result});
    }.bind(this));
  }

  render() {
    return (
      <div className='wrapper cf'>
        <UserInputForm handleUserSubmit = {this.handleUserSubmit}/>
        <ResultsList data = {this.state.data} random = {this.state.random} inputForm = {this.state.inputForm} num = {this.state.num} handleFirstNameDelete = {this.handleFirstNameDelete} getInitialDataHandle={this.getInitialDataHandle}/>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App/>, app);