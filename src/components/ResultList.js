import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
          <img alt={result.title} className="img-fluid" src={result.images.original.url} />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;

// eslint-disable-next-line no-lone-blocks
{/* 
src={this.state.result.picture.thumbnail}
name={this.state.result.name.first}
phone={this.state.result.phone}
email={this.state.result.email}
dob={this.state.result.dob.date}
/><Table  */}