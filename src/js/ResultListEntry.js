import React from "react";
import ReactDOM from "react-dom";

class ResultListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    //this.getInitialData = this.getInitialData.bind(this);
  }

  handleUpdate() {
    this.props.handleFirstNameUpdate(this.props.result.id, this.props.result.firstName);
  }

  handleDelete() {
    this.props.handleFirstNameDelete(this.props.result.id);
  }

  render() {
    return (
      <div id="resultDiv">
        {this.props.result.initial &&
          <p id="initialP">
            Hello! Your random name for today is <b>{this.props.result.firstName} {this.props.result.middleName}</b> and you are in <i><u>{this.props.result.place}</u></i>
            <a class="updateLink" onClick={this.handleUpdate}>update</a>
            <a class="deleteLink" onClick={this.handleDelete}>delete</a>
          </p>

        }
        {this.props.result.input &&
          <p id="inputP">
            Lucky name is <b>{this.props.result.firstName} {this.props.result.middleName}</b> and you are in <i><u>{this.props.result.place}</u></i>
            <a class="updateLink" onClick={this.handleUpdate}>update</a>
            <a class="deleteLink" onClick={this.handleDelete}>delete</a>
          </p>
        }
      </div>
    );
  }
}

export default ResultListEntry;

// data must be an array of objects like [{firstName:kjdhf, middleName:jhgddhg, place:kjkjdfd}, ....]