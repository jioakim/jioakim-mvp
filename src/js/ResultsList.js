import React from "react";
import ResultListEntry from "./ResultListEntry";

const ResultsList = (props) => (
  <div id="resultsListDiv">
    <div>
      <form>
        <input type="submit" value="Set the app to initial state with a new randomness!" id="inputInitSubmit"/>
      </form>
    </div>
    {props.inputForm &&
    <div id="inputTextDiv">
      I am glad you used the input form!
      {props.random &&
      <span id="randomNumberSpan">  You got back {props.random} lucky names.</span>
      }
      {props.num &&
      <span id="numNumberSpan">  As your wish implies, let me give you {props.num} results.</span>
      }
    </div>
    }
    <div>
      {props.data.map(result => <ResultListEntry result={result} key={result.id}/>)}
    </div>
  </div>
);

export default ResultsList;

// data must be an array of objects like [{firstName:kjdhf, middleName:jhgddhg, place:kjkjdfd}, ....]