import React from "react";
import ReactDOM from "react-dom";
import ResultListEntry from "./ResultListEntry";

class ResultsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="resultsListDiv">
        <div>
          <form onSubmit={this.props.getInitialDataHandle}>
            <input type="submit" value="Set the app to initial state with a new randomness!" id="inputButtonReload"/>
          </form>
        </div>
        {this.props.inputForm &&
        <div id="inputTextDiv">
          I am glad you used the input form!
          {this.props.random &&
          <span id="randomNumberSpan">  You got back {this.props.random} lucky names.</span>
          }
          {this.props.num &&
          <span id="numNumberSpan">  As your wish implies, let me give you {this.props.num} results.</span>
          }
        </div>
        }
        <div>
          {this.props.data.map(result => <ResultListEntry result={result} key={result.id} handleFirstNameDelete={this.props.handleFirstNameDelete} handleFirstNameUpdate={this.props.handleFirstNameUpdate}/>)}
        </div>
      </div>
    );
  }
}

export default ResultsList;

// data must be an array of objects like [{firstName:kjdhf, middleName:jhgddhg, place:kjkjdfd}, ....]