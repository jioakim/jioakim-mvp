import React from "react";
import ReactDOM from "react-dom";

class ResultListEntry extends React.Component {
  constructor(props) {
    super(props);
    //this.getInitialData = this.getInitialData.bind(this);
  }

  stringToPrint() {
    if (this.props.result.initial) {
      return '<p id="initialP">Hello! Your random name for today is' + this.props.result.firstName + '</p>';
    }
    return this.props.result.firstName;
  }

  render() {
    return (
      <div id="resultDiv">
        {this.props.result.initial &&
          <p id="initialP">
            Hello! Your random name for today is <b>{this.props.result.firstName} {this.props.result.middleName}</b> and you are in <i><u>{this.props.result.place}</u></i>
          </p>
        }
      </div>
    );
  }
}

export default ResultListEntry;

// data must be an array of objects like [{firstName:kjdhf, middleName:jhgddhg, place:kjkjdfd}, ....]