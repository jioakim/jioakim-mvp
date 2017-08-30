import React from "react";
import ReactDOM from "react-dom";
import UserInputForm from "./UserInputForm";
import ResultsList from "./ResultsList";
import ajaxHandler from "../../lib/ajaxHandler";
//import axios from "axios";


class App extends React.Component {
  constructor() {
    super();
    this.state = {data:[]};
    //this.getInitialData = this.getInitialData.bind(this);

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

  componentDidMount() {
    this.getInitialData(function(result){
      this.setState({data: result});
    }.bind(this));
  }

  render() {
    return (
      <div className='wrapper cf'>
        <UserInputForm />
        <ResultsList data = {this.state.data}/>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App/>, app);