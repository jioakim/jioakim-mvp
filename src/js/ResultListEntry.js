import React from "react";
import ReactDOM from "react-dom";

class ResultListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    //this.getInitialData = this.getInitialData.bind(this);
  }

  handleDelete() {
    console.log(this.props.result.id);
    this.props.handleFirstNameDelete(this.props.result.id);
  }

  render() {
    return (
      <div id="resultDiv">
        {this.props.result.initial &&
          <p id="initialP">
            Hello! Your random name for today is <b>{this.props.result.firstName} {this.props.result.middleName}</b> and you are in <i><u>{this.props.result.place}</u></i>
          </p>
        }
        {this.props.result.input &&
          <p id="inputP">
            Lucky name is <b>{this.props.result.firstName} {this.props.result.middleName}</b> and you are in <i><u>{this.props.result.place}</u></i>{this.props.result.id}
            <a href='#' id="updateLink">update</a>
            <a href='#' id="deleteLink" onClick={this.handleDelete}>delete</a>
          </p>
        }
      </div>
    );
  }
}

export default ResultListEntry;

// data must be an array of objects like [{firstName:kjdhf, middleName:jhgddhg, place:kjkjdfd}, ....]