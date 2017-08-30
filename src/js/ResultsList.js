import React from "react";
import ResultListEntry from "./ResultListEntry";

const ResultsList = (props) => (
<div id="resultsListDiv" >
  <form>
    <input type="submit" value="Set the app to initial state with a new randomness!" id="inputInitSubmit"/>
  </form>
  {props.data.map(result => <ResultListEntry result={result} key={result.id}/>)}
</div>
);

export default ResultsList;

// data must be an array of objects like [{firstName:kjdhf, middleName:jhgddhg, place:kjkjdfd}, ....]